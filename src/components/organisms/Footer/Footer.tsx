import React from 'react';
import styled from 'styled-components';
import SnsIcon from '../../molecules/SnsIcon/SnsIcon';

const FooterStyle = styled.div`
  padding: 60px 10%;
  background-color: #f2f2f2;
`;

const Warpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 30px;
  padding-bottom: 22px;
`;

const Ul = styled.ul`
  display: flex;
  font-size: 14px;
  word-break: keep-all;
  li {
    &::after {
      content: '|';
      margin: 0 14px;
    }
    &:last-child::after {
      display: none;
    }
  }
`;

const Address = styled.address`
  font-size: 14px;
  color: #767676;
  dl {
    margin-bottom: 9px;
  }
  strong {
    font-weight: 700;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <Warpper>
        <Ul>
          <li>호두샵 소개</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>전자금융거래약관</li>
          <li>청소년보호정책</li>
          <li>제휴문의</li>
        </Ul>
        <SnsIcon />
      </Warpper>
      <Address>
        <dl>
          <dt className='ir'>상호명</dt>
          <dd>
            <strong>(주)HODU SHOP</strong>
          </dd>
        </dl>
        <dl>
          <dt className='ir'>주소</dt>
          <dd>제주특별자치시도 제주시 동광고 137 제주코딩베이스캠프</dd>
        </dl>
        <dl>
          <dt className='ir'>사업자 정보</dt>
          <dd>사업자 번호 : 000-0000-0000 | 통신판매업</dd>
        </dl>
        <dl>
          <dt className='ir'>대표명</dt>
          <dd>대표 : 김호두</dd>
        </dl>
      </Address>
    </FooterStyle>
  );
};

export default Footer;
