export const breakpointsMax = (name, breakpoints) => {
  const max = breakpoints[name];
  return max && max > 0 ? max - .02 : null;
};

export const breakpointsMin = (name, breakpoints) => {
  // @ts-ignore
  const min = breakpoints[name];
  return min !== 0 ? min : null;
};

export const mediaBreakpointUp = (name, content, breakpoints) => {
  const min = breakpointsMin(name, breakpoints);
  if (min) {
    return `@media (min-width: ${min}px) {
      ${content}
    }`;
  }

  return content;
};

export const breakpointInfix = (name, breakpoints) => {
  return breakpointsMin(name, breakpoints) === null ? `` : `-${name}`;
};

export const makeCol = (size, columns) => {
  if (size && size === 'auto') {
    return `
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    `;
  }

  if (size) {
    return `flex: 0 0 auto; width: ${size * 100 / columns}%;`;
  }

  return `
      flex: 1 1 0;
      max-width: 100%;
  `;
};
