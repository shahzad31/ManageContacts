import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ViewContactsComponent } from './view-contacts-component/view-contacts.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ViewContactsComponent]
})
export class ViewContactsModule { }
