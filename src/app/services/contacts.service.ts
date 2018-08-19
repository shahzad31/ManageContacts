import {Injectable} from '@angular/core';
import CreateDataSource from '../../../libs/contactdatasource/index.js'
const LOCAL_STORAGE = 'localStorage';
@Injectable()
export class ContactsService {
  dataSource: any;
  constructor(){
    this.dataSource = CreateDataSource('contacts', LOCAL_STORAGE);
  }
}