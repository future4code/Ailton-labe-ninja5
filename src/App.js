import React from 'react';
import Inicial from './components/TelaInicial';
import TelaCadastro from './components/TelaCadastro';
import CardServicos from './components/CardServicos';
import Header from './components/Header';
import { getAllJobs } from './services/requisicoes'
import GlobalStyle from './styles/global'


class App extends React.Component {
  state = {
    telaAtual: "inicial",
    listaServicos: [],
  }

  // Funções ciclo de vida
  componentDidMount () {
    getAllJobs(this.salvarServicos)
  }
  // componentDidUpdate () {}

  // Função para salvar array de serviços no estado
  salvarServicos = (dados) => {
    this.setState({listaServicos: dados})
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
        return <TelaCadastro/>
      case "servicos":
        return  <CardServicos/>
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
    
      <Header mudaTelaInicial = {this.mudaTelaInicial}
      mudaTelaCarrinho = {this.mudaTelaCarrinho}
      />

      {this.mudaTela()} 
      <GlobalStyle/>
    </div>
  }
}

export default App;
