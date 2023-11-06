import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { H1, H2, H3 } from './App.styled';

const getInitialContacts = () => {
  return JSON.parse(localStorage.getItem('contact-list')) || [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contact-list', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts(prevState => {
      return [...prevState, { ...newContact, id: nanoid() }];
    });
  };

  const getVisibleItems = () => {
    const findName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(findName)
    );
  };

  const changeFilter = value => {
    setFilter(value);
  };

  const onDelete = id => {
    setContacts(prevState => {
      return prevState.filter(contact => id !== contact.id);
    });
  };

  return (
    <div>
      <H1>Phonebook</H1>
      <ContactForm onAdd={addContact} />
      <H2>Contacts</H2>
      <H3>Find contacts by name</H3>
      <Filter value={filter} searchName={changeFilter} />
      <ContactList itemsContacts={getVisibleItems()} onDelete={onDelete} />
    </div>
  );
};
