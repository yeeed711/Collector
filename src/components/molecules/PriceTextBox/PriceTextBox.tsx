import React from 'react';
import styled from 'styled-components';
import Price from '../../atoms/Price/Price';

interface Props {
  text?: number;
  fontSize?: string;
  textFontSize?: string;
  isTotal: boolean;
}

const PriceText = styled.div`
  /* text-align: center; */
  p {
    font-size: 16px;
    margin-bottom: 12px;
  }
`;

const Text = styled.span<Props>`
  font-size: ${props => props.textFontSize};
  font-weight: 400;
  line-height: 20px;
  padding-left: 2px;
`;

const PriceTextBox = ({
  text,
  fontSize,
  textFontSize,
  isTotal = false,
}: Props) => {
  return (
    <>
      {isTotal ? (
        <PriceText>
          <p>총 상품금액</p>
          <Price text={text} fontSize={fontSize} />
          <Text isTotal={isTotal} textFontSize={textFontSize}>
            원
          </Text>
        </PriceText>
      ) : (
        <PriceText>
          <Price text={text} fontSize={fontSize} />
          <Text isTotal={isTotal} textFontSize={textFontSize}>
            원
          </Text>
        </PriceText>
      )}
    </>
  );
};

export default PriceTextBox;
