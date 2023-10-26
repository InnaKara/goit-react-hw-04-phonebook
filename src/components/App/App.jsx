import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { H1, H2, H3 } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addContact = newContact => {
    const isExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  getVisibleItems = () => {
    const { contacts, filter } = this.state;
    const findName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(findName)
    );
  };

  changeFilter = value => {
    this.setState({ filter: value });
  };

  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => id !== contact.id),
    }));
  };

  render() {
    const visibleItems = this.getVisibleItems();
    const { filter } = this.state;
    return (
      <div>
        <H1>Phonebook</H1>
        <ContactForm onAdd={this.addContact} />
        <H2>Contacts</H2>
        <H3>Find contacts by name</H3>
        <Filter value={filter} searchName={this.changeFilter} />
        <ContactList itemsContacts={visibleItems} onDelete={this.onDelete} />
      </div>
    );
  }
}
