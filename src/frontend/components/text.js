import React from 'react';
import styled, { css } from 'styled-components';

const elements = {
  display1: 'div',
  display2: 'div',
  display3: 'div',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  paragraph: 'p',
};

const getVariant = (variant) => {
  switch (variant) {
    case 'h1': {
      return css`
        font-size: 42px;
        margin-bottom: 15px;
      `
    }
    case 'h2': {
      return css`
        font-size: 36px;
        margin-bottom: 15px;
      `;
    }
    case 'h3': {
      return css`
        font-size: 26px;
        margin-bottom: 15px;
      `;
    }
    case 'h4': {
      return css`
        font-size: 20px;
        margin-bottom: 15px;
      `;
    }
    case 'h5': {
      return css`
        font-size: 16px;
        margin-bottom: 15px;
      `;
    }
    case 'paragraph': {
      return css`
        font-size: 15px;
        margin-bottom: 15px;
      `;
    }
    case 'display1': {
      return css`
        display: inline-block;
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 10px;
      `;
    }
    case 'display2': {
      return css`
        display: inline-block;
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 10px;
      `;
    }
    default: {
      return css``;
    }
  }
};

const StyledText = styled.div`
  ${({ muted, theme, bold, variant }) => css`
    ${getVariant(variant)}
    ${muted && `color: ${theme.muted};`}
    ${bold && `font-weight: 700;`}
  `}
`;

const Text = ({
  variant = 'display1',
  children,
  className,
  muted = false,
  bold = false
}) => {
  const el = elements[variant];
  return (
    <StyledText variant={variant} as={el} className={className} muted={muted} bold={bold}>
      {children}
    </StyledText>
  );
};

export default Text;
