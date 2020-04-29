import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';

import {
  setLoanGBPAmount,
  setLoanMonthsDuration,
  SetLoanGBPAmountType,
  SetLoanMonthsDurationType,
  calculateLoan,
  CalculateLoanType,
} from '../actions/loan-actions';
import { StoreState } from '../reducers/root-reducer';
import { LoanState } from '../reducers/loan-reducer';
import LoanCalculator from '../components/loan-calculator';

function HomePage(props: {
  setLoanGBPAmount: SetLoanGBPAmountType;
  setLoanMonthsDuration: SetLoanMonthsDurationType;
  calculateLoan: CalculateLoanType;
}) {
  const { loan }: { loan: LoanState } = useSelector((state: StoreState) => state);
  const { setLoanGBPAmount, setLoanMonthsDuration, calculateLoan } = props;

  const onLoanAmountChange = (GBPAmount: number) => {
    setLoanGBPAmount(GBPAmount);
  };

  const onLoanDurationChange = (months: number) => {
    setLoanMonthsDuration(months);
  };

  useEffect(calculateLoan, [setLoanGBPAmount, setLoanMonthsDuration]);

  return (
    <div className="page home">
      <LoanCalculator
        onLoanAmountChange={onLoanAmountChange}
        onLoanDurationChange={onLoanDurationChange}
        calculateLoan={calculateLoan}
        loan={loan}
      />
    </div>
  );
}

export default connect(null, {
  setLoanGBPAmount,
  setLoanMonthsDuration,
  calculateLoan,
})(HomePage);
