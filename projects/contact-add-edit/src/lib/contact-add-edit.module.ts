import { NgModule } from '@angular/core';
import { NewContactComponent } from './new-contact/new-contact.component';
import { CommonComponentsModule } from 'ht-common-components/dist';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    CommonComponentsModule
  ],
  declarations: [NewContactComponent],
  exports: [NewContactComponent]
})
export class ContactAddEditModule { }
