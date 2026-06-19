import React, { Component } from "react";

class Relogio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hora: new Date()
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                hora: new Date()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h2>Hora Atual</h2>
                <h3>{this.state.hora.toLocaleTimeString()}</h3>
            </div>
        );
    }
}

export default Relogio;