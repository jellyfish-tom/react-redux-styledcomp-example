import React from 'react';
import styled from 'styled-components';

import { LoanState } from '../reducers/loan-reducer';

const StyledCalculationsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  div {
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
`;

function Calculations(props: { loan: LoanState }) {
  const { loan } = props;

  return (
    <StyledCalculationsContainer>
      <div>
        <span>Total interest:</span>
        <span>{`${loan.totalInterest.amount} ${loan.totalInterest.currency}`}</span>
      </div>
      <div>
        <span>Your montly cost:</span>
        <span>{`${loan.monthlyPayment.amount} ${loan.monthlyPayment.currency} `}</span>
      </div>
    </StyledCalculationsContainer>
  );
}

export default Calculations;
