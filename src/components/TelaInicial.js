import React from "react";
import styled from "styled-components";
import Ninja from './img/Ninja.png'

const Imagem = styled.img`
display: flex;
align-items: center;
justify-content: center;
 height: 60vh;
 width: 30vw;
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

export default function Inicial (props) {

    return <ContainerInicial>
          <Imagem src={Ninja} alt="logo"/>
        <ButtonsInicial> 
        <button onClick={props.botaoCadastro}>QUERO SER UM NINJA</button>
        <button onClick={props.botaoServicos}>CONTRATAR UM NINJA</button>
        </ButtonsInicial>
         
        
       
    </ContainerInicial>
}