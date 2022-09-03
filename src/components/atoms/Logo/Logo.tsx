import React from 'react';
import logo from '../../../assets/Logo-hodu.png';

interface Props {
  alt: string;
  width: string;
}

const Logo = ({ alt, width }: Props) => {
  return <img src={logo} width={width} alt={alt} />;
};

export default Logo;
