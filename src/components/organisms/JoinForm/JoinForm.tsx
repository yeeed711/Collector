import { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../../atoms/Button/Button';
import InputBox from '../../molecules/InputBox/InputBox';
import CheckTextBox from '../../molecules/CheckTextBox/CheckTextBox';
import InputBtn from '../../molecules/InputBtn/InputBtn';
import EmailBox from '../../molecules/EmailBox/EmailBox';
import PhoneNumBox from '../../molecules/PhoneNumBox/PhoneNumBox';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Props {
  selected?: string | Fn;
  onClick?: () => void;
}

type Fn = {
  (props: Props): string;
};

const FormContainer = styled.form<Props>`
  width: 550px;
`;

const JoinStyle = styled.div`
  padding: 35px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  background-color: #ffffff;
  input + input {
    margin-top: 6px;
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
    z-index: -1;
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

const CheckContainer = styled.div`
  padding: 34px;
  button {
    margin-top: 34px;
  }
`;

const JoinForm = () => {
  const [userType, setUserType] = useState('BUYER');

  interface IUserData {
    userId: string;
    name: string;
    password: string;
    phone: string;
    email: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>({
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<IUserData> = data => console.log(data);
  return (
    <FormContainer selected={userType} onSubmit={handleSubmit(onSubmit)}>
      <UserTypeContainer>
        <button onClick={() => setUserType('BUYER')}>구매회원가입</button>
        <button onClick={() => setUserType('SELLER')}>판매회원가입</button>
      </UserTypeContainer>
      <JoinStyle>
        <InputBtn
          htmlFor='userId'
          id='userId'
          children='아이디'
          border='1px solid #C4C4C4'
          className=''
          // message='멋진 아이디네요 :)'
          label='중복확인'
        />
        <InputBox
          register={register('password', {
            required: '비밀번호를 입력해주세요!!',
          })}
          htmlFor='password'
          children='비밀번호'
          id='password'
          type='password'
          placeholder=''
          margin='10px 0 0 0'
        />
        {errors?.password && <p>{errors.password.message}</p>}
        <InputBox
          htmlFor='password'
          children='비밀번호 재확인'
          id='repassword'
          type='text'
          placeholder=''
          margin='10px 0 0 0'
        />
        <InputBox
          htmlFor='username'
          children='이름'
          id='username'
          type='text'
          placeholder=''
          margin='10px 0 0 0'
        />
        <PhoneNumBox />
        <EmailBox />
      </JoinStyle>
      <CheckContainer>
        <CheckTextBox
          id='checkbox'
          children='호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.'
        />
        <Button
          type='submit'
          label='가입하기'
          padding='19px 0'
          borderRadius='5px'
          fontSize='18px'
          fontWeight='700'
          lineHeight='22px'
          color='#FFFFFF'
          bgColor={props => props.theme.color.disabled}
        />
      </CheckContainer>
    </FormContainer>
  );
};

export default JoinForm;
