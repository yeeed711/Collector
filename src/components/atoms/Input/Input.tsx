import React from 'react';
import styled from 'styled-components';

const Input = ({ id, type, ...props }: InputProps) => {
  return <StyledInput id={id} type={type} {...props}></StyledInput>;
};
export interface InputProps {
  id?: string;
  type: 'text' | 'checkbox' | 'search';
  placeholder?: string;
  border?: string;
  borderBottom?: string;
  borderRadius?: string;
  maxLength?: number;
  children?: string;
  margin?: string;
  padding?: string;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input<InputProps>`
  width: 100%;
  padding: ${props => props.padding};
  border: ${props => props.border};
  border-bottom: ${props => props.borderBottom};
  border-radius: ${props => props.borderRadius};
  margin: ${props => props.margin};
  font-size: 20px;
  &:focus {
    outline: none;
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
`;

export default Input;
