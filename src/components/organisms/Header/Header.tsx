import React from 'react';
import Input from '../../atoms/Input/Input';
import Logo from '../../atoms/Logo/Logo';
import IconBtn from '../../molecules/IconBtn/IconBtn';
import cart from '../../../assets/icon-shopping-cart.svg';
import user from '../../../assets/icon-user.svg';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <Logo width='124px' height='38px' alt='호두샵 서브 로고' />
        <Input id='search' type='search' placeholder='상품을 검색해보세요!' />
      </div>
      <ul>
        <li>
          <IconBtn imgSrc={cart} imgAlt='장바구니 아이콘' text='장바구니' />
        </li>
        <li>
          <IconBtn imgSrc={user} imgAlt='마이페이지 아이콘' text='마이페이지' />
        </li>
      </ul>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 0;
  div {
    display: flex;
    column-gap: 30px;
    align-items: center;

    input {
      min-width: 400px;
    }
  }
  ul {
    display: flex;
    column-gap: 24px;
  }
`;

export default Header;
