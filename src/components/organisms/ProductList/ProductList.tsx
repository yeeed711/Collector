import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from '../../molecules/ProductCard/ProductCard';

const ProductCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  img {
    margin-bottom: 16px;
  }
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const ProductListGet = async () => {
    try {
      const res = await axios.get('https://openmarket.weniv.co.kr/products/', {
        headers: {
          'Content-type': 'application/json',
        },
      });
      setProducts(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ProductListGet();
  }, []);

  return (
    <ProductCards>
      {products.map(product => (
        <ProductCard post={product} />
      ))}
    </ProductCards>
  );
};

export default ProductList;
