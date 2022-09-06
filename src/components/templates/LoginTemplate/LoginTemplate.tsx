import styled from 'styled-components';

interface Props {
  header: any;
  content: any;
  footer: any;
}

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  justify-content: center;
  text-align: center;
`;

const Header = styled.header`
  margin: 180px 0 70px;
`;

const Content = styled.section``;

const Footer = styled.footer`
  bottom: 0;
`;

const LoginTemplate = ({ header, content, footer }: Props) => {
  return (
    <Container>
      <Header>{header}</Header>
      <Content>{content}</Content>
      <Footer>{footer}</Footer>
    </Container>
  );
};

export default LoginTemplate;
