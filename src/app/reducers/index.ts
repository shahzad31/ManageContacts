import { combineReducers } from '@ngrx/store';
import { contactReducer} from './contacts';
import { uiReducer} from './ui';

const appReducer = combineReducers({
  contact: contactReducer,
  ui: uiReducer,
});

export default appReducer;