import { Container, Topo, Itens, Logo } from './styles';
import ImgLogo from "../../assets/images/logo/web-logo-cassi.svg";

function Header() {
  return (
    <Container>
      <Topo>
        <Itens>
          <Logo src={ImgLogo} alt="Logo" />
        </Itens>
      </Topo>
    </Container>
  );
}

export default Header;