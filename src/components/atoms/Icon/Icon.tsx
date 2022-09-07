import React from 'react';
import styled from 'styled-components';

interface Props {
  imgSrc: string;
  imgAlt: string;
}

const Icon = ({ imgSrc, imgAlt }: Props) => {
  return <ImgStyle src={imgSrc} alt={imgAlt} />;
};

const ImgStyle = styled.img`
  width: 32px;
  height: 32px;
`;

export default Icon;
