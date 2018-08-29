import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactAddEditService } from '../service/contact-list.service';
// import { newContact } from '../../actions/contacts.actions';

@Component({
  selector: 'ht-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss'],
  providers: [ContactAddEditService]
})
export class NewContactComponent implements OnInit {
  @Output() saveContact: EventEmitter<any> = new EventEmitter();
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
  constructor(private contactsService: ContactAddEditService) { }

  ngOnInit() {
  }

  onContactSave(data) {
    // this.store.dispatch(newContact(data));

    return this.contactsService.add(data).then(result => {
      if (result) {
        this.saveContact.emit(result);
      }
    });
  }

}
