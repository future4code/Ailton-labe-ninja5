import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ed6c2b94;
  height: 250px;
  width: 250px;
  background-color: #ed6c2b94;
  border-radius: 10px;
  margin: 0 15px;

  > p {
    margin: 0 5px;
    text-align: center;
  }
`;
const TituloCard = styled.h3`

  color: black;
  text-align: center;
`;
const ButtonCard = styled.div`
  display: flex;
  margin: 0 5px;
  justify-content: space-between;
  margin-top: 50px;
`;

export default class CardServicos extends React.Component {
  state = {
    filtroBuscarNome: "",
    filtroValorMax: "",
    filtroValorMin: "",
    ordenar: "title",
  };

  onChangePesquisa = (e) => {
    this.setState({ filtroBuscarNome: e.target.value });
  };
  onChangeValorMin = (e) => {
    this.setState({ filtroValorMin: e.target.value });
  };
  onChangeValorMax = (e) => {
    this.setState({ filtroValorMax: e.target.value });
  };
  onChangeOrdenacao = (e) => {
    this.setState({ ordenar: e.target.value });
  };

  render() {
    const pegarListaServicos = this.props.listaServicos
      //Filtro para buscar por nome
      .filter((servicos) => {
        return servicos.title
          .toLowerCase()
          .includes(this.state.filtroBuscarNome.toLowerCase());
      })
      //Filtro para buscar por Valor Mínimo
      .filter((servicos) => {
        return (
          this.state.filtroValorMin === "" ||
          servicos.price >= this.state.filtroValorMin
        );
      })
      //Filtro para buscar por Valor Máximo
      .filter((servicos) => {
        return (
          this.state.filtroValorMax === "" ||
          servicos.price <= this.state.filtroValorMax
        );
      })
      //Ordenações
      .sort((currentJob, nextJob) => {
        switch (this.state.ordenar) {
          case "title":
            return currentJob.title.localeCompare(nextJob.title);

          case "dueDate":
            return (
              new Date(currentJob.dueDate).getTime() -
              new Date(nextJob.dueDate).getTime()
            );
          default:
            return currentJob.price - nextJob.price;
        }
      })
      .map((servicos) => {
        return (
          <ContainerCard key={servicos.id}>
            <TituloCard> {servicos.title}</TituloCard>
            <p>Preço: {servicos.price}</p>
            <p>Prazo: {servicos.dueDate.split("T")[0]}</p>
            <ButtonCard>
              <button onClick={() => this.props.botaoTelaDetalhes(servicos.id)}>
                Ver detalhes
              </button>
              <button>🛒</button>
            </ButtonCard>
          </ContainerCard>
        );
      });

    return (
      <Container>
        <div>
          <input
            value={this.state.filtroBuscarNome}
            onChange={this.onChangePesquisa}
            placeholder="Pesquisa"
          ></input>
          <input
            type="number"
            value={this.state.filtroValorMin}
            onChange={this.onChangeValorMin}
            placeholder="Preço mínimo"
          ></input>
          <input
            type="number"
            value={this.state.filtroValorMax}
            onChange={this.onChangeValorMax}
            placeholder="Preço máximo"
          ></input>
        </div>

        <span>
          <label form="sort">Ordenação</label>

          <select
            name="sort"
            value={this.state.ordenar}
            onChange={this.onChangeOrdenacao}
          >

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
        filtroBuscarNome:"",
        filtroValorMax:"",
        filtroValorMin:"",
        ordenar:"title",
        produtosNoCarrinho:[],

    }

    onChangePesquisa = (e) =>{
        this.setState({filtroBuscarNome:e.target.value})
    }
    onChangeValorMin = (e) =>{
        this.setState({filtroValorMin:e.target.value})
    }
    onChangeValorMax = (e) =>{
        this.setState({filtroValorMax:e.target.value})
    }
    onChangeOrdenacao = (e) =>{
        this.setState({ordenar:e.target.value})
    }
    
    addServicoCarrinho = (servico) =>{
     const novoServico = [...this.state.produtosNoCarrinho];
     novoServico.push(servico);
    this.setState({produtosNoCarrinho:novoServico});
    alert("Serviço adicionado ao carrinho")
}

    render(){

        const pegarListaServicos = this.props.listaServicos
        //Filtro para buscar por nome
        .filter((servicos)=>{
            return servicos.title.toLowerCase().includes(this.state.filtroBuscarNome.toLowerCase())
        })
        //Filtro para buscar por Valor Mínimo
        .filter((servicos)=>{
            return this.state.filtroValorMin === "" || servicos.price >= this.state.filtroValorMin
        })
        //Filtro para buscar por Valor Máximo
        .filter((servicos)=>{
            return this.state.filtroValorMax === "" || servicos.price <= this.state.filtroValorMax
        })
        //Ordenações
        .sort((currentJob,nextJob)=>{
            switch (this.state.ordenar){
            case "title":
                return currentJob.title.localeCompare(nextJob.title)
            
            case "dueDate":
            return new Date(currentJob.dueDate).getTime() - new Date(nextJob.dueDate).getTime()
            default:
            return   currentJob.price - nextJob.price 
            }
           
        })
        .map((servicos)=>{

            return (
                
                <ContainerCard key={servicos.id}>
                <TituloCard> {servicos.title }</TituloCard>
                <p>Preço: {servicos.price}</p>
                <p>Prazo: {servicos.dueDate.split("T")[0]}</p>
                <ButtonCard> 
                
                <button onClick={() => this.props.botaoTelaDetalhes(servicos.id)}>Ver detalhes</button>
                <button onClick={()=>this.addServicoCarrinho(servicos)}>🛒</button>
                
                </ButtonCard>
            </ContainerCard>
            )
            
           
        })

        return(
            <Container>

            <div>

            <input value={this.state.filtroBuscarNome} onChange={this.onChangePesquisa} placeholder="Pesquisa"></input>
            <input type="number" value={this.state.filtroValorMin} onChange={this.onChangeValorMin} placeholder="Preço mínimo"></input>
            <input type="number" value={this.state.filtroValorMax} onChange={this.onChangeValorMax} placeholder="Preço máximo"></input>

            </div>

            <span>

            <label form="sort">Ordenação</label>

            <select name="sort" value={this.state.ordenar} onChange={this.onChangeOrdenacao}>


            <option value="title">Título</option>
            <option value="price">Preço</option>
            <option value="dueDate">Prazo</option>
          </select>
        </span>

        {pegarListaServicos}
      </Container>
    );
  }
}
