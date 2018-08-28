import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ViewContactsComponent } from './view-contacts-component/view-contacts.component';

import { DataTableComponent } from '../components/data-table/data-table.component';
import { RouterModule } from '@angular/router';

import { ContactListModule } from '../../../projects/contact-list/src/public_api';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ContactListModule
  ],
  declarations: [ViewContactsComponent, DataTableComponent]
})
export class ViewContactsModule { }
