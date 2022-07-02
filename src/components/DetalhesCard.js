import React from "react";
import styled from "styled-components";
import { getJobById } from "../services/requisicoes";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ed6c2b94;
  padding: 10px;
  background-color: #ed6c2b94;
  border-radius: 10px;
  margin: 20px;

  > p {
    text-align: center;
    margin-top: 30px;
  }

  > h2 {
    text-align: center;
  }
`;

const BotoesLindos = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  padding: 5px;

  :hover {
    webkit-transform: scale(0.9);
    transform: scale(0.9);
    background-color: #ed6c2b;
    cursor: pointer;
  }
`;

export default class DetalhesCard extends React.Component {
  state = {
    detalhes: [],
  };

  componentDidMount() {
    getJobById(this.props.id, this.salvarDetalhes);
  }

  salvarDetalhes = (id) => {
    this.setState({
      detalhes: id,
    });
  };
  render() {
    const detalhePagemento =
      this.state.detalhes.paymentMethods &&
      this.state.detalhes.paymentMethods.map((servico) => {
        return <li key={servico}>{servico}</li>;
      });
    const data = this.state.detalhes.dueDate && this.state.detalhes.dueDate.split("T")[0]
    return (
      <Container>
        <Card>
          <h2>{this.state.detalhes.title}</h2>
          <p>
            <b>Descrição: </b>
            {this.state.detalhes.description}
          </p>
          <p>
            <b>Valor: R$</b>
            {this.state.detalhes.price},00
          </p>
          <p>
            <b>Prazo: </b>
            {data}
          </p>
          <p>
            <b>Forma de pagamento: </b>
            {detalhePagemento}
          </p>
          <BotoesLindos onClick={this.props.mudaTelaServicos}>
            Voltar para Lista de Servicos
          </BotoesLindos>
        </Card>
      </Container>
    );
  }
}
