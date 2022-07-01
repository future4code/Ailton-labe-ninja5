import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import styled from 'styled-components'
import Ninja from './img/Ninja.png'



const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #ed6c2b;
    height: 10vh;
    justify-content: space-between;
`
const ButtonHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 2vw;
    gap: 1vw;
`
const Imagem = styled.img`
    height: 10vh;
`

const ButtonHomeCart = styled.button`
    background-color: #ed6c2b;
    border: none;
    color: black;
    font-weight: bold;   
`



export default function Header (props) {
  return (
    <HeaderContainer>
         <Imagem src={Ninja} alt="logo"/>
        <h1> LABENINJAS</h1>
        <ButtonHeader>
             <ButtonHomeCart onClick={props.mudaTelaInicial}> HOME</ButtonHomeCart>
             <ButtonHomeCart onClick={props.mudaTelaCarrinho}>🛒</ButtonHomeCart>
        </ButtonHeader>
    </HeaderContainer>
  )
}

