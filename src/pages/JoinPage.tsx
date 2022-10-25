import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Logo from '../components/Logo/Logo';
import checkOn from '../assets/check-fill-box.svg';
import checkOff from '../assets/check-box.svg';
import { useForm } from 'react-hook-form';
import {
  axiosUserNameCheck,
  axiosGetSellerSignUp,
} from '../components/api/user';

export interface IForm {
  username: string;
  password: string;
  password2: string;
  name: string;
  phone_number: string;
  checkbox?: boolean;
}
const JoinPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<IForm>({ mode: 'onChange' });
  const [accountValid, setAccountValid] = useState('');
  const navigate = useNavigate();

  const signIn = (data: IForm) => {
    if (accountValid !== '멋진 아이디네요 :)') {
      setAccountValid('아이디 중복검사를 해주세요.');
      return;
    }
    //회원가입 axios
    const userData = {
      username: data.username,
      password: data.password,
      password2: data.password2,
      phone_number: data.phone_number,
      name: data.name,
    };
    console.log(userData);
    axiosGetSellerSignUp(userData).then(value => {
      if (value?.status === 201) {
        navigate('/login');
        localStorage.setItem('userType', value.data);
      } else {
        alert('휴대폰 번호를 확인해주세요!');
      }
    });
  };

  // 아이디 중복체크
  const userNameChack = async () => {
    axiosUserNameCheck(getValues().username).then(({ Success }) => {
      setAccountValid(Success);
    });
  };

  return (
    <Container>
      <Logo />
      <JoinWrapper>
        <span>구매회원 회원가입</span>
        <span>판매회원 회원가입</span>
        <JoinForm onSubmit={handleSubmit(signIn)}>
          <JoinLabel htmlFor='username'>아이디</JoinLabel>
          <div style={{ display: 'flex', gap: '12px' }}>
            <JoinInput
              {...register('username', { required: '아이디를 입력해 주세요.' })}
              style={{ flex: 2.5 }}
              type='text'
              id='username'
            />
            <IdCheckButton
              onClick={userNameChack}
              type='button'
              style={{ flex: 1 }}
            >
              중복확인
            </IdCheckButton>
          </div>
          {accountValid && <span>{accountValid}</span>}
          {errors.username && <span>{errors.username?.message}</span>}
          <JoinLabel htmlFor='pw'>비밀번호</JoinLabel>
          <JoinInput
            {...register('password', {
              required: '비밀번호를 입력해 주세요.',
              minLength: {
                value: 8,
                message: '비밀번호는 8자 이상이어야 합니다.',
              },
            })}
            type='password'
            id='pw'
            placeholder='비밀번호는 8자 이상, 영소문자를 포함해주세요 :)'
          />
          {errors.password && <span>{errors.password?.message}</span>}
          <JoinLabel htmlFor='pw'>비밀번호 재확인</JoinLabel>
          <JoinInput
            {...register('password2', {
              required: '비밀번호를 한번 더 입력해 주세요.',
              validate: value =>
                value === getValues('password') ||
                '비밀번호가 일치하지 않습니다.',
            })}
            type='password'
            id='repw'
          />
          {errors.password2 && <span>{errors.password2?.message}</span>}
          <JoinLabel htmlFor='pw'>이름</JoinLabel>
          <JoinInput
            {...register('name', { required: '이름을 입력해 주세요.' })}
            type='text'
            id='name'
          />
          <span>{errors.name?.message}</span>
          <JoinLabel htmlFor='phone'>휴대폰 번호</JoinLabel>
          <JoinInput
            {...register('phone_number', {
              required: '휴대폰 번호를 입력해 주세요.',
              maxLength: 11,
            })}
            type='text'
            id='phone'
          />
          {errors.phone_number && <span>{errors.phone_number?.message}</span>}
          <CheckBox>
            <input
              {...register('checkbox', { required: true })}
              type='checkbox'
              id='checkbox'
            />
            <label htmlFor='checkbox'>
              호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고
              동의합니다.
            </label>
          </CheckBox>
          <JoinButton disabled={!isValid}>가입하기</JoinButton>
        </JoinForm>
      </JoinWrapper>
    </Container>
  );
};

export default JoinPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  margin-top: 10%;
`;

const JoinWrapper = styled.div`
  width: 550px;
  padding: 35px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
`;

const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const InputModuleStyle = css`
  padding: 17px;
  font-size: 16px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  color: #767676;
  outline: none;
`;

const JoinInput = styled.input`
  ${InputModuleStyle}
`;

const JoinLabel = styled.label`
  font-size: 16px;
  color: #767676;
`;

const ButtonModuleStyle = css`
  padding: 20px 0;
  font-size: 18px;
  color: #ffffff;
  border-radius: 5px;
`;

const IdCheckButton = styled.button`
  ${ButtonModuleStyle}
  background-color: ${props => props.theme.accentColor};
`;

const JoinButton = styled.button`
  ${ButtonModuleStyle}
  font-weight: 700;
  color: #ffffff;
  background-color: ${props => props.theme.accentColor};
  margin-top: 36px;
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const CheckBox = styled.div`
  color: #767676;
  font-size: 16px;
  input[type='checkbox'] {
    position: absolute;
    left: -3000%;
  }
  input[type='checkbox'] + label {
    cursor: pointer;
    &::before {
      content: url(${checkOff});
      display: inline-block;
      margin-right: 8px;
      vertical-align: top;
    }
  }
  input[type='checkbox']:checked + label {
    &::before {
      content: url(${checkOn});
    }
  }
`;
