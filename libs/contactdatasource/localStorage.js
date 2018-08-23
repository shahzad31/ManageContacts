class LocalStorageManager {

  constructor() {

  }
  /*
  * create new client side local store object, will create empty if no object exists
  */
  createStore(name) {

    this._storageName = name || 'humanitec';

    if (!localStorage[this._storageName]) {
      const data = {
        contacts: [{
          id: Date.now(),
          name: 'Shahzad',
          age: 27,
          gender: 'M',
          email: 'shahzad31comp@gmail.com',
          city: 'ISL',
          country: 'PK'
        }]
      };
      localStorage[this._storageName] = JSON.stringify(data);
    }
    //returning promise to make it async, because in real life it will probably use async operations
    return new Promise((resolve, reject) => {
      if (localStorage[this._storageName]) {
        resolve(JSON.parse(localStorage[this._storageName]));
      } else {
        reject('Unexpected error');
      }
    });
  }




  _getContacts() {
    const data = JSON.parse(localStorage[this._storageName]);
    return data.contacts;
  }

  _updateContacts(contacts) {
    localStorage[this._storageName] = JSON.stringify({ contacts: contacts });
  }

  getContact(id) {
    const contacts = this._getContacts();

    // find that contact return it
    return new Promise((resolve, reject) => {
      const contact = contacts.find((item) => (
        item.id === id
      ))
      if (contact)
        resolve(contact);
      else
        reject('Contact does not exist');
    });
  }

  addContact(newContact) {

    const contacts = this._getContacts();

    newContact.id = Date.now();

    contacts.push(newContact);

    this._updateContacts(contacts);

    return new Promise((resolve, reject) => {
      if (newContact.id) {
        resolve(newContact);
      } else {
        reject('Unexpected error');
      }
    });
  }

  updateContact(updateContact) {

    const contacts = this._getContacts();

    // find that contact and update it in storage
    contacts.map((item, index) => (
      item.id === updateContact.id ? updateContact : item
    ));

    this._updateContacts(contacts);
    return new Promise((resolve, reject) => {
      resolve(updateContact);
    });
  };

  removeContact(id) {

    const contacts = this._getContacts();
    // remove item by filtering, we could also use splice
    const updatedContacts = contacts.filter(item => item.id != id)

    this._updateContacts(updatedContacts);

  };

  reset() {
    const data = { contacts: [] };
    localStorage[this._storageName] = JSON.stringify(data);

    return new Promise((resolve, reject) => {
      if (localStorage[this._storageName]) {
        resolve(JSON.parse(localStorage[_storageName]));
      } else {
        reject('Unexpected error');
      }
    });
  };
}

export default LocalStorageManager;