import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CommonComponentsComponent } from './common-components.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    CommonComponentsComponent,
    DataTableComponent,
    DynamicFormComponent,
    NavbarComponent
  ],
  exports: [
    CommonComponentsComponent,
    DataTableComponent,
    DynamicFormComponent,
    NavbarComponent
  ]
})
export class CommonComponentsModule { }
