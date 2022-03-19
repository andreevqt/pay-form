import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Loader from '../icons/loader';
import { alpha } from '../theme/utils';

const StyledOverlay = styled(({ className }) => {
  return (
    <div className={className}>
      <Loader width="20" height="20" />
    </div>
  );
})`
  border-radius: 3px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const getButtonSize = (size) => {
  switch (size) {
    case 'small': {
      return css`
        font-size: 14px;
      `;
    }
    case 'medium': {
      return css`
        padding: 10px 20px;
        font-size: 16px;
      `;
    }
    case 'big': {
      return css`
        font-size: 18px;
      `;
    }
    default: {
      return css``;
    }
  }
};

const getButtonVariant = (variant) => {
  switch (variant) {
    case 'primary': {
      return css`
        ${({ theme }) => `
          background-color: ${theme.colors.primary.base};
          border: 1px solid ${theme.colors.primary.base};
          color: #fff;
          &:hover {
            background-color: ${theme.colors.primary.light};
            border-color: ${theme.colors.primary.light};
          }
          &:focus {
            box-shadow: 0 0 0 4px ${alpha(theme.colors.primary.base, .3)};
          }
          ${StyledOverlay} {
            background-color: ${theme.colors.primary.base};
          }
        `}
      `;
    }
    case 'secondary': {
      return css`
        ${({ theme }) => `
          background-color: ${theme.colors.secondary.base};
          border:1px solid ${theme.colors.secondary.base};
          color: ${theme.bodyColor};
          &:hover {
            background-color: ${theme.colors.secondary.lightest};
            border-color: ${theme.colors.secondary.lightest};
          }
          ${StyledOverlay} {
            background-color: ${theme.colors.secondary.base};
          }
        `}
      `;
    }
    default: {
      return css``;
    }
  }
};

const Icon = styled.div`
  margin-right: 10px;
  font-size: 0;
`;

const ButtonComponent = ({
  onClick,
  type = 'button',
  children,
  iconStart,
  className = '',
  loading = false,
  to
}) => {
  return to ? (
    <Link to={to} className={className}>
      {iconStart && <Icon>{iconStart}</Icon>}
      {children}
      {loading && <StyledOverlay />}
    </Link>
  ) : (
    <button type={type} className={className} onClick={onClick}>
      {iconStart && <Icon>{iconStart}</Icon>}
      {children}
      {loading && <StyledOverlay />}
    </button>);
};

const Button = styled(ButtonComponent)`
  ${({ theme, variant = 'primary', fullWidth = false, size = 'medium', loading = false }) => css`
    padding: 10px 20px;
    position: relative;
    border-radius: 3px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all .2s ease;
    font-weight: 500;
    letter-spacing: .4px;
    line-height: 1;
    width: ${fullWidth ? '100%' : 'auto'};
    ${loading && `pointer-events: none;`}
    ${getButtonSize(size)}
    ${getButtonVariant(variant)}
`}`;

export default Button;
