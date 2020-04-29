import React from 'react';
import Slider from 'rc-slider';
import styled from 'styled-components';

import { LoanState } from '../reducers/loan-reducer';
import colors from '../colors';
import LogoContainer from './logo-container';
import Calculations from './calculations';

const StyledSlider = styled(Slider)``;

const StyledCalculator = styled.div`
  background: ${colors.white};
  width: 500px;
  height: 550px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid ${colors.green};
  align-self: center;
  justify-self: center;
`;

const StyledLabeledSlider = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const StyledLabel = styled.span`
  display: flex;
  font-weight: bold;
  margin-bottom: 5px;
  justify-content: space-between;

  span:last-child {
    margin-right: 2px;
  }
`;

const StyledSliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    width: 133px;

    &:nth-child(1) {
      margin-right: 10px;
    }

    &:last-child {
      margin-left: 20px;
    }
  }
`;

function LoanCalculator(props: {
  onLoanAmountChange: (GBPAmount: number) => void;
  onLoanDurationChange: (months: number) => void;
  calculateLoan: () => void;
  loan: LoanState;
}) {
  const { onLoanAmountChange, onLoanDurationChange, calculateLoan, loan } = props;

  return (
    <StyledCalculator>
      <LogoContainer />
      <StyledLabeledSlider>
        <StyledLabel>
          <span>How much would you like to borrow:</span>
          <span>{loan.loanGBPAmount} GBP</span>
        </StyledLabel>
        <StyledSliderContainer>
          <span>1000 GBP</span>
          <StyledSlider
            railStyle={{ backgroundColor: colors.pink, height: 8 }}
            trackStyle={{ backgroundColor: colors.blue, height: 8 }}
            handleStyle={{
              borderColor: colors.blue,
              height: 20,
              width: 20,
              marginLeft: 0,
              marginTop: -6,
              backgroundColor: colors.white,
            }}
            onChange={onLoanAmountChange}
            onAfterChange={calculateLoan}
            step={100}
            min={1000}
            max={5000}
          />
          <span>5000 GBP</span>
        </StyledSliderContainer>
      </StyledLabeledSlider>
      <StyledLabeledSlider>
        <StyledLabel>
          <span>For how long:</span>
          <span>{loan.loanDurationInMonths} months</span>
        </StyledLabel>
        <StyledSliderContainer>
          <span>6 months</span>
          <StyledSlider
            railStyle={{ backgroundColor: colors.pink, height: 8 }}
            trackStyle={{ backgroundColor: colors.blue, height: 8 }}
            handleStyle={{
              borderColor: colors.blue,
              height: 20,
              width: 20,
              marginLeft: 0,
              marginTop: -6,
              backgroundColor: colors.white,
            }}
            onChange={onLoanDurationChange}
            onAfterChange={calculateLoan}
            step={1}
            min={6}
            max={36}
          />
          <span>36 months</span>
        </StyledSliderContainer>
      </StyledLabeledSlider>
      <Calculations loan={loan} />
    </StyledCalculator>
  );
}

export default LoanCalculator;
