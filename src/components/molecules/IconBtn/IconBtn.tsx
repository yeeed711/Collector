import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon/Icon';

interface Props {
  text: string;
  imgSrc: string;
  imgAlt: string;
}

const IconBtn = ({ text, imgSrc, imgAlt }: Props) => {
  return (
    <ButtonStyle>
      <Icon imgSrc={imgSrc} imgAlt={imgAlt} />
      <span>{text}</span>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: #767676;
    font-size: 12px;
    font-weight: 400;
    margin-top: 4px;
  }
`;
export default IconBtn;
