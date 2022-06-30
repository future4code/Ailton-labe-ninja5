import React from "react";
import { getJobById } from "../services/requisicoes";

export default class DetalhesCard extends React.Component {
  state = {
    detalhes: [],
  };

  componentDidMount() {
    getJobById(this.props.id, this.salvarDetalhes);
  }

  salvarDetalhes = (id) => {
    this.setState({
      detalhes: id,
    });
  };
  render() {
    
   
    return <div>

        <p>{this.state.detalhes.title}</p>
        <p>{this.state.detalhes.description}</p>
        <p>{this.state.detalhes.price}</p>
        <p>{this.state.detalhes.dueDate}</p>
        <p>{this.state.detalhes.paymentMethods}</p>
    
        </div>
   
  }
}
