import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;

@media (min-width: 768px) {
    padding: 40px 80px;
  }

`;

export const ConteudoPrincipal = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const CaixaEsquerda = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8.19px;
  padding: 24px;
`;

export const CaixaDireita = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8.19px;
  padding: 24px;
`;

export const Header = styled.div`
  h3 {
    font-weight: 700;
    font-size: 20px;
    color: #002D4B;
  }

  p {
    font-weight: 400;
    font-size: 16px;
  }
`;

export const CaixaNotificacao = styled.div`
  gap: 24px;
  border-radius: 4px;

  h4 {
    font-weight: 700;
    font-size: 16px;
    vertical-align: middle;
    color: #002D4B;
  }

    .divider {
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 16px;
  }
`;

export const DadosNotificacao = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  div {
    flex: 1 1 40%;
    min-width: 200px;
    height: 52px;
    border-radius: 4px;
    flex-direction: column;
    justify-content: center;

    strong {
    font-size: 16px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const ColunaInformativa = styled.div`
gap: 13.11px;
border-radius: 8.19px;

  h3 {
    font-weight: 700;
    font-size: 20px;
    color: #002D4B;
  }

  img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 16px 0;
  }

  p {
    font-weight: 400;
    font-size: 16px;
  }
`;