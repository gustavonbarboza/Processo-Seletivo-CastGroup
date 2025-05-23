import { useState } from 'react';
import { Alert, Modal } from 'react-bootstrap';
import { Resposta, Finalizacao, ModalConfig } from './styles';
import dadosNotificacao from '../../data/dados.json';
import { FaCheckCircle } from 'react-icons/fa';

function RespostaNIP() {
  const [etapa, setEtapa] = useState('perguntaInicial'); 
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarAlerta, setMostrarAlerta] = useState('');

  const handleCliqueSim = () => {
    setMostrarAlerta('sucesso');
    setEtapa('fim');
  };

  const handleCliqueNao = () => {
    setEtapa('perguntaInterlocutor');
  };

  const fecharModal = () => {
    setMostrarModal(false);
    setEtapa('perguntaInicial');
  };

  const confirmarDados = () => {
    setMostrarAlerta('erro');
    setMostrarModal(false);
    setEtapa('fim');
  };

  return (
    <>
      {etapa !== 'fim' && (
        <Resposta>
          <h4>
            {etapa === 'perguntaInicial'
              ? 'Reconhece esta NIP?'
              : 'Reconhece o interlocutor?'}
          </h4>

          <div className="buttons">
            {etapa === 'perguntaInicial' ? (
              <>
                <button className="nao" onClick={handleCliqueNao}>Não reconheço</button>
                <button className="sim" onClick={handleCliqueSim}>Sim, foi aberto por mim</button>
              </>
            ) : (
              <>
                <button className="nao" onClick={() => setMostrarModal(true)}>Não</button>
                <button className="sim" onClick={() => setMostrarModal(true)}>Sim</button>
              </>
            )}
          </div>
        </Resposta>
      )}

      {mostrarAlerta === 'sucesso' && (
        <Alert variant="success">
          Abertura da NIP <strong>RECONHECIDA</strong> pelo usuário.
        </Alert>
      )}

      {mostrarAlerta === 'erro' && (
        <Alert variant="danger">
          Interlocutor <strong>NÃO RECONHECIDO</strong> e abertura da NIP <strong>NÃO RECONHECIDO</strong> pelo usuário.
        </Alert>
      )} 

      {etapa === 'fim' && (
        <Finalizacao>
          <div className="divider" />
          <p><FaCheckCircle size={16} color="green"/>Obrigado pela resposta!</p>
        </Finalizacao>
      )}

      <Modal show={mostrarModal} onHide={fecharModal} centered>
        <Modal.Body as={ModalConfig}>
          <h4>
           Verificar dados de contato 
          </h4>

          <p>
            Considerando que você não reconheceu a Notificação de Intermediação Preliminar (NIP),
            a CASSI entrará em contato para compreender melhor a situação. Por favor, verifique as
            informações abaixo e, se necessário, atualize-as:
          </p>

          <form>
            <div className="mb-3">
              <label className="form-label">Beneficiário</label>
              <input type="text" className="form-control" defaultValue={dadosNotificacao.beneficiario} readOnly/>
            </div>

            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input type="text" className="form-control" defaultValue={dadosNotificacao.email} />
            </div>

            <div className="mb-3">
              <label className="form-label">Telefone</label>
              <input type="text" className="form-control" defaultValue={dadosNotificacao.telefone} />
            </div>
          </form>

          <div className="buttons">
            <button type="button" className="voltar" onClick={fecharModal}>Voltar</button>
            <button type="button" className="confirmar" onClick={confirmarDados}>Confirmar dados</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RespostaNIP;