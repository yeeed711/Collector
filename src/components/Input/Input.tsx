import React from 'react';
import styled, { css } from 'styled-components';

interface IInput {
  id?: string;
  type: 'text' | 'password' | 'email' | 'checkbox';
  placeholder: string;
}

const Input = ({ id, type, placeholder }: IInput) => {
  return <InputStyle type={type} placeholder={placeholder} id={id} />;
};

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
