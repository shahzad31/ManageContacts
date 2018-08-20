import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewContactsComponent } from './view-contacts/view-contacts-component/view-contacts.component';
import { AddContactComponent } from './add-edit-contacts/add-contact/add-contact.component';


const routes: Routes = [
  { path: 'create', component: AddContactComponent },
  { path: 'contacts', component: ViewContactsComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
