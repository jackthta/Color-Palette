import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { AddColorCategoryModalComponent } from './home/interaction/add-color-category-modal/add-color-category-modal.component';

// Angular material
import { MatDialogModule } from '@angular/material/dialog';
import { ColorRowComponent } from './home/color-row/color-row/color-row.component';
import { ColorCategoryComponent } from './home/color-category/color-category/color-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    AddColorCategoryModalComponent,
    ColorRowComponent,
    ColorCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // Angular material
    MatDialogModule
  ],
  providers: [],
  entryComponents: [
    AddColorCategoryModalComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
