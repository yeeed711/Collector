import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

const InputBox = ({
  htmlFor,
  children,
  type,
  id,
  message,
  className,
  ...props
}: Props) => {
  return (
    <>
      <Label htmlFor={htmlFor} children={children} {...props} />
      <Input id={id} type={type} {...props} />
      <Message className={className}>{message}</Message>
    </>
  );
};

interface Props {
  htmlFor: string;
  children: string;
  id: string;
  type: 'text' | 'checkbox';
  placeholder?: string;
  border?: string;
  borderRadius?: string;
  maxLength?: number;
  margin?: string;
  message?: string;
  className?: string;
}

const Message = styled.p`
  color: ${props => props.theme.color.primary};
  font-size: 16px;
  &.error {
    color: ${props => props.theme.color.error};
  }
`;

export default InputBox;
