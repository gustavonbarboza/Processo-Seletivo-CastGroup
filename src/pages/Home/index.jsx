import { Container, ConteudoPrincipal, CaixaEsquerda, CaixaDireita, Header, CaixaNotificacao, DadosNotificacao, ColunaInformativa } from './styles';
import InfoImage from '../../assets/images/info-image.jpg';
import dadosNotificacao from '../../data/dados.json';
import RespostaNIP from "../../components/RespostaNIP"

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
                <p>{dadosNotificacao.beneficiario}</p>
              </div>
              <div>
                <strong>Interlocutor</strong>
                <p>{dadosNotificacao.interlocutor}</p>
              </div>
              <div>
                <strong>Data de abertura</strong>
                <p>{dadosNotificacao.dataAbertura}</p>
              </div>
            </DadosNotificacao>
            <div className="divider" />
          </CaixaNotificacao>

          <RespostaNIP />

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
