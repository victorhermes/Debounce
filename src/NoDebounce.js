/* https://braziljs.org/artigos/como-testar-o-tempo-de-execucao-seu-codigo-com-js/ */
import React, { Component } from "react";
import "./index.css";

class NoDebounce extends Component {
  state = { text: "" };

  handleChange = e => {
    this.setState({ text: e.target.value });
    console.log("#SEM DEBOUNCE: " + e.target.value);
  };

  render() {
    return (
      <div>
        <h1>Sem Debounce</h1>
        <input onChange={this.handleChange} placeholder="SEM DEBOUNCE" />
        <span>⇒</span>
        <input value={this.state.text} />
      </div>
    );
  }
}

export default NoDebounce;
