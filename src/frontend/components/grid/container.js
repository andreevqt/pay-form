import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${({ theme, gutter = true, fullWidth = false }) => `
    margin: 0 auto;
    ${gutter && `padding-left: ${theme.grid.gutter}px;`}
    ${gutter && `padding-right: ${theme.grid.gutter}px;`}
    ${fullWidth ? `width: 100%;` : `max-width: ${theme.container.maxWidth}px;`}
  `}
`;

export default Container;
