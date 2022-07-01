import React, { Component } from "react";
import styled from "styled-components";
import Itens from "./Itens";

const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 5px;

  button:hover {
    webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  > p {
    width: 100%;
    text-align: center;
    font-weight: bold;
  }
  > h2 {
    text-align: center;
  }
`;
const BotaoCarrinho = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  padding: 20px;
  margin-top: 10px;

  :hover {
    webkit-transform: scale(0.9);
    transform: scale(0.9);
    background-color: #ed6c2b;
    cursor: pointer;
  }
`;

export default class CardCarrinho extends Component {
  render() {
    const itensCarrinho =
      this.props.carrinho &&
      this.props.carrinho.map((servicos) => {
        return (
          <Itens
            nome={servicos.title}
            valor={servicos.price}
            onClick={() => this.props.removerItenCarrinho(servicos)}
          />
        );
      });

    return (
      <ContainerCarrinho>
        <h2>Carrinho</h2>
        {itensCarrinho}
        <p>Valor total: R${this.props.valorTotal},00</p>

        <BotaoCarrinho onClick={() => alert("Compra finalizada com sucesso.")}>
          Finalizar Compra
        </BotaoCarrinho>
      </ContainerCarrinho>
    );
  }
}
