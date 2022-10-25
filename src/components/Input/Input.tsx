import React, { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled, { css } from 'styled-components';

interface IInput {
  id?: string;
  type: 'text' | 'password' | 'email' | 'checkbox';
  placeholder: string;
  register?: UseFormRegisterReturn;
}

const Input = forwardRef(({ id, type, placeholder, ...props }: IInput) => {
  return (
    <InputStyle
      type={type}
      placeholder={placeholder}
      id={id}
      {...props.register}
    />
  );
});

export default Input;

const InputModuleStyle = css`
  padding: 20px 0;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  color: #767676;
  outline: none;
`;

const InputStyle = styled.input`
  ${InputModuleStyle}
`;
