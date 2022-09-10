import React from 'react';
import styled from 'styled-components';

interface Props {
  header: any;
  content: any;
  footer: any;
}

const Container = styled.div`
  /* min-width: 1280px; */
  /* width: 100%; */
  /* padding: 0 20%; */
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Header = styled.header`
  /* min-width: 1280px; */
`;
const Content = styled.main``;
const Footer = styled.footer``;

const MainTemplate = ({ header, content, footer }: Props) => {
  return (
    <Container>
      <Header>{header}</Header>
      <Content>{content}</Content>
      <Footer>{footer}</Footer>
    </Container>
  );
};

export default MainTemplate;
