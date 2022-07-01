import React from "react";
import styled from "styled-components";
import Inicial from "./components/TelaInicial";
import TelaCadastro from "./components/TelaCadastro";
import CardServicos from "./components/CardServicos";
import Header from "./components/Header";
import { getAllJobs } from "./services/requisicoes";
import GlobalStyle from "./styles/global";
import DetalhesCard from "./components/DetalhesCard";
import CardCarrinho from "./components/CardCarrinho";

const ContainerTela = styled.div``;

class App extends React.Component {
  state = {
    telaAtual: "inicial",
    listaServicos: [],
    idServicoEscolhido: "",
    carrinho: [],
    valorTotal: 0,
  };

  // Funções ciclo de vida
  componentDidMount() {
    getAllJobs(this.salvarServicos);

    const carrinhoLocal = JSON.parse(localStorage.getItem("Carrinho"))
		if (carrinhoLocal) {
			this.setState({ carrinho: carrinhoLocal })
		}
      const valorLocal = JSON.parse(localStorage.getItem("ValorTotal"))
		if (valorLocal) {
			this.setState({ valorTotal: valorLocal })
  }
  }
  componentDidUpdate(prevState) {
    if (this.state.listaServicos !== prevState.listaServicos) {
      getAllJobs(this.salvarServicos);
	};
    const valorString = JSON.stringify(this.state.valorTotal)
		localStorage.setItem("ValorTotal", valorString);

    const carrinhoString = JSON.stringify(this.state.carrinho)
		localStorage.setItem("Carrinho", carrinhoString)
    }

  

  // Função para salvar array de serviços no estado
  salvarServicos = (dados) => {
    this.setState({ listaServicos: dados });
  };

  addServicoCarrinho = (servico) => {
    const novoServico = [...this.state.carrinho, servico];
    this.setState({ carrinho: novoServico });
    alert("Serviço adicionado ao carrinho");
    this.adicionarValorTotal(servico.price)
  };

  removerItenCarrinho = (servicosRemover) => {
    const novoCarrinho = this.state.carrinho.filter((servicos) => {
      if (servicos.id !== servicosRemover.id) {
        return servicos;
      }
    });
    this.setState({ carrinho: novoCarrinho });
     alert("Serviço removido do carrinho");
    this.removerValorTotal(servicosRemover.price)
  };

  adicionarValorTotal = (servico) =>{
this.setState({valorTotal: this.state.valorTotal + servico})
  }
  removerValorTotal = (servico) =>{
this.setState({valorTotal: this.state.valorTotal - servico})
  }

  // Renderização condicional de telas
  mudaTela = () => {
    switch (this.state.telaAtual) {
      case "inicial":
        return (
          <Inicial
            botaoCadastro={this.mudaTelaCadastro}
            botaoServicos={this.mudaTelaServicos}
          />
        );
      case "cadastro":
        return <TelaCadastro />;
      case "servicos":
        return (
          <CardServicos
            listaServicos={this.state.listaServicos}
            botaoTelaDetalhes={this.mudaTelaDetalhes}
            addProduto={this.addServicoCarrinho}
          />
        );
      case "carrinho":
        return (
          <CardCarrinho
            valorTotal={this.state.valorTotal}
            carrinho={this.state.carrinho}
            removerItenCarrinho={this.removerItenCarrinho}
          />
        ); //Alterar aqui quando a tela estiver pronta
      case "detalhes":
        return <DetalhesCard id={this.state.idServicoEscolhido} mudaTelaServicos={this.mudaTelaServicos}/>;
      default:
        return (
          <Inicial
            botaoCadastro={this.mudaTelaCadastro}
            botaoServicos={this.mudaTelaServicos}
          />
        );
    }
  };
  // Funções de mudança de tela (para serem passadas no onClick dos botões)
  mudaTelaInicial = () => {
    this.setState({ telaAtual: "inicial" });
  };
  mudaTelaCadastro = () => {
    this.setState({ telaAtual: "cadastro" });
  };
  mudaTelaServicos = () => {
    this.setState({ telaAtual: "servicos" });
  };
  mudaTelaCarrinho = () => {
    this.setState({ telaAtual: "carrinho" });
  };
  mudaTelaDetalhes = (id) => {
    this.setState({ telaAtual: "detalhes", idServicoEscolhido: id });
  };

  render() {
    return (
      <ContainerTela>
        {" "}
        {/* Alterar para um Container */}
        <Header
          mudaTelaInicial={this.mudaTelaInicial}
          mudaTelaCarrinho={this.mudaTelaCarrinho}
        />
        {this.mudaTela()}
        {/* <GlobalStyle/> */}
      </ContainerTela>
    );
  }
}

export default App;
