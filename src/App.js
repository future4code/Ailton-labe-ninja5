import React from 'react';
import Inicial from './components/TelaInicial';
import TelaCadastro from './components/TelaCadastro';
import CardServicos from './components/CardServicos';
import Header from './components/Header';
import { getAllJobs } from './services/requisicoes'
import GlobalStyle from './styles/global'
import DetalhesCard from './components/DetalhesCard';


class App extends React.Component {
  state = {
    telaAtual: "inicial",
    listaServicos: [],
    idServicoEscolhido: "",
  }

  // Funções ciclo de vida
  componentDidMount () {
    getAllJobs(this.salvarServicos)
  }
  componentDidUpdate (prevState) {
    if(this.state.listaServicos !== prevState.listaServicos){
      getAllJobs(this.salvarServicos)  
    } 
  }

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
        return  <CardServicos
          listaServicos={this.state.listaServicos}
          botaoTelaDetalhes={this.mudaTelaDetalhes}
        />
      case "carrinho":
        return <p>Tela do Carrinho</p> //Alterar aqui quando a tela estiver pronta
      case "detalhes":
        return <DetalhesCard id={this.state.idServicoEscolhido}/>
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
  mudaTelaDetalhes = (id) => {
    this.setState({telaAtual: "detalhes", idServicoEscolhido: id})
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
