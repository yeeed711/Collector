import { ComponentMeta } from '@storybook/react';
import { Label } from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

export const userId = () => {
  return <Label htmlFor='userId' children='아이디' />;
};

export const password = () => {
  return <Label htmlFor='Password' children='비밀번호' />;
};

export const reconfirmPassword = () => {
  return <Label htmlFor='repassword' children='비밀번호 재확인' />;
};

export const username = () => {
  return <Label htmlFor='username' children='이름' />;
};

export const phoneNumber = () => {
  return <Label htmlFor='phone' children='휴대폰 번호' />;
};

export const email = () => {
  return <Label htmlFor='email' children='이메일' />;
};

export const checkboxText = () => {
  return (
    <Label
      htmlFor='checkbox'
      children='호두샵의 이용약관 및 개인정보처리방침 에 대한 내용을 확인하였고 동의합니다.'
    />
  );
};
