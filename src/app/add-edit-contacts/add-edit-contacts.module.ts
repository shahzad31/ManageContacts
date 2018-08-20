import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { AddContactComponent } from './add-contact/add-contact.component';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [AddContactComponent, DynamicFormComponent]
})
export class AddEditContactsModule { }
