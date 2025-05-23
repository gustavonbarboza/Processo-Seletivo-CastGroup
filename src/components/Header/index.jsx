import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedin, FaSearch } from 'react-icons/fa';
import ImgLogo from "../../assets/images/logo/web-logo-cassi.svg";
import IconTelessaude from "../../assets/icons/icon-telessaude.svg"; 

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
                backgroundColor: 'white',
                height: '44px'
              }}
            >
              <InputGroup.Text
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  paddingLeft: '10px',
                  paddingRight: '6px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <FaSearch size={16} />
              </InputGroup.Text>

              <FormControl
                type="search"
                placeholder="Faça sua busca aqui"
                style={{
                  border: 'none',
                  fontSize: '14px',
                  backgroundColor: 'transparent',
                  padding: '0 8px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              />
            </InputGroup>
          </Col>

          <Col xs="12" md="auto" className="d-flex align-items-center justify-content-center justify-content-md-start">
            <span className="me-2" style={{ fontSize: '14px' }}>
              Siga a CASSI nas redes sociais:
            </span>
            <div className="d-flex gap-2">
              <a href="https://www.facebook.com/CASSISAUDEBR" target="_blank" rel="noopener noreferrer">
                <span className="rounded-circle text-white d-flex align-items-center justify-content-center"
                      style={{ width: 30, height: 30, backgroundColor: '#003366', cursor: 'pointer' }}>
                  <FaFacebookF size={14} />
                </span>
              </a>
              <a href="https://www.instagram.com/cassi.saude/" target="_blank" rel="noopener noreferrer">
                <span className="rounded-circle text-white d-flex align-items-center justify-content-center"
                      style={{ width: 30, height: 30, backgroundColor: '#003366', cursor: 'pointer' }}>
                  <FaInstagram size={14} />
                </span>
              </a>
              <a href="https://www.linkedin.com/company/cassi" target="_blank" rel="noopener noreferrer">
                <span className="rounded-circle text-white d-flex align-items-center justify-content-center"
                      style={{ width: 30, height: 30, backgroundColor: '#003366', cursor: 'pointer' }}>
                  <FaLinkedin size={14} />
                </span>
              </a>
            </div>
          </Col>

          <Col xs="12" md="auto" className="d-flex justify-content-center justify-content-md-start">
            <Button
              variant="outline"
              className="d-flex align-items-center border-0 p-0"
              style={{ backgroundColor: 'transparent', color: '#003366' }}
            >
              <img src={IconTelessaude} alt="Telessaúde" height="32" className="me-2" />
              <div className="text-start" style={{ fontSize: '14px', lineHeight: '1.2' }}>
                <div className="fw-semibold">Telessaúde</div>
                <div>Acesse Aqui</div>
              </div>
            </Button>
          </Col>

          <Col xs="12" md="auto" className="d-flex justify-content-center justify-content-md-end">
            <Button
              size="sm"
              style={{
                backgroundColor: '#003366',
                borderColor: '#003366',
                fontSize: '16px',
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