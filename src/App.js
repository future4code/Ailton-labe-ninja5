import React from 'react';
import Inicial from './components/TelaInicial';
import Header from './components/Header';



class App extends React.Component {
  state = {
    telaAtual: "inicial",
  }

  // Renderização condicional de telas
  mudaTela = () => {
    switch(this.state.telaAtual) {
      case "inicial":
        return <Inicial
          botaoCadastro={this.mudaTelaCadastro}
          botaoServicos={this.mudaTelaServicos}
        />
      case "cadastro":
        return <p>Tela de Cadastro</p> //Alterar aqui quando a tela estiver pronta
      case "servicos":
        return <p>Tela de Serviços</p> //Alterar aqui quando a tela estiver pronta
      case "carrinho":
        return <p>Tela do Carrinho</p> //Alterar aqui quando a tela estiver pronta
      case "detalhes":
        return <p>Tela de Detalhes</p> //Alterar aqui quando a tela estiver pronta
      default:
        return <Inicial
          botaoCadastro={this.mudaTelaCadastro}
          botaoServicos={this.mudaTelaServicos}
        />
    }
  }
  // Funções de mudança de tela (para serem passadas no onClick dos botões)
  mudaTelaInicial = () => {
    this.setState({telaAtual: "inicial"})
  }
  mudaTelaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }
  mudaTelaServicos = () => {
    this.setState({telaAtual: "servicos"})
  }
  mudaTelaCarrinho = () => {
    this.setState({telaAtual: "carrinho"})
  }
  mudaTelaDetalhes = () => {
    this.setState({telaAtual: "detalhes"})
  }

  render() {
    return <div> {/* Alterar para um Container */}
      <Header>Header</Header> {/* Alterar aqui quando o Header estiver pronto */}

      {this.mudaTela()} 

    </div>
  }
}

export default App;
