import { Action } from '@ngrx/store';
import { SET_CONTACTS, NEW_CONTACT, UPDATE_CONTACT, REMOVE_CONTACT } from '../actions/contacts.actions';
import { addContactToStorage } from './utils';
export const RESET = 'RESET';

const initialState = {
  list: []
};

export function contactReducer(state: any = initialState, action) {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, list: action.payload };

    case NEW_CONTACT:
      const newContact = action.payload;
      addContactToStorage(newContact);
      return {};

    case UPDATE_CONTACT:
      return state;

    case REMOVE_CONTACT:
      return state;

    case RESET:
      return 0;

    default:
      return state;
  }
}