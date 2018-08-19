import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewContactsComponent} from './view-contacts/view-contacts-component/view-contacts.component'

const routes: Routes = [
  // {path: 'new-contact', component: AddContactComponent},
  { path: 'contacts', component: ViewContactsComponent},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
