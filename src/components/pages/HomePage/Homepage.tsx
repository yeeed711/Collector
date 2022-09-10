import React from 'react';
import Header from '../../organisms/Header/Header';
import ProductList from '../../organisms/ProductList/ProductList';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';

const Homepage = () => {
  return (
    <MainTemplate header={<Header />} content={<ProductList />} footer='' />
  );
};

export default Homepage;
