import React from 'react';
import styled from 'styled-components';

interface Props {
  header: any;
  content: any;
  footer: any;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Header = styled.header`
  /* padding: 0 10%; */
`;
const Content = styled.main`
  padding: 0 10%;
`;
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
