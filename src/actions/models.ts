import { AxiosError } from 'axios';

export type ErrorType = (error: AxiosError) => { type: string; payload: AxiosError };

export interface Action {
  type: string;
  payload: any;
}

export interface AmountConfig {
  currency: string;
  amount: number;
}

export interface LoanGETResponse {
  principal: AmountConfig;
  numPayments: number;
  monthlyPayment: AmountConfig;
  nominalInterestRate: number;
  apr: number;
  totalPayable: AmountConfig;
  totalInterest: AmountConfig;
}
