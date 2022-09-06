import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import InputBox from '../InputBox/InputBox';

interface Props {
  htmlFor: string;
  children: string;
  id: string;
  border?: string;
  className?: string;
  message?: string;
  label?: string;
}

const Container = styled.div`
  display: flex;
  button {
    margin-left: 12px;
    align-self: flex-end;
    flex-basis: 122px;
  }
`;

const Message = styled.p`
  margin-top: 10px;
  color: ${props => props.theme.color.primary};
  font-size: 16px;
  &.error {
    color: ${props => props.theme.color.error};
  }
`;

const InputBtn = ({
  htmlFor,
  children,
  id,
  border,
  className,
  message,
  label,
}: Props) => {
  return (
    <>
      <Container>
        <InputBox
          htmlFor={htmlFor}
          children={children}
          id={id}
          type='text'
          border={border}
          borderRadius='5px'
          margin='10px 0 0 0'
          padding='17px 0 17px 16px'
        />

        <Button
          type='button'
          label={label}
          padding='19px 0'
          borderRadius='5px'
          fontSize='16px'
          fontWeight='500'
          lineHeight='20px'
          color='#FFFFFF'
          bgColor={props => props.theme.color.primary}
        />
      </Container>
      <Message className={className}>{message}</Message>
    </>
  );
};

export default InputBtn;
