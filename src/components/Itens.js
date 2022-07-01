import React, { Component } from 'react'


export default class Itens extends Component {
  render() {
    return (
      <div>
        <p>{this.props.nome}</p>
        <p>{this.props.valor}</p>
        <button onClick={()=>this.props.onClick()}>Remover</button>
      </div>
    )
  }
}
