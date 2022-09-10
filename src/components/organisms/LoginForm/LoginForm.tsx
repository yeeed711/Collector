import styled, { css } from 'styled-components';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import React, { useState } from 'react';
import LinkBox from '../../molecules/LinkBox/LinkBox';

interface Props {
  selected?: string | Fn;
  onClick?: () => void;
}

type Fn = {
  (props: Props): string;
};

const FormContainer = styled.form<Props>`
  margin-bottom: 30px;
`;

const LoginStyle = styled.form`
  width: 550px;
  padding: 35px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  background-color: #ffffff;
  input {
    padding: 17px 0;
    border-radius: 0;
    &:focus {
      border-bottom: 1px solid #21bf48;
    }
  }
  input + input {
    margin-top: 6px;
  }
  button {
    margin-top: 36px;
  }
`;

const UserTypeContainer = styled.div<Props>`
  display: flex;
  button {
    font-weight: 500;
    font-size: 18px;
    width: 275px;
    padding: 20px 0 40px;
    border: 1px solid #c4c4c4;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-bottom: -20px;
    background-color: #f2f2f2;
    /* z-index: -1; */
    border-bottom-style: none;
    ${props =>
      props.selected === 'BUYER' &&
      css`
      background-color:#FFFFFF
      z-index:0;
    `}
    ${props =>
      props.selected === 'SELLER' &&
      css`
        background-color: #f2f2f2;
        z-index: 1;
      `}
  }
`;

const LoginForm = () => {
  const [userType, setUserType] = useState('BUYER');

  return (
    <>
      <FormContainer selected={userType}>
        <UserTypeContainer>
          <button onClick={() => setUserType('BUYER')}>구매회원 로그인</button>
          <button onClick={() => setUserType('SELLER')}>판매회원 로그인</button>
        </UserTypeContainer>
        <LoginStyle>
          <Label htmlFor='userId' children='아이디' className='ir' />
          <Input
            id='userId'
            type='text'
            placeholder='아이디'
            className='square'
          />
          <Label htmlFor='password' children='비밀번호' className='ir' />
          <Input
            id='password'
            type='password'
            placeholder='비밀번호'
            className='square'
          />
          <Button
            type='submit'
            label='로그인'
            padding='19px 0'
            borderRadius='5px'
            fontSize='18px'
            fontWeight='700'
            lineHeight='22px'
            color='#FFFFFF'
            bgColor={props => props.theme.color.primary}
          />
        </LoginStyle>
      </FormContainer>
      <LinkBox />
    </>
  );
};
export default LoginForm;
