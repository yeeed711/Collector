import React from 'react';
import plus from '../../../assets/icon-plus-line.svg';
import minus from '../../../assets/icon-minus-line.svg';
import styled from 'styled-components';

interface Props {
  count: number;
  onClick?: () => void;
}

const AmountBoxStyle = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  display: flex;
  max-width: 150px;
  div {
    border-left: inherit;
    border-right: inherit;
    min-width: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    font-weight: 400;
    overflow: auto;
  }
  button {
    max-width: 50px;
    &:disabled {
      background-color: #e0e0e0;
    }
  }
`;

const AmountBox = ({ count = 1, onClick }: Props) => {
  return (
    <AmountBoxStyle>
      <button onClick={onClick}>
        <img src={minus} alt='수량 감소 버튼' />
      </button>
      <div>{count}</div>
      <button onClick={onClick}>
        <img src={plus} alt='수량 증가 버튼' />
      </button>
    </AmountBoxStyle>
  );
};

export default AmountBox;
