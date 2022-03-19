import React, { useRef } from 'react';
import Input from './input';

import { useIMask, IMaskMixin } from 'react-imask';

const MaskedInput = IMaskMixin(({
  inputRef,
  ...props
}) => {
  return (
    <Input
      ref={inputRef}
      {...props}
    />
  )
});

export default MaskedInput;

