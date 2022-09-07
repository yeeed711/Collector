import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

const EmailBox = () => {
  return (
    <Container>
      <Label htmlFor='email' children='이메일' />
      <div>
        <Input id='email' type='text' />
        <span>@</span>
        <Input id='email' type='text' />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    margin-bottom: 10px;
  }
  div {
    display: grid;
    grid-template-columns: 6fr 1fr 6fr;
    span {
      font-size: 16px;
      font-weight: 700;
      line-height: 56px;
      color: #767676;
      text-align: center;
    }
  }
`;
export default EmailBox;
