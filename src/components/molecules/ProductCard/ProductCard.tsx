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

interface ProductsResponse {
  post: {
    image: string;
    price: number;
    product_id: number;
    product_info: string;
    product_name: string;
    seller: number;
    seller_store: string;
    shipping_fee: number;
    shipping_method: string;
    stock: number;
  };
}

const ProductCard = ({ post }: ProductsResponse) => {
  //   console.log(post);
  return (
    // 상단에 무조건 부모태그인 ul이 존재해야함!
    <li>
      <Img size='380px' borderRadius='10px' src={post.image} border />
      <ProductSource>{post.seller_store}</ProductSource>
      <ProductName>{post.product_name}</ProductName>
      <PriceTextBox
        text={post.price}
        fontSize='24px'
        textFontSize='16px'
        isTotal={false}
      />
    </li>
  );
};

export default ProductCard;
