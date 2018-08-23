export const NEW_CONTACT = 'NEW_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const SET_CONTACTS = 'SET_CONTACTS';

export function newContact(payload) {
  return {
    type: NEW_CONTACT,
    payload
  }
}


export function updateContact(payload) {
  return {
    type: UPDATE_CONTACT,
    payload
  }
}


export function removeContact(payload) {
  return {
    type: REMOVE_CONTACT,
    payload
  }
}