import React from "react";

export default function Inicial (props) {

    return <div>
        <button onClick={props.botaoCadastro}>QUERO SER UM NINJA</button>
        <button onClick={props.botaoServicos}>CONTRATAR UM NINJA</button>
    </div>
}