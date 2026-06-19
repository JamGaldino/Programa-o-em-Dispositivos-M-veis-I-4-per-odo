import React, { Component } from "react";

class Cabecalho extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.nome}</h1>
            </header>
        );
    }
}

export default Cabecalho;