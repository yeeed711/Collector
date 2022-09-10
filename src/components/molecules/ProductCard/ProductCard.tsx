import React from 'react';
import Img from '../../atoms/Img/Img';
import binky from '../../../assets/img.png';
import PriceTextBox from '../PriceTextBox/PriceTextBox';
import styled from 'styled-components';

const ProductSource = styled.span`
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #767676;
`;

const ProductName = styled.span`
  display: block;
  padding: 10px 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;

const ProductCard = () => {
  return (
    // 상단에 무조건 부모태그인 ul이 존재해야함!
    <li>
      <Img size='380px' borderRadius='10px' src={binky} border />
      <ProductSource>우당탕탕 라이캣 실험실</ProductSource>
      <ProductName>Hack Your Life 개발자 노트북 파우치</ProductName>
      <PriceTextBox
        text={29000}
        fontSize='24px'
        textFontSize='16px'
        isTotal={false}
      />
    </li>
  );
};

export default ProductCard;
