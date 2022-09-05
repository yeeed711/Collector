import React, { ReactElement } from 'react';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

const LoginForm = () => {
  return (
    <>
      <Label htmlFor='userId' children='아이디' className='ir' />
      <Input
        id='userId'
        type='text'
        placeholder='아이디'
        border='none'
        borderBottom='1px solid #C4C4C4'
      />
      <Label htmlFor='password' children='비밀번호' className='ir' />
      <Input
        id='password'
        type='text'
        placeholder='비밀번호'
        border='none'
        borderBottom='1px solid #C4C4C4'
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
    </>
  );
};

export default LoginForm;
