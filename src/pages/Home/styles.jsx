import styled from 'styled-components';

export const Container = styled.div`
gap: 40px;
padding-top: 40px;
padding-right: 80px;
padding-bottom: 40px;
padding-left: 80px;

`;

export const ConteudoPrincipal = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const CaixaEsquerda = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 40px;
  border-radius: 8.19px;
  padding: 24px;
`;

export const CaixaDireita = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 13.11px;
  border-radius: 8.19px;
  padding: 24px;
`;

export const Header = styled.div`
gap: 8px;

  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0%;
    color: #002D4B;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
  }
`;

export const CaixaNotificacao = styled.div`
  gap: 24px;
  border-radius: 4px;

  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
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
    flex: 1 1 45%;
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

export const Resposta = styled.div`
  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
  }

  .buttons {
    display: flex;
    gap: 12px;

    button {
      padding-top: 8.19px;
      padding-right: 13.11px;
      padding-bottom: 8.19px;
      padding-left: 13.11px;
      gap: 6.56px;
      border-radius: 3.28px;
      font-size: 14px;
      border: none;
      cursor: pointer;
    }

    .nao {
      background-color: #e0e0e0;
    }

    .sim {
      background-color: #003366;
      color: #fff;
    }
  }

`;

export const ColunaInformativa = styled.div`
gap: 13.11px;
border-radius: 8.19px;

  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0%;
    color: #002D4B;
  }

  img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 16px 0;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
  }
`;