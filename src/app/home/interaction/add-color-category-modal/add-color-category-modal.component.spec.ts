import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddColorCategoryModalComponent } from './add-color-category-modal.component';

describe('AddColorCategoryModalComponent', () => {
  let component: AddColorCategoryModalComponent;
  let fixture: ComponentFixture<AddColorCategoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddColorCategoryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddColorCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
