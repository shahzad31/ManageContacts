import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  contact = {
    fullname: {
      label: 'Name',
      value: 'Shahzad',
      type: 'text',
      validators: {
        required: true
      }
    },
    gender: {
      label: 'Gender',
      value: 'F',
      type: 'radio',
      options: [{ label: 'Male', value: 'M' }, { label: 'Female', value: 'F' }]
    },
    age: {
      label: 'Age',
      value: 27,
      type: 'number',
      validators: {
        min: 18
      }
    },
    email: {
      label: 'Email',
      value: 'test@gmail.com',
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
  constructor() { }

  ngOnInit() {
  }

}
