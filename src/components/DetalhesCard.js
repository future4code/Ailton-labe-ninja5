import React from "react";
import { getJobById } from "../services/requisicoes";

export default class DetalhesCard extends React.Component {
  state = {
    detalhes: [],
  };

  componentDidMount() {
    getJobById(this.props.id, this.salvarDetalhes);
  };

  salvarDetalhes = (id) => {
    this.setState({
      detalhes: id,
    });
  };
  render() {
  
   const detalhePagemento = this.state.detalhes.paymentMethods && this.state.detalhes.paymentMethods.map((servico)=>{
    return <p key={servico}>{servico}</p>

   });
    return <div>

        <p>{this.state.detalhes.title}</p>
        <p>{this.state.detalhes.description}</p>
        <p>{this.state.detalhes.price}</p>
        <p>{new Date(this.state.detalhes.dueDate).toLocaleDateString()}</p>
       {detalhePagemento}
        </div>
   
  }
} 
