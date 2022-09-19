import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Img from '../../atoms/Img/Img';
import AmountBox from '../../molecules/AmountBox/AmountBox';
import PriceTextBox from '../../molecules/PriceTextBox/PriceTextBox';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

interface ProductResponse {
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
}

const ProductDetailStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 140px 50px;
  margin-top: 80px;
  img {
    grid-column: span 2;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column: 3/5;
`;

const SellerStore = styled.div`
  font-size: 18px;
  line-height: 23px;
  color: #767676;
`;

const ProductTitle = styled.div`
  font-size: 36px;
  line-height: 45px;
  margin: 16px 0 20px;
`;

const ShippingFee = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;

const PriceTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  div {
    display: inherit;
    align-items: inherit;
  }
`;

const TotalPriceText = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
`;

const TotalCount = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #767676;
  margin-right: 10px;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 14px;
`;

const DetailButtonWrapper = styled.div`
  display: flex;
  grid-column: 1/-1;
`;
const ProductDetail = () => {
  const [post, setPost] = useState<ProductResponse>();
  const [count, setCount] = useState<number>(1);
  const { id } = useParams();

  const countIncrease = () => {
    if (post?.stock === count) {
      return;
    }
    setCount(count + 1);
  };

  const countDecrease = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  const getProductData = async (id?: string) => {
    try {
      const res = await axios.get(
        `https://openmarket.weniv.co.kr/products/${id}`,
        {
          headers: {
            'Content-type': 'application/json',
          },
        },
      );
      //   return res.data;
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData(id);
  }, []);

  return (
    <>
      {post ? (
        <ProductDetailStyle>
          {/* 상품이미지 */}
          <Img size='380px' borderRadius='10px' src={post.image} />
          {/* 상품 정보 */}
          <ProductInfo>
            <SellerStore>{post.seller_store}</SellerStore>
            <ProductTitle>{post.product_name}</ProductTitle>
            <PriceTextBox
              text={post.price}
              fontSize='36px'
              textFontSize='18px'
            />
            <ShippingFee>
              택배배송 /
              {post.shipping_fee === 0
                ? ' 무료배송'
                : ` 배송비 ${post.shipping_fee}원`}
            </ShippingFee>
            <AmountBox
              count={count}
              increase={countIncrease}
              decrease={countDecrease}
            />
            <PriceTextWrapper>
              <TotalPriceText>총 상품 금액</TotalPriceText>
              <div>
                <TotalCount>총 수량 {count}개 |</TotalCount>
                <PriceTextBox
                  text={count * post.price}
                  textFontSize='18px'
                  fontSize='36px'
                />
              </div>
            </PriceTextWrapper>
            <ButtonWrapper>
              <Button
                type='button'
                label='바로 구매'
                bgColor={props => props.theme.color.primary}
                padding='19px 0'
                borderRadius='5px'
                fontSize='18px'
                fontWeight='700'
                lineHeight='22px'
                color='#FFFFFF'
              />
              <Button
                type='button'
                label='장바구니'
                bgColor='#767676'
                padding='19px 0'
                borderRadius='5px'
                fontSize='18px'
                fontWeight='700'
                lineHeight='22px'
                color='#FFFFFF'
              />
            </ButtonWrapper>
          </ProductInfo>
          <DetailButtonWrapper>
            <Button
              type='button'
              label='상세정보'
              padding='19px 0 12px'
              borderBottom='6px solid #21BF48'
              fontSize='18px'
              fontWeight='700'
              lineHeight='23px'
              color='#21BF48'
              bgColor='#FFFFFF'
            />
            <Button
              type='button'
              label='리뷰'
              padding='19px 0 12px'
              borderBottom='6px solid  #E0E0E0'
              fontSize='18px'
              fontWeight='500'
              lineHeight='23px'
              color='#767676'
              bgColor='#FFFFFF'
            />
            <Button
              type='button'
              label='QnA'
              padding='19px 0 12px'
              borderBottom='6px solid  #E0E0E0'
              fontSize='18px'
              fontWeight='500'
              lineHeight='23px'
              color='#767676'
              bgColor='#FFFFFF'
            />
            <Button
              type='button'
              label='반품/교환정보'
              padding='19px 0 12px'
              borderBottom='6px solid  #E0E0E0'
              fontSize='18px'
              fontWeight='500'
              lineHeight='23px'
              color='#767676'
              bgColor='#FFFFFF'
            />
          </DetailButtonWrapper>
        </ProductDetailStyle>
      ) : null}
    </>
  );
};

export default ProductDetail;
