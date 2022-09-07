import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

const PhoneNumBox = () => {
  return (
    <Container>
      <Label htmlFor='phone' children='휴대폰번호' />
      <div>
        <Input id='phone' type='text' />
        <Input id='phone' type='text' />
        <Input id='phone' type='text' />
      </div>
    </Container>
  );
};

const Container = styled.div`
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
`;

export default PhoneNumBox;
