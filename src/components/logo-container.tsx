import React from 'react';
import styled from 'styled-components';

const StyledLogoContainer = styled.div`
  margin-bottom: 10px;

  h4 {
    display: flex;
    position: relative;
    top: -30px;
    justify-content: space-between;

    span:last-child {
      margin-right: 2px;
    }
  }
`;

function LogoContainer() {
  return (
    <StyledLogoContainer>
      <h3>Calculated for you with love by</h3>
      <img alt="logo" src={''} />
      <h4>
        <span>Loan</span>
        <span>Calculator</span>
      </h4>
    </StyledLogoContainer>
  );
}

export default LogoContainer;
