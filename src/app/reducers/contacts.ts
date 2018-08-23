import { Action } from '@ngrx/store';
import { SET_CONTACTS, NEW_CONTACT, UPDATE_CONTACT, REMOVE_CONTACT } from '../actions/contacts.actions';

export const RESET = 'RESET';

const initialState = {
  list: []
};

export function contactReducer(state: any = initialState, action) {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, list: action.payload };

    case NEW_CONTACT:
      return state - 1;

    case UPDATE_CONTACT:
      return state - 1;

    case REMOVE_CONTACT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}