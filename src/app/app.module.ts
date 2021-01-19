import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddColorCategoryModalComponent } from './home/interaction/add-color-category-modal/add-color-category-modal.component';

// Angular material
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    AddColorCategoryModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

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
