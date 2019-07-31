import React, { Component } from "react";
import { debounce } from "lodash";

class WithDebounce extends Component {
  state = { text: "" };
  debounceEvent(...args) {
    this.debouncedEvent = debounce(...args);
    return e => {
      e.persist();
      return this.debouncedEvent(e);
    };
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
    console.log("#COM DEBOUNCE: " + e.target.value);
  };

  componentWillUmount() {
    this.debouncedEvent.cancel();
  }

  render() {
    return (
      <div>
        <h1>Com Debounce</h1>
        <input
          onChange={this.debounceEvent(this.handleChange, 500)}
          placeholder="COM DEBOUNCE"
        />
        <span>⇒</span>
        <input value={this.state.text} />
      </div>
    );
  }
}

export default WithDebounce;
