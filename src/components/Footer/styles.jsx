import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #002D4B;
  color: white;
  padding: 40px 80px;
  gap: 32px;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  .divider {
    width: 100%;
    border-bottom: 1px solid #FCFC1B;
    margin-bottom: 16px;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 50px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;

  svg {
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const SiteMap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

export const FooterColuna = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 160px;
`;

export const FooterTitle = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  text-decoration: underline;
`;

export const FooterLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: white;
  opacity: 0.85;
  font-weight: 400;
  line-height: 22px;
`;
