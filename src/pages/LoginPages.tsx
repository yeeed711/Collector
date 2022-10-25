import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { axiosPostSellerSignIn } from '../components/api/user';
import Input from '../components/Input/Input';
import Logo from '../components/Logo/Logo';

export interface ILoginForm {
  username: string;
  password: string;
}

const LoginPages = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ mode: 'onChange' });

  const navigate = useNavigate();
  const signIn = (data: ILoginForm) => {
    const userData = {
      username: data.username,
      password: data.password,
      login_type: 'BUYER',
    };
    axiosPostSellerSignIn(userData).then(value => {
      if (value?.status === 200) {
        localStorage.setItem('userInfo', JSON.stringify(value.data));
        navigate('/');
      }
    });
  };
  return (
    <Container>
      <Logo />
      <LoginWrapper>
        <span>구매회원 로그인</span>
        <span>판매회원 로그인</span>
        <LoginForm onSubmit={handleSubmit(signIn)}>
          <Input
            register={register('username', {
              required: '필수 입력사항입니다.',
            })}
            type='text'
            placeholder='아이디'
          />
          {errors.username && <span>{errors.username?.message}</span>}
          <Input
            register={register('password', {
              required: '필수 입력사항입니다.',
            })}
            type='password'
            placeholder='비밀번호'
          />
          {errors.password && <span>{errors.password?.message}</span>}
          <LoginButton>로그인</LoginButton>
        </LoginForm>
      </LoginWrapper>
      <LoginSignUpText to='/join'>회원가입</LoginSignUpText>
    </Container>
  );
};

export default LoginPages;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  margin-top: 10%;
`;

const LoginWrapper = styled.div``;

const LoginForm = styled.form`
  width: 550px;
  display: flex;
  flex-direction: column;
  padding: 35px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const LoginButton = styled.button`
  padding: 20px 0;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  background-color: ${props => props.theme.accentColor};
  border-radius: 5px;
  margin-top: 36px;
`;

const LoginSignUpText = styled(Link)`
  font-size: 16px;
  color: #333333;
`;
