import React from "react"
import styled from "styled-components"



const ContainerCard = styled.div`
display:flex;
flex-direction:column;
border:1px solid #ed6c2b94;
height:200px;
width:200px;
background-color: #ed6c2b94;
border-radius:10px;
margin: 0 5px;

>p{

    margin: 0 5px;
    text-align:center;
}


`
const TituloCard = styled.h3`
color:black;
text-align:center;


`
const ButtonCard = styled.div `

display:flex;
margin: 0 5px;
justify-content:space-between;
margin-top:50px


`





export default class CardServicos extends React.Component{

    render(){

        return(

            <ContainerCard>
                <TituloCard>Abraços quentinhos</TituloCard>
                <p>Preço: R$ 5.00</p>
                <p>Prazo: Imediato</p>
                <ButtonCard> 
                
                <button> Ver detalhes</button>
                <button>🛒</button>
                
                
                </ButtonCard>

            </ContainerCard>

        )
    }
}