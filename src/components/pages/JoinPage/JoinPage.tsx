import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import JoinForm from '../../organisms/JoinForm/JoinForm';
import LoginTemplate from '../../templates/LoginTemplate/LoginTemplate';

const JoinPage = () => {
  return (
    <LoginTemplate
      header={<Logo width='238px' height='74px' alt='호두샵 메인 로고' />}
      content={<JoinForm />}
    />
  );
};

export default JoinPage;
