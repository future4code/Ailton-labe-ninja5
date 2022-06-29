import React from 'react'
import styled from 'styled-components'
import Ninja from './img/Ninja.png'



const HeaderContainer = styled.div`
    display: flex;
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



export default function Header (props) {
  return (
    <HeaderContainer>
         <img src={Ninja} alt="logo"/>
        <h1> LABENINJAS</h1>
        <ButtonHeader>
             <button onClick={props.mudaTelaInicial}> HOME</button>
             <button onClick={props.mudaTelaCarrinho}>CARRINHO</button>
        </ButtonHeader>
    </HeaderContainer>
  )
}

