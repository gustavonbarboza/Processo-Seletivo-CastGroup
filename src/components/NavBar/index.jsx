import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function MainNav() {
  return (
    <Navbar bg="light" expand="lg" className="border-bottom">
      <Container fluid>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            <Nav.Link href="#" className="mx-2">Home</Nav.Link>

            <NavDropdown title="Conheça a CASSI" id="dropdown1" className="mx-2">
            </NavDropdown>

            <NavDropdown title="Nossos planos" id="dropdown2" className="mx-2">
            </NavDropdown>

            <NavDropdown title="Já tenho um plano CASSI" id="dropdown3" className="mx-2">
            </NavDropdown>

            <NavDropdown title="CliniCASSI" id="dropdown4" className="mx-2">
            </NavDropdown>

            <Nav.Link href="#" className="mx-2">Fale com a CASSI</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
