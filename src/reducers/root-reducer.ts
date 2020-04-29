import { combineReducers } from 'redux';

import loanReducer, { LoanState } from './loan-reducer';

export default combineReducers({
  loan: loanReducer,
});

export interface StoreState {
  loan: LoanState;
}
