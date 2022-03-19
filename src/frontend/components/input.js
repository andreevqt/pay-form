import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { alpha } from '../theme/utils';
import useCombinedRefs from '../hooks/use-combined-refs';
import useMergedRef from '@react-hook/merged-ref'

const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0;
  right: 10px;
  color: ${({ theme }) => theme.inputPlaceholderColor};
`;

const InputInner = React.forwardRef(({
  rows,
  ...rest
}, ref) =>
  rows
    // @ts-ignore
    ? <textarea {...rest} rows={rows} ref={ref} />
    : <input  {...rest} ref={ref} />
);

const StyledInput = styled(InputInner)`
  width: 100%;
  line-height: 1.4;
  background-color: ${({ theme }) => theme.inputBgColor};
  border-radius: 3px;
  font-size: 16px;
  padding: 15px 20px;
  color: ${({ theme }) => theme.inputColor};
  border: 1px solid ${({ theme }) => theme.inputBorderColor};
  font-family: 'Montserrat', sans-serif;
  transition: all .2s ease;
`;

const InputWrapper = styled.div`
  position: relative;
  label {
    cursor: text;
    display: inline-block;
    font-family: font-family: 'Montserrat', sans-serif;
    margin-bottom: 10px;
  }

  ${StyledInput} {
    ${({ theme, focus }) => focus && `
      border-color: ${theme.colors.primary.base};
      box-shadow: 0 0 0 4px ${alpha(theme.colors.primary.base, .1)};
    `}
    ${({ theme, error }) => error && `
      border-color: ${theme.colors.danger.base};
      box-shadow: 0 0 0 4px ${alpha(theme.colors.danger.base, .1)};
    `}
  }

  label {
    ${({ theme, focus }) => focus && `
        color: ${theme.colors.primary.base};
    `}

    ${({ theme, error }) => error && `
      color: ${theme.colors.danger.base};
    `}
  }

  ${InputIcon} {
    ${({ theme, focus }) => focus && `
      color: ${theme.colors.primary.base};
    `}

    ${({ theme, error }) => error && `
      color: ${theme.colors.danger.base};
    `}
  }
`;

const Error = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.danger.base};
  margin-top: 5px;
`;

const Input = React.forwardRef(({
  icon,
  name,
  value,
  label,
  defaultValue,
  placeholder,
  className,
  onIconClick,
  onChange,
  onFocus,
  onBlur,
  error = false,
  errorText = 'Invalid property value',
  type = 'text',
  rows
}, forwardedRef) => {
  const [focus, setFocus] = useState(false);
  const innerRef = useRef(null);
  const ref = useMergedRef(innerRef, forwardedRef);

  const forceFocus = () => typeof ref === 'object' && ref.current.focus();

  const handleFocus = (e) => {
    setFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e) => {
    setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleIconClick = (e) => {
    if (onIconClick) {
      onIconClick(e);
    }
  };

  return (
    <div className={className}>
      <InputWrapper
        onClick={() => forceFocus()}
        focus={focus}
        error={error}
      >
        {label && (
          <label>{label}</label>
        )}
        <StyledInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          rows={rows}
          name={name}
          type={type}
          placeholder={placeholder}
          {...(typeof value !== 'undefined' && { value })}
          {...(typeof defaultValue !== 'undefined' && { defaultValue })}
          {...(onChange && { onChange })}
          autoComplete="off"
        />
        {icon && (
          <InputIcon
            onClick={handleIconClick}
          >
            {icon}
          </InputIcon>
        )}
      </InputWrapper>
      {error && <Error>{errorText}</Error>}
    </div>
  );
});

export default Input;
