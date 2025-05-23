import { Container, ConteudoPrincipal, CaixaEsquerda, CaixaDireita, Header, CaixaNotificacao, DadosNotificacao, Resposta, ColunaInformativa } from './styles';
import InfoImage from '../../assets/images/info-image.jpg';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <Container>
      <ConteudoPrincipal>
        <CaixaEsquerda>
          <Header>
            <h3>Olá, &lt;nome&gt;</h3>
            <p>Foi realizada a abertura de uma Notificação de Intermediação Preliminar (NIP) em seu nome.</p>
          </Header>

          <CaixaNotificacao>
            <h4>Dados da notificação</h4>
            <div className="divider" />
            <DadosNotificacao>
              <div>
                <strong>Beneficiário</strong>
                <p>Leandro Henrique</p>
              </div>
              <div>
                <strong>Interlocutor</strong>
                <p>Leandro Henrique</p>
              </div>
              <div>
                <strong>Data de abertura</strong>
                <p>29/01/2022</p>
              </div>
            </DadosNotificacao>
            <div className="divider" />
          </CaixaNotificacao>

          <Resposta>
            <h4>Reconhece esta NIP?</h4>
            <div className="buttons">
              <button className="nao">Não reconheço</button>
              <button className="sim">Sim, foi aberto por mim</button>
            </div>
          </Resposta>
        </CaixaEsquerda>

        <CaixaDireita>
          <ColunaInformativa>
            <h3>Por que é importante que você responda esse questionário?</h3>
            <img src={InfoImage} alt="Ilustração de atendimento" />
            <p>
              Na CASSI, buscamos aprimorar continuamente nossos serviços e métodos de atendimento. Nosso objetivo é
              acelerar o processo de análise das suas solicitações e torná-lo mais eficiente. Ao responder ao
              questionário, você nos ajuda a alcançar maior assertividade e rapidez no atendimento às suas necessidades.
            </p>
          </ColunaInformativa>
        </CaixaDireita>
        
      </ConteudoPrincipal>
    </Container>
  );
};

export default Home;
