import { Container, Mensagens, Texto, Header} from './styles';

function Home() {
  return (
    <Container>
      <Mensagens>
        <Texto>
          <Header>
            <h3>Olá, </h3>
            <p>Foi realizada a abertura de uma Notificação de Intermediação Preliminar (NIP) em seu nome.</p>
          </Header>
        </Texto>
      </Mensagens>
    </Container>
  );
}

export default Home;