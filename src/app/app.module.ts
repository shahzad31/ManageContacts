import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ContactListModule } from '../../projects/contact-list/src/public_api';
import { ContactAddEditModule } from '../../projects/contact-add-edit/src/public_api';

import { ViewContactsModule } from './view-contacts/view-contacts.module';
import { AddEditContactsModule } from './add-edit-contacts/add-edit-contacts.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import appReducer from './reducers';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ViewContactsModule,
    AddEditContactsModule,
    ContactListModule,
    ContactAddEditModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 10, }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
