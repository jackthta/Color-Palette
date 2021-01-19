import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import iro from '@jaames/iro';

@Component({
  selector: 'app-add-color-category-modal',
  templateUrl: './add-color-category-modal.component.html',
  styleUrls: ['./add-color-category-modal.component.css']
})
export class AddColorCategoryModalComponent implements OnInit {

  colorPicker = null;

  constructor(public modalRef: MatDialogRef<AddColorCategoryModalComponent>) { }

  ngOnInit(): void {
    // Wrapped iro.ColorPicker w/ 'as any' to shut the compiler up about the --noImplicitFlag being triggered.
    this.colorPicker = new (iro.ColorPicker as any)('#color_picker', {
      width: 150,
      color: "#fff"
    });
  }

}
