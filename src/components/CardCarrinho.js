import React, { Component } from 'react'
import styled from 'styled-components'
import Itens from './Itens'

export default class CardCarrinho extends Component {


  render() {
   const itensCarrinho = this.props.carrinho && this.props.carrinho.map((servicos)=>{
    return    <Itens
    nome={servicos.title}
    valor={servicos.price}
    onClick={()=>this.props.removerItenCarrinho(servicos)}
    />
   })
    
    return (
      <div>
    <h2>Carrinho</h2>
    {itensCarrinho}
      <p>Valor total: R${this.props.valorTotal},00</p>
      </div>
    )
  }
}
