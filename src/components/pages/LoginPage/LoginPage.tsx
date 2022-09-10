import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import Header from '../../organisms/Header/Header';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import LoginTemplate from '../../templates/LoginTemplate/LoginTemplate';

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginTemplate
        header={<Logo width='238px' height='74px' alt='호두샵 메인 로고' />}
        content={<LoginForm />}
      />
    </>
  );
};

export default LoginPage;
