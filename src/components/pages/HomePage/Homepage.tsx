import React from 'react';
import Footer from '../../organisms/Footer/Footer';
import Header from '../../organisms/Header/Header';
import ProductList from '../../organisms/ProductList/ProductList';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';

const Homepage = () => {
  return (
    <MainTemplate
      header={<Header />}
      content={<ProductList />}
      footer={<Footer />}
    />
  );
};

export default Homepage;
