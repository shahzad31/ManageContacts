import { Injectable } from '@angular/core';

import CreateDataSource from 'contactsdatasource';
const LOCAL_STORAGE = 'localStorage';

@Injectable({
  providedIn: 'root'
}) export class ContactListService {
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
