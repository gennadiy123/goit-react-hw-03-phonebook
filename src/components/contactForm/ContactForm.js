import React, { Component } from "react";
import { uuid } from "uuidv4";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitContact({
      name: this.state.name,
      number: this.state.number,
      id: uuid()
    });
    this.setState({
      name: "",
      number: ""
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          ></input>
          <h2>Number</h2>
          <input
            type="tel"
            name="number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={this.handleChange}
            value={this.state.number}
          ></input>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
