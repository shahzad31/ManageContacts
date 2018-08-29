import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonComponentsModule } from 'ht-common-components/dist';
import { ContactAddEditModule } from 'ht-contact-add-edit/dist';
import { ContactListModule } from 'ht-contact-list/dist';


// for live testing
// import { ContactListModule } from '../../projects/contact-list/src/public_api';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import appReducer from './reducers';

import { AppComponent } from './app.component';

import { ViewContactsComponent } from './routes/contacts/view-contacts.component';
import { NewContactComponent } from './routes/new-contact/new-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewContactsComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ContactListModule,
    ContactAddEditModule,
    CommonComponentsModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 10, }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
