import React from 'react';
import logo from '../../../assets/Logo-hodu.png';

interface Props {
  alt: string;
  width: string;
  height: string;
}

const Logo = ({ alt, width, height }: Props) => {
  return <img src={logo} width={width} height={height} alt={alt} />;
};

export default Logo;
