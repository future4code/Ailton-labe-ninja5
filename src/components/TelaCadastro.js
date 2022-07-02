import React, { Component } from 'react'
import axios from 'axios'
import {url_base} from "../constants/url_base"
import styled from 'styled-components';


const ContainerBig = styled.div`
  border: 1px solid #ed6c2b;
  margin-top: 4%;
  margin-left: 20%;
  margin-right: 25%;
  padding-left: 15%;
  padding-right: 15%;
  text-align: center;
  display: inline-block;
  align-items: center;
  justify-content: space-between;

  >h2 {
    text-align: center;
    color: #ed6c2b;
  };

  >label {
    display: block;
    border: 1px solid #ed6c2b;
    text-align: center;
    color: #ed6c2b;
  };

  >input {
    display: block;
    border: 1px solid #ed6c2b;
    text-align: center;
    color: #ed6c2b;
    width: 400px;
    padding: 16px;
  };

  >button{
    background-color: #ed6c2b;
    border: 1px solid #ed6c2b;
    border-radius: 5px;
    height: 48px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 150px;
    };
    >button:hover{
      cursor: pointer;
      webkit-transform: scale(0.9);
      transform: scale(0.9);
      background-color: black;
      color: white;
    }
`

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
        this.setState({inputPreço:(e.target.value)})
    }
    onchangePagamento = (e) => {
    const novoPagamento = [...this.state.inputPagamento]
    novoPagamento.push(e.target.value)
    this.setState({inputPagamento: novoPagamento}) 
    }
    onchangeData = (e) => {
    this.setState({inputData: e.target.value})
    }



    addServiço = () =>{
      const body = {
        title:this.state.inputTitulo,
        description: this.state.inputDescrição,
        price:Number(this.state.inputPreço),
        paymentMethods:this.state.inputPagamento,
        dueDate:this.state.inputData
    }
    
    axios.post(`${url_base}/jobs`,body,{
      headers:{
        Authorization: "8edd7464-7802-4bcd-a411-fdf55999ce37"
      }
    })
    .then(()=>{
     alert("Serviço cadastrado com sucesso!!")
    })
    .catch(()=>{
      alert("Tente novamente!!")
      
    })
    this.setState({inputTitulo:""})
    this.setState({inputDescrição:""})
    this.setState({inputPreço:""})
    this.setState({inputPagamento:[]})
    document.getElementById('credito').checked = false
    document.getElementById('debito').checked = false
    document.getElementById('pix').checked = false
    document.getElementById('boleto').checked = false
    this.setState({inputData:""})
    }

  render() {
  
    return (
      <ContainerBig>

        <h2>Cadastre o seu serviço</h2>
        <input onChange={this.onchangeTitulo} value={this.state.inputTitulo} type={'text'} placeholder="Título"></input>
        <input onChange={this.onchangeDescrição} value={this.state.inputDescrição}  type={'text'} placeholder="Descrição do Serviço"></input>
        <input onChange={this.onchangePreço} value={this.state.inputPreço}  type={'number'}  placeholder="Preço"></input>

        <form onChange={this.onchangePagamento} value={this.state.inputPagamento} >
        <input type="checkbox" id='credito' value="credito"></input>
        <label for="credito">Cartão de Crédito</label>
        <input type="checkbox" id='debito' value="debito"></input>
        <label for="debito">Cartão de Débito</label>
        <input type="checkbox" id='pix' value="pix"></input>
        <label for="pix">Pix</label>
        <input type="checkbox" id='boleto' value="boleto"></input>
        <label for="boleto">Boleto</label>
        </form>
          
        <input onChange={this.onchangeData} value={this.state.inputData}  type={'date'} ></input>
        
        <button onClick={this.addServiço}>Cadastrar</button>
      </ContainerBig>
    )
  }
}
