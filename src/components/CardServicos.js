import React from "react"
import styled from "styled-components"


const Container = styled.div`
display:flex;
flex-wrap: wrap;


`
const ContainerCard = styled.div`
display:flex;
flex-direction:column;
border:1px solid #ed6c2b94;
height:250px;
width:250px;
background-color: #ed6c2b94;
border-radius:10px;
margin: 0 15px;

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
    state={
        filtroValorMin:"",
        filtroValorMax:"",
        filtroBuscarNome:"",

    }

    onChangeBuscarNome = (e) => {
        this.setState({filtroBuscarNome: e.target.event})
    }


    render(){

        const pegarListaServicos = this.props.listaServicos.map((servicos)=>{
            return (
                
                
                <ContainerCard key={servicos.id}>
                <TituloCard> {servicos.title }</TituloCard>
                <p>Preço: {servicos.price}</p>
                <p>Prazo: {servicos.dueDate.split("T")[0]}</p>
                <ButtonCard> 
                
                <button> Ver detalhes</button>
                <button>🛒</button>
                
                
                </ButtonCard>
            </ContainerCard>
            )
            
           
        })

        return(
            <Container>

            <div>
            <input placeholder="Valor mín"></input>
            <input placeholder="Valor máx"></input>
            <input onChange={this.onChangeBuscarNome} value={this.state.filtroBuscarNome}  placeholder="Buscar..."></input>
            </div>
          
          
            {pegarListaServicos}

         
            </Container>
        )
    }
}
