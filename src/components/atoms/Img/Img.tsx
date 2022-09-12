import React from 'react';
import styled, { css } from 'styled-components';
import binky from '../../../assets/img.png';

interface Props {
  size: string;
  borderRadius: string;
  src: string;
  border?: boolean;
}

const ImgStyle = styled.img<Props>`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.borderRadius};
  object-fit: cover;
  ${props =>
    props.border &&
    css`
      border: 1px solid #c4c4c4;
    `}
`;

const Img = ({ size, borderRadius, src }: Props) => {
  return <ImgStyle size={size} borderRadius={borderRadius} src={src} />;
};

export default Img;
