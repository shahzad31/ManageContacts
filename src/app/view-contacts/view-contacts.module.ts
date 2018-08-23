import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ViewContactsComponent } from './view-contacts-component/view-contacts.component';

import { DataTableComponent } from '../components/data-table/data-table.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ViewContactsComponent, DataTableComponent]
})
export class ViewContactsModule { }
