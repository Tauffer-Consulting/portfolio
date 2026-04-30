import React from 'react';
import { DefaultButton } from './styles';

export default function Button({buttonText, onClick}) {
  return (
    <DefaultButton
      value={buttonText}
      onClick={onClick}
    >
      {buttonText}
    </DefaultButton>
  )
}
