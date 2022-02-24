import React, { Component } from "react";
import './App.css';

export default class Calculadora extends Component {
  state = {
    num1: "",
    num2: "",
    resultado: ""
  };

  somar = () => {
    this.setState({
      resultado: this.state.num1 + this.state.num2
    });
  };

  subtrair = () => {
    this.setState({
      resultado: this.state.num1 - this.state.num2
    });
  };

  multiplicar = () => {
    this.setState({
      resultado: this.state.num1 * this.state.num2
    });
  };

  dividir = () => {
    this.setState({
      resultado: this.state.num1 / this.state.num2
    });
  };

  zerar = () => {
    this.setState({
      num1: "",
      num2: "",
      resultado: ""
    });
  };

  handleChange = (evento) => {
    this.setState({
      num1: Number(evento.target.value)
    });
  };
  handleChange2 = (evento) => {
    this.setState({
      num2: Number(evento.target.value)
    });
  };

  render() {
    return (
      <div>
        <h1>Calculadora</h1>
        <input onChange={this.handleChange} value={this.state.num1} />
        <input onChange={this.handleChange2} value={this.state.num2} />
        <button onClick={this.dividir}>/</button>
        <button onClick={this.multiplicar}>*</button>
        <button onClick={this.subtrair}>-</button>
        <button onClick={this.somar}>+</button>
        <button onClick={this.zerar}>C</button>
        <input value={this.state.resultado} />
      </div>
    );
  }
}
