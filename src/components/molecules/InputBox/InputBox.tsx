import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
interface Props {
  htmlFor: string;
  children: string;
  id: string;
  type: 'text' | 'checkbox';
  placeholder?: string;
  maxLength?: number;
  margin?: string;
  className?: string;
  message?: string;
}

const InputBox = ({
  htmlFor,
  children,
  type,
  id,
  className,
  message,
  ...props
}: Props) => {
  return (
    <>
      <Label htmlFor={htmlFor} children={children} className={className} />
      <Input id={id} type={type} className={className} {...props} />
      <Message className={className}>{message}</Message>
    </>
  );
};

const Message = styled.p`
  margin: 10px 0;
  color: ${props => props.theme.color.primary};
  font-size: 16px;
  &.errorMeg {
    color: ${props => props.theme.color.error};
  }
`;
export default InputBox;
