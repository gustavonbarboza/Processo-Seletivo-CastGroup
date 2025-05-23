import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedin, FaSearch } from 'react-icons/fa';
import ImgLogo from "../../assets/images/logo/web-logo-cassi.svg";

function Header() {
  return (
    <div className="bg-white border-bottom py-2">
      <Container fluid>
        <Row className="align-items-center justify-content-between flex-wrap px-3 gap-3 gap-md-0">

          <Col xs="12" md="auto" className="text-center text-md-start">
            <img src={ImgLogo} alt="CASSI" height="48" />
          </Col>

          <Col xs="12" md="auto" className="d-flex justify-content-center justify-content-md-start">
            <InputGroup
              size="sm"
              style={{
                maxWidth: '250px',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid #ced4da',
                backgroundColor: 'white'
              }}
            >
              <InputGroup.Text
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  paddingLeft: '10px',
                  paddingRight: '6px',
                }}
              >
                <FaSearch size={16} />
              </InputGroup.Text>

              <FormControl
                type="search"
                placeholder="Faça sua busca aqui"
                style={{
                  border: 'none',
                  fontSize: '0.85rem',
                  paddingTop: '6px',
                  paddingBottom: '6px',
                  backgroundColor: 'transparent'
                }}
              />
            </InputGroup>
          </Col>

          <Col xs="12" md="auto" className="d-flex align-items-center justify-content-center justify-content-md-start">
            <span className="me-2" style={{ fontSize: '0.8rem' }}>
              Siga a CASSI nas redes sociais:
            </span>
            <div className="d-flex gap-2">
              <span className="rounded-circle text-white d-flex align-items-center justify-content-center"
                    style={{ width: 30, height: 30, backgroundColor: '#003366' }}>
                <FaFacebookF size={14} />
              </span>
              <span className="rounded-circle text-white d-flex align-items-center justify-content-center"
                    style={{ width: 30, height: 30, backgroundColor: '#003366' }}>
                <FaLinkedin size={14} />
              </span>
              <span className="rounded-circle text-white d-flex align-items-center justify-content-center"
                    style={{ width: 30, height: 30, backgroundColor: '#003366' }}>
                <FaInstagram size={14} />
              </span>
            </div>
          </Col>

          <Col xs="12" md="auto" className="d-flex justify-content-center justify-content-md-end">
            <Button
              size="sm"
              style={{
                backgroundColor: '#003366',
                borderColor: '#003366',
                fontSize: '0.8rem',
                padding: '0.35rem 1rem'
              }}
            >
              Fazer login
            </Button>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Header;