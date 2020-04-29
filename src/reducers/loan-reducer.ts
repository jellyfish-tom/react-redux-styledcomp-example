import { AxiosError } from 'axios';
import { Action, AmountConfig } from '../actions/models';
import {
  LOAN_ACTION_PENDING,
  ON_LOAN_ACTION_ERROR,
  SET_LOAN_MONTHS_DURATION,
  SET_LOAN_GBP_AMOUNT,
  LOAN_CALCULATION_SUCCESS,
} from '../actions/loan-actions';

export type LoanState = {
  loanDurationInMonths: number;
  loanGBPAmount: number;
  totalInterest: AmountConfig;
  monthlyPayment: AmountConfig;
  actionPending: boolean;
  updated: boolean;
  error: AxiosError | null;
};

export default (
  state: LoanState = {
    loanDurationInMonths: 6,
    loanGBPAmount: 1000,
    totalInterest: { currency: 'GBP', amount: 0 },
    monthlyPayment: { currency: 'GBP', amount: 0 },
    actionPending: false,
    updated: true,
    error: null,
  },
  action: Action,
) => {
  switch (action.type) {
    case SET_LOAN_MONTHS_DURATION:
      return {
        ...state,
        updated: true,
        loanDurationInMonths: action.payload,
      };
    case SET_LOAN_GBP_AMOUNT:
      return {
        ...state,
        updated: true,
        loanGBPAmount: action.payload,
      };
    case LOAN_CALCULATION_SUCCESS:
      return {
        ...state,
        updated: false,
        totalInterest: action.payload.totalInterest,
        monthlyPayment: action.payload.monthlyPayment,
      };
    case LOAN_ACTION_PENDING:
      return {
        ...state,
        actionPending: action.payload,
      };
    case ON_LOAN_ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
