import Logo from '../Logo/Logo';
import cart from '../../assets/icon-shopping-cart.svg';
import user from '../../assets/icon-user.svg';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Logo width='124px' height='38px' />
      <SearchInput type='search' placeholder='상품을 검색해보세요 :)' />
      <Ul>
        <li>
          <img src={cart} alt='' />
          <IconText>장바구니</IconText>
        </li>
        <li>
          <img src={user} alt='' />
          <IconText>로그인</IconText>
        </li>
      </Ul>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
  padding: 20px 0;
`;

const Ul = styled.ul`
  display: flex;
  gap: 26px;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const IconText = styled.span`
  color: #767676;
  padding-top: 6px;
`;

const SearchInput = styled.input`
  min-width: 300px;
  padding: 17px;
  border: 2px solid #21bf48;
  border-radius: 50px;
  padding: 13px 0 13px 22px;
  outline: none;
  font-size: 16px;
  color: #21bf48;
  &::placeholder {
    font-size: 16px;
    color: #767676;
  }
`;
