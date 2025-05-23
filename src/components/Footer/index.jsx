import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <p>© {new Date().getFullYear()} Empresa. Todos os direitos reservados.</p>
    </Container>
  );
}

export default Footer;