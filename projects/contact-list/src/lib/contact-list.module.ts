import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';


import { ContactListComponent } from './contact-list-component/contact-list.component';
import { CommonComponentsModule } from 'ht-common-components/dist';

// import { CommonComponentsModule } from '../../../common-components/src/public_api';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    CommonComponentsModule
  ],
  declarations: [ContactListComponent],
  exports: [ContactListComponent]
})
export class ContactListModule { }
