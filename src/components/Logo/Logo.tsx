import React from 'react';
import styled from 'styled-components';
import logoImg from '../../assets/Logo-hodu.png';

const Logo = () => {
  return <LogoStyle src={logoImg} alt='호두마켓 로고' />;
};

export default Logo;

const LogoStyle = styled.img`
  width: 238px;
  height: 74px;
`;
