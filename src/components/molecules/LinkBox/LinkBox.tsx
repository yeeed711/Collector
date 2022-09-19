import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.ul`
  position: relative;
  color: #333333;
  display: flex;
  font-size: 16px;
  line-height: 20px;
  justify-content: center;
  li {
    cursor: pointer;
    & + li::before {
      content: '|';
      margin: 0 10px;
    }
  }
`;

const LinkBox = () => {
  return (
    <Container>
      <li>
        <Link to='/join'>회원가입</Link>
      </li>
      <li>
        <a>비밀번호 찾기</a>
      </li>
    </Container>
  );
};

export default LinkBox;
