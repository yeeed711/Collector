import styled from 'styled-components';

export interface InputProps {
  inputName: string;
  type: 'text' | 'checkbox';
  placeholder?: string;
  border?: string;
  borderRadius?: string;
  maxLength?: number;
  children?: string;
}

const StyledInput = styled.input<InputProps>`
  width: 100%;
  padding: 20px 0 20px 16px;
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;

const Input = ({ inputName, type, ...props }: InputProps) => {
  return (
    <StyledInput inputName={inputName} type={type} {...props}></StyledInput>
  );
};

export default Input;
