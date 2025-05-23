import {   FooterContainer, FooterContent, Logo, SiteMap, FooterColuna, FooterTitle, FooterLink, SocialIcons } from './styles';
import ImgLogo from '../../assets/images/logo/web-logo-cassi (white).svg';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo>
          <img src={ImgLogo} alt="Logo Cassi" />
          <SocialIcons>
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedin />
          </SocialIcons>
        </Logo>

        <div className="divider" />

        <SiteMap>
          <FooterColuna>
            <FooterTitle>Home</FooterTitle>
          </FooterColuna>

          <FooterColuna>
            <FooterTitle>Conheça a CASSI</FooterTitle>
            <FooterLink href="#">Institucional</FooterLink>
            <FooterLink href="#">Informações financeiras</FooterLink>
            <FooterLink href="#">Governança corporativa</FooterLink>
            <FooterLink href="#">Como trabalhamos</FooterLink>
            <FooterLink href="#">Faça parte da nossa equipe</FooterLink>
          </FooterColuna>

          <FooterColuna>
            <FooterTitle>Nossos Planos</FooterTitle>
            <FooterLink href="#">Plano CASSI Essencial</FooterLink>
            <FooterLink href="#">Plano CASSI Família</FooterLink>
            <FooterLink href="#">Plano CASSI Vida</FooterLink>
            <FooterLink href="#">Quero contratar</FooterLink>
            <FooterLink href="#">Plano de Associados</FooterLink>
          </FooterColuna>

          <FooterColuna>
            <FooterTitle>Já tenho um plano CASSI</FooterTitle>
            <FooterLink href="#">Cobertura do meu plano</FooterLink>
            <FooterLink href="#">Cronogramas</FooterLink>
            <FooterLink href="#">Telemedicina</FooterLink>
          </FooterColuna>

          <FooterColuna>
            <FooterTitle>CliniCASSI</FooterTitle>
            <FooterLink href="#">Atenção Primária Saúde</FooterLink>
            <FooterLink href="#">Localize sua CliniCASSI</FooterLink>
          </FooterColuna>

        </SiteMap>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;