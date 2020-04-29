import React from 'react';
import Calculations from './components/calculations';
import LoanCalculator from './components/loan-calculator';
import LogoContainer from './components/logo-container';
import renderer from 'react-test-renderer';

const loan = {
  loanDurationInMonths: 6,
  loanGBPAmount: 1000,
  totalInterest: { currency: 'GBP', amount: 0 },
  monthlyPayment: { currency: 'GBP', amount: 0 },
  actionPending: false,
  updated: true,
  error: null,
};

test('Calculations component matches snapshot', () => {
  const component = renderer.create(
    <Calculations
      onLoanAmountChange={data => {}}
      onLoanDurationChange={data => {}}
      calculateLoan={() => {}}
      loan={loan}
    />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('LoanCalculator component matches snapshot', () => {
  const component = renderer.create(<LoanCalculator loan={loan} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('LogoContainer component matches snapshot', () => {
  const component = renderer.create(<LogoContainer />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
