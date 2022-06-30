import React from "react";
import styled from "styled-components";
import Ninja from './img/Ninja.png'

const Imagem = styled.img`
display: flex;
align-items: center;
justify-content: center;
 height: 60vh;
 width: auto;
`
const ContainerInicial = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding-top: 8vh;
`
const ButtonsInicial = styled.div`
    display: flex;
    align-items: center;
    gap: 2vw;
`

const ButtonWanna = styled.button`
    background-color: #ed6c2b;
    border: 1px solid #ed6c2b;
    border-radius: 5px;
    height: 48px;
    font-weight: bold;
`

export default function Inicial (props) {

    return <ContainerInicial>
          <Imagem src={Ninja} alt="logo"/>
        <ButtonsInicial> 
        <ButtonWanna onClick={props.botaoCadastro}>QUERO SER UM NINJA</ButtonWanna>
        <ButtonWanna onClick={props.botaoServicos}>CONTRATAR UM NINJA</ButtonWanna>
        </ButtonsInicial>
         
        
       
    </ContainerInicial>
}