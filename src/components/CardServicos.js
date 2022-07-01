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
  justify-content: space-between;
  padding: 10px;

  > p {
    margin-top: 10px;
    text-align: center;
  }
`;
const TituloCard = styled.h3`
  color: black;
  text-align: center;
  margin-bottom: 5px;
`;
const BotoesNovos = styled.div`
  display: flex;
  margin: 0 5px;
  justify-content: space-between;
  margin-top: 10px;
`;

const Novosbotoes = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  padding: 5px;

  :hover {
    webkit-transform: scale(0.9);
    transform: scale(0.9);
    background-color: #ed6c2b;
    cursor: pointer;
  }
`;
const MiniContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

const Filtro = styled.div`
  display: flex;
  gap: 10px;
  > input {
    color: #ed6c2b;
    border: 1px solid #ed6c2b;
  }
`;

const FiltroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 4%;
  margin-bottom: 4%;
  color: #ed6c2b;
  gap: 10px;
`;

const Ordenacao = styled.select`
  border: 1px solid #ed6c2b;
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
            <BotoesNovos>
              <Novosbotoes
                onClick={() => this.props.botaoTelaDetalhes(servicos.id)}
              >
                Ver detalhes
              </Novosbotoes>
              <Novosbotoes onClick={() => this.props.addProduto(servicos)}>
                🛒
              </Novosbotoes>
            </BotoesNovos>
          </ContainerCard>
        );
      });

    return (
      <Container>
        <FiltroContainer>
          <Filtro>
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
          </Filtro>

          <span>
            <label form="sort">Ordenação</label>

            <Ordenacao
              name="sort"
              value={this.state.ordenar}
              onChange={this.onChangeOrdenacao}
            >
              <option value="title">Título</option>
              <option value="price">Preço</option>
              <option value="dueDate">Prazo</option>
            </Ordenacao>
          </span>
        </FiltroContainer>

        <MiniContainer>{pegarListaServicos}</MiniContainer>
      </Container>
    );
  }
}
