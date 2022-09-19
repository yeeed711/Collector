import React from 'react';
import styled from 'styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';
import { forwardRef } from 'react';

export interface InputProps {
  id?: string;
  type: 'text' | 'password' | 'checkbox' | 'search';
  placeholder?: string;
  borderBottom?: string;
  maxLength?: number;
  children?: string;
  margin?: string;
  className?: string;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
}

const Input = forwardRef(({ id, type, ...props }: InputProps) => {
  return <StyledInput id={id} type={type} {...props.register}></StyledInput>;
});

const StyledInput = styled.input<InputProps>`
  width: 100%;
  padding: 17px 0 17px 16px;
  border: 1px solid #c4c4c4;
  border-bottom: ${props => props.borderBottom};
  border-radius: 5px;
  margin: ${props => props.margin};
  font-size: 16px;
  color: #21bf48;
  &:focus {
    outline: none;
    color: #21bf48;
    border-color: #21bf48;
    &::placeholder {
      color: #21bf48;
    }
  }
  &::placeholder {
    font-size: 16px;
    color: #767676;
  }
  &[type='search'] {
    border: 2px solid #21bf48;
    border-radius: 50px;
    padding: 13px 0 13px 22px;
  }
  &.error {
    border-color: ${props => props.theme.color.error};
    color: ${props => props.theme.color.error};
    &::placeholder {
      color: ${props => props.theme.color.error};
    }
  }
  &.square {
    padding: 17px 0;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #c4c4c4;
    &:focus {
      border-color: #21bf48;
      &::placeholder {
        color: #21bf48;
      }
    }
  }
`;

export default Input;
