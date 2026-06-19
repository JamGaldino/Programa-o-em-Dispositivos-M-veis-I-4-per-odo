import React, { Component } from "react";

class PacienteForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            idade: "",
            cidade: "",
            sexo: "",
            atendimento: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }


    handleSubmit(event) {
        event.preventDefault();

            alert(
            `Paciente: ${this.state.nome}
            Idade: ${this.state.idade}
            Cidade: ${this.state.cidade}
            Sexo: ${this.state.sexo}
            Tipo de Atendimento: ${this.state.atendimento}`
        );
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label>Nome:</label>

                    <input
                        type="text"
                        name="nome"
                        value={this.state.nome}
                        onChange={this.handleChange}
                    /><br /><br />

                    <label>Idade:</label>

                    <input
                        type="number"
                        name="idade"
                        value={this.state.idade}
                        onChange={this.handleChange}
                    /><br /><br />

                    <label>Cidade:</label>

                    <input
                        type="text"
                        name="cidade"
                        value={this.state.cidade}
                        onChange={this.handleChange}
                    /><br /><br />

                    <label>Sexo:</label>

                    <select
                        name="sexo"
                        value={this.state.sexo}
                        onChange={this.handleChange}
                    >

                        <option value="">Selecione</option>

                        <option value="Masculino">
                            Masculino
                        </option>

                        <option value="Feminino">
                            Feminino
                        </option>

                        <option value="Outro">
                            Outro
                        </option>

                    </select>
                    <br /><br />

                    <label>Tipo de Atendimento:</label>

                    <select
                        name="atendimento"
                        value={this.state.atendimento}
                        onChange={this.handleChange}
                    >

                        <option value="">Selecione</option>

                        <option value="Consulta">Consulta</option>

                        <option value="Exame">Exame</option>

                        <option value="Retorno">Retorno</option>

                        <option value="Emergência">Emergência</option>

                    </select>

                    <button type="submit">
                        Cadastrar
                    </button>

                </form>
            </div>
        )
    }

}

export default PacienteForm;