import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  componentDidMount() {
    const contacts =
      localStorage.getItem("contacts") !== null
        ? JSON.parse(localStorage.getItem("contacts"))
        : [];
    this.setState({ contacts });
  }

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  submitContact = data => {
    const isNameExist = this.state.contacts.some(
      contact => contact.name === data.name
    );
    console.log("isNameExist", isNameExist);
    !isNameExist
      ? this.setState(prevState => ({
          contacts: [...prevState.contacts, data]
        }))
      : alert("Name already taken!");
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  nameFilter = e => {
    this.setState({
      filter: e.target.value
    });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm submitContact={this.submitContact} />

        <h2>Contacts</h2>
        {this.state.contacts.length > 2 && (
          <Filter nameFilter={this.nameFilter} />
        )}
        <ContactList
          contacts={this.getFilteredContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;