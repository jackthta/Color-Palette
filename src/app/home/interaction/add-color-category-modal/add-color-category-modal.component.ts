import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import iro from '@jaames/iro';

@Component({
  selector: 'app-add-color-category-modal',
  templateUrl: './add-color-category-modal.component.html',
  styleUrls: ['./add-color-category-modal.component.css']
})
export class AddColorCategoryModalComponent implements OnInit {
  colorPickerDefaultColor = "#FFF";
  colorPicker: any;

  colorPickerForm = new FormGroup({
    categoryName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    hexColor: new FormControl('', [
      Validators.required,
      Validators.maxLength(7),
    ]),
  });
  hexColorInput: HTMLElement | null | undefined;
  IS_VALID_HEXCOLOR: boolean = true;

  constructor(public modalRef: MatDialogRef<AddColorCategoryModalComponent>) { }

  ngOnInit(): void {
    // Wrapped iro.ColorPicker w/ 'as any' to shut the compiler up about the --noImplicitFlag being triggered.
    this.colorPicker = new (iro.ColorPicker as any)('#color_picker', {
      width: 150,
      color: this.colorPickerDefaultColor,
    });

    // Set event listener to detect color picker color change. i.e. change in COLOR_PICKER -> update in HEX_INPUT
    this.colorPicker.on(
      ['color:init', 'color:change'],
      this.updateColorPickerFormHexColor
    );

    // Set event listener for changes in hex color form input. i.e. change in HEX_INPUT -> update in COLOR_PICKER
    this.hexColorInput = document.getElementById('color_picker_hex_input');
    this.hexColorInput?.addEventListener('keypress', this.updateColorPickerColor, false);
  }

  ngOnDestroy() {
    // Turn off all event listeners.
    this.colorPicker.off(['color:init', 'color:change'], this.updateColorPickerFormHexColor);
    this.hexColorInput?.removeEventListener('keypress', this.updateColorPickerColor, false);
  }

  onSubmit() {
    // Do last check on the validity of the hex color input.
    // (Bc of some bug where you can enter 1 char and the submit button won't detect its invalidity)
    const HEX_CODE = this.colorPickerForm.get('hexColor')?.value;
    if (!this.isValidHexColor(HEX_CODE)) {
      this.IS_VALID_HEXCOLOR = false;
    } else {
      // Return package of data to parent component.
      const categoryName = this.colorPickerForm.get('categoryName')?.value;
      const hexColor = this.colorPickerForm.get('hexColor')?.value;

      this.modalRef.close(this.generateReturnPackage(categoryName, hexColor));
    }
  }

  onCancel() {
    this.modalRef.close();
  }

  isValidHexColor(HEX_CODE: string) {
    const isValid3CharHexColor = () => {
      return HEX_CODE.length === 4
        && /^#([0-9A-F]{3}){1,2}$/i.test(HEX_CODE); // Regex check for whether the HEX_CODE is a valid hex color.
    }
    const isValid6CharHexColor = () => {
      return HEX_CODE.length === 7
        && /^#[0-9A-F]{6}$/i.test(HEX_CODE); // Regex check for whether the HEX_CODE is a valid hex color.
    }

    return typeof HEX_CODE === 'string'
      && HEX_CODE[0] === '#'
      && (isValid3CharHexColor() || isValid6CharHexColor());
  }

  generateReturnPackage(categoryName: string, pickedColor: string) {
    return {
      categoryName,
      pickedColor
    }
  }

  // Function to update colorPickerForm's hexColor input on colorPicker color change.
  updateColorPickerFormHexColor = () => {
    this.colorPickerForm.get('hexColor')?.setValue(this.colorPicker.color.hexString);

    // If IS_VALID_HEXCOLOR bool is false, set it to true since picking
    // from the color picker object will always return a valid hex color.
    if (!this.IS_VALID_HEXCOLOR) {
      this.IS_VALID_HEXCOLOR = true;
    }
  }

  // Function to update color picker object's color on colorPickerForm's hexColor input change.
  updateColorPickerColor = (keypress: any) => {
    // Only set hex color into color picker if user presses ENTER.
    const userPressedENTER = keypress.key.localeCompare('Enter') === 0;
    const HEX_CODE = this.colorPickerForm.get('hexColor')?.value;

    if (userPressedENTER) {
      if (this.IS_VALID_HEXCOLOR = this.isValidHexColor(HEX_CODE)) {
        this.colorPicker.color.set(HEX_CODE);
      } else {
        this.IS_VALID_HEXCOLOR = false;
      }
    } else if (!this.isValidHexColor(HEX_CODE)) {
      this.IS_VALID_HEXCOLOR = false;
    }
  }
}
