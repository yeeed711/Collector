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
  display: grid;
  gap: 6px 10px;
  grid-template-columns: 3fr 1fr;
  input {
    grid-column: 1/2;
  }
  button {
    grid-column: 2/3;
    grid-row: 2/3;
  }
  p {
    grid-column: 1/2;
  }
`;

const InputBtn = ({
  htmlFor,
  children,
  id,
  className,
  message,
  label,
}: Props) => {
  return (
    <>
      <Container>
        <InputBox
          id={id}
          type='text'
          htmlFor={htmlFor}
          children={children}
          className={className}
          message={message}
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
    </>
  );
};

export default InputBtn;
