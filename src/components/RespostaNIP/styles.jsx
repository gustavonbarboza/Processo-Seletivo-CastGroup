import styled from 'styled-components';

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
      border: 1px solid #003366;
      color: #002D4B;
    }

    .sim {
      background-color: #003366;
      color: #fff;
    }
  }
`;

export const Finalizacao = styled.div`
  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0%;
    vertical-align: middle;
    display: flex;
    align-items: center;
    gap: 8px;
  }
    .divider {
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 16px;
  }
`

export const ModalConfig = styled.div`
  h4 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  form {
    margin-bottom: 1.5rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  input[readonly] {
  background-color: #e9ecef;
  color: #495057;
  cursor: not-allowed;
}

  button {
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    min-width: 130px;
  }

  .voltar {
    background-color: #fff;
    border: 1px solid #003366;
    color: #003366;
  }

  .confirmar {
    background-color: #003366;
    color: #fff;
  }
`;