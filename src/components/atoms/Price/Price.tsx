import React from 'react';
import styled from 'styled-components';

interface Props {
  text?: number;
  fontSize?: string;
}

const PriceStyle = styled.span<Props>`
  font-weight: 700;
  line-height: 30px;
  font-size: ${props => props.fontSize};
`;

const Price = ({ text, fontSize }: Props) => {
  return (
    <PriceStyle fontSize={fontSize}>{text?.toLocaleString('ko-KR')}</PriceStyle>
  );
};

export default Price;
