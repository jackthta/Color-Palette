import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddColorCategoryModalComponent } from '../interaction/add-color-category-modal/add-color-category-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public addColorCategoryModal: MatDialog) { }

  ngOnInit(): void {
  }

  openAddColorCategoryModal() {
    const modalRef = this.addColorCategoryModal.open(AddColorCategoryModalComponent, {
      width: '350px',
      height: '350px'
    });

    // xTODO: Remove this subscription.
    modalRef.afterClosed().subscribe();
  }

}
