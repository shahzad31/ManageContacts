// import CreateDataSource from '../../../libs/contactdatasource'
import CreateDataSource from 'contactsdatasource';

const LOCAL_STORAGE = 'localStorage';

const dataSource = CreateDataSource('contacts', LOCAL_STORAGE);
const store = dataSource.createStore();

export const addContactToStorage = (data) => {
  dataSource.addContact(data);
}

export const getContactsList = (data) => {

}