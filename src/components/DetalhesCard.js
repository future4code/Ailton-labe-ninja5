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

export default class DetalhesCard extends React.Component {
  state = {
    detalhes: [],
  };

  componentDidMount() {
    getJobById(this.props.id, this.salvarDetalhes);
  };

  salvarDetalhes = (id) => {
    this.setState({
      detalhes: id,
    });
  };
  render() {

   const detalhePagemento = this.state.detalhes.paymentMethods && this.state.detalhes.paymentMethods.map((servico)=>{
    return <li key={servico}>{servico}</li>

   });
    return <Container>
    <Card>

        <h2>{this.state.detalhes.title}</h2>
        <p><b>Descrição:</b>{this.state.detalhes.description}</p>
        <p><b>Valor: R$</b>{this.state.detalhes.price},00</p>
        <p><b>Prazo:</b>{new Date(this.state.detalhes.dueDate).toLocaleDateString()}</p>
        <p><b>Forma de pagamento: </b>
       {detalhePagemento}</p>
       <button onClick={this.props.mudaTelaServicos}>Voltar para Lista de Servicos</button>
        </Card>
        </Container>
   

  }
} 
