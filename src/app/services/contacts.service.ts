import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

// import CreateDataSource from '../../../libs/contactdatasource'
import CreateDataSource from 'contactsdatasource';
const LOCAL_STORAGE = 'localStorage';
@Injectable()
export class ContactsService {
  contacts: any;
  store: any;
  dataSource: any;
  constructor() {
    this.dataSource = CreateDataSource('contacts', LOCAL_STORAGE);
    this.store = this.dataSource.createStore();
  }

  add(data) {
    return this.dataSource.addContact(data);
  }
}
