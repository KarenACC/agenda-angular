import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './contactos/pages/main-page/main-page.component';
import { AddContactComponent } from './contactos/components/add-contact/add-contact.component';
import { ListComponent } from './contactos/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddContactComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
