import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewContactsComponent } from './routes/contacts/view-contacts.component';
import { NewContactComponent } from './routes/new-contact/new-contact.component';


const routes: Routes = [
  { path: 'new-contact', component: NewContactComponent },
  { path: 'contacts', component: ViewContactsComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
