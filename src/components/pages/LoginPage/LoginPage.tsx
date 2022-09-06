import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import LoginTemplate from '../../templates/LoginLayout/LoginTemplate';

const LoginPage = () => {
  return (
    <LoginTemplate
      header={<Logo width='238px' alt='호두샵 메인 로고' />}
      content={<LoginForm />}
      footer=''
    />
  );
};

export default LoginPage;
