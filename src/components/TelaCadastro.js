import React, { Component } from 'react'

export default class TelaCadastro extends Component {

    state={
        inputTitulo:"",
        inputDescrição:"",
        inputPreço:"",
        inputPagamento:[],
        inputData:"",
    }


    onchangeTitulo = (e) => {
    this.setState({inputTitulo: e.target.value})
    }
    onchangeDescrição = (e) => {
        this.setState({inputDescrição: e.target.value})
    }
    onchangePreço = (e) => {
        this.setState({inputPreço: e.target.value})
    }
    onchangePagamento = (e) => {
    const novoPagamento = [...this.state.inputPagamento]
    novoPagamento.push(e.target.value)
    this.setState({inputPagamento: novoPagamento})
    }
    onchangeData = (e) => {
    this.setState({inputData: e.target.value})
    }


  render() {
    return (
      <div>
        <h2>Cadastre o seu serviço</h2>
        <input onChange={this.onchangeTitulo} value={this.state.inputTitulo} type={'text'} placeholder="Título"></input>
        <input onChange={this.onchangeDescrição} value={this.state.inputDescrição}  type={'text'} placeholder="Descrição do Produto"></input>
        <input onChange={this.onchangePreço} value={this.state.inputPreço}  type={'number'} min="0" placeholder="Preço"></input>

        <form onChange={this.onchangePagamento} value={this.state.inputPagamento} >
        <input type="radio" id='credito' value="credito"></input>
        <label for="credito">Cartão de Crédito</label>
        <input type="radio" id='debito' value="debito"></input>
        <label for="debito">Cartão de Débito</label>
        <input type="radio" id='pix' value="pix"></input>
        <label for="pix">Pix</label>
        <input type="radio" id='boleto' value="boleto"></input>
        <label for="boleto">Boleto</label>
        </form>
        
        <input onChange={this.onchangeData} value={this.state.inputData}  type={'date'} ></input>
       
        <button>Cadastrar</button>

      </div>
    )
  }
}