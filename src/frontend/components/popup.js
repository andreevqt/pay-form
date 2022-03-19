import React from 'react';
import styled from 'styled-components';
import CrossOut from '../icons/cross-out';

const Icon = styled.div`
  top: calc(50% - 24px/2);
  cursor: pointer;
  font-size: 0;
  position: absolute;
  z-index: 999999;
  right: 20px;
`;

const Popup = ({ children, className, iconSize = '24', onClick }) => {
  return (
    <div
      className={className}
    >
      <Icon onClick={onClick}>
        <CrossOut width={iconSize} height={iconSize} />
      </Icon>
      {children}
    </div>
  );
};

const StyledPopup = styled(Popup)`
  ${({ theme }) => `
    position: fixed;
    top: 20px;
    right: 10px;
    left: 10px;
    padding: 20px;
    border-radius: 3px;
    background-color: ${theme.colors.danger.base};
    color: ${theme.colors.white.base};
    font-size: 20px;
    text-align: center;
  `}
` ;

export default StyledPopup;
