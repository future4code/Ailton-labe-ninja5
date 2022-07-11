import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import styled from 'styled-components'
import Ninja from './img/Ninja.png'



const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #ed6c2b;
    height: 64px;
    justify-content: space-between;
    >h1:hover{
        cursor: pointer;
    }
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
    :hover{
        cursor: pointer;
    }   
`



export default function Header (props) {
  return (
    <HeaderContainer>
         <Imagem src={Ninja} alt="logo"/>
        <h1 onClick={props.mudaTelaInicial}> LABENINJAS</h1>
        <ButtonHeader>
             <ButtonHomeCart onClick={props.mudaTelaCarrinho}><img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/40/000000/external-cart-grocery-flatart-icons-solid-flatarticons.png"/></ButtonHomeCart>
        </ButtonHeader>
    </HeaderContainer>
  )
}

