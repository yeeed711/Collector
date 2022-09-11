import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import insta from '../../../assets/icon-insta.svg';
import faceBook from '../../../assets/icon-fb.svg';
import youtube from '../../../assets/icon-yt.svg';
import styled from 'styled-components';

const SnsIconStyle = styled.div`
  img + img {
    margin-left: 14px;
  }
`;

const SnsIcon = () => {
  return (
    <SnsIconStyle>
      <Icon imgSrc={insta} imgAlt='인스타그램' />
      <Icon imgSrc={faceBook} imgAlt='페이스북' />
      <Icon imgSrc={youtube} imgAlt='유튜브' />
    </SnsIconStyle>
  );
};

export default SnsIcon;
