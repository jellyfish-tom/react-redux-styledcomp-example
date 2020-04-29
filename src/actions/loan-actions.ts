import { AxiosError } from 'axios';

import { ErrorType, Action, AmountConfig, LoanGETResponse } from './models';
import * as loanAPI from '../api/loan';
import { StoreState } from '../reducers/root-reducer';

export const SET_LOAN_MONTHS_DURATION = 'SET_LOAN_MONTHS_DURATION';
export const SET_LOAN_GBP_AMOUNT = 'SET_LOAN_GBP_AMOUNT';
export const LOAN_CALCULATION_SUCCESS = 'LOAN_CALCULATION_SUCCESS';
export const LOAN_ACTION_PENDING = 'LOAN_ACTION_PENDING';
export const ON_LOAN_ACTION_ERROR = 'ON_LOAN_ACTION_ERROR';

export type SetLoanMonthsDurationType = (durationInMonths: number) => Action;
export type SetLoanGBPAmountType = (amountInGBP: number) => Action;
export type OnLoanCalculationSuccessType = (monthlyPayment: AmountConfig, totalInterest: AmountConfig) => Action;
export type OnLoanActionPendingType = (isPending: boolean) => { type: string };
export type CalculateLoanType = () => void;

export const setLoanMonthsDuration: SetLoanMonthsDurationType = (durationInMonths: number) => ({
  // TODO: check what type is returned from slider
  type: SET_LOAN_MONTHS_DURATION,
  payload: durationInMonths,
});

export const setLoanGBPAmount: SetLoanGBPAmountType = (amountInGBP: number) => ({
  type: SET_LOAN_GBP_AMOUNT,
  payload: amountInGBP,
});

export const onLoanCalculationSuccess: OnLoanCalculationSuccessType = (
  monthlyPayment: AmountConfig,
  totalInterest: AmountConfig,
) => ({
  type: LOAN_CALCULATION_SUCCESS,
  payload: { monthlyPayment, totalInterest },
});

export const onLoanActionPending: OnLoanActionPendingType = (isPending: boolean) => ({
  type: LOAN_ACTION_PENDING,
  payload: isPending,
});

export const onLoanActionError: ErrorType = (error: AxiosError) => ({
  type: ON_LOAN_ACTION_ERROR,
  payload: error,
});

export const calculateLoan = () => {
  return (dispatch: Function, getState: () => StoreState) => {
    const { loan } = getState();

    if (loan.updated) {
      loanAPI.calculateLoan({
        queryParams: {
          amount: loan.loanGBPAmount,
          numMonths: loan.loanDurationInMonths,
        },
        begin: () => dispatch(onLoanActionPending(true)),
        error: (error: AxiosError) => dispatch(onLoanActionError(error)),
        success: (data: LoanGETResponse) => dispatch(onLoanCalculationSuccess(data.monthlyPayment, data.totalInterest)),
      });
    }
  };
};
