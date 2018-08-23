import { Component, OnInit } from '@angular/core';
import { ContactsService } from "../../services/contacts.service";
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { newContact } from '../../actions/contacts.actions';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
  providers: [ContactsService]
})
export class AddContactComponent implements OnInit {
  contact = {
    name: {
      label: 'Name',
      value: '',
      type: 'text',
      validators: {
        required: true
      }
    },
    gender: {
      label: 'Gender',
      value: 'M',
      type: 'radio',
      options: [{ label: 'Male', value: 'M' }, { label: 'Female', value: 'F' }]
    },
    age: {
      label: 'Age',
      value: '',
      type: 'number',
      validators: {
        min: 18
      }
    },
    email: {
      label: 'Email',
      value: '',
      type: 'email',
      validators: {
        required: true,
        email: true
      }
    },
    city: {
      label: 'City',
      value: 'ISL',
      type: 'select',
      options: [
        { label: '--select--', value: '' },
        { label: 'Islamabad', value: 'ISL' },
        { label: 'Lahore', value: 'LHR' },
        { label: 'Rawalpindi', value: 'RWP' }
      ]
    },
    country: {
      label: 'Country',
      value: 'PK',
      type: 'select',
      options: [
        { label: '--select--', value: '' },
        { label: 'Pakistan', value: 'PK' },
        { label: 'United States', value: 'USA' },
        { label: 'Germany', value: 'GER' }
      ]
    }
  };
  constructor(private contactsService: ContactsService, private router: Router, private store: Store<any>) { }

  ngOnInit() {
  }

  onContactSave(data) {
    this.store.dispatch(newContact(data));

    // this.contactsService.add(data).then(result => {
    //   if (result) {
    //     this.router.navigate(['/contacts']);
    //   }
    // });
  }

}
