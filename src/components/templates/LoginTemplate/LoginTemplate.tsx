import styled from 'styled-components';

interface Props {
  header: any;
  content: any;
}

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  margin: 140px auto 70px;
`;

const Content = styled.section`
  margin: 0 auto;
`;

const LoginTemplate = ({ header, content }: Props) => {
  return (
    <Container>
      <Header>{header}</Header>
      <Content>{content}</Content>
    </Container>
  );
};

export default LoginTemplate;
