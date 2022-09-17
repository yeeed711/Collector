import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import ProductDetail from '../../organisms/ProductDetail/ProductDetail';

const ProductPage = () => {
  return (
    <MainTemplate
      header={<Header />}
      content={<ProductDetail />}
      footer={<Footer />}
    />
  );
};

export default ProductPage;
