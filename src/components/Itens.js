import React, { Component } from "react";
import styled from "styled-components";

const MiniContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 300px;
  height: 180px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ed6c2b94;

  background-color: #ed6c2b94;
  border-radius: 10px;
  margin: 20px;

  > p {
    text-align: center;

    font-weight: bold;
  }
  > h2 {
    text-align: center;
    margin-top: 30px;
  }
`;

const BotaoCarrinho = styled.button`
  display: flex;
  padding: 10px;

  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 10px;

  :hover {
    webkit-transform: scale(0.9);
    transform: scale(0.9);
    background-color: #ed6c2b;
    cursor: pointer;
  }
`;
export default class Itens extends Component {
  render() {
    return (
      <MiniContainer>
        <h2> {this.props.nome}</h2>
        <p>R$ {this.props.valor},00</p>

        <BotaoCarrinho onClick={() => this.props.onClick()}>
          Remover
        </BotaoCarrinho>
      </MiniContainer>
    );
  }
}
