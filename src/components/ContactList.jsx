import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../redux/contactsSlice';
import ContactItem from './ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const { contacts, filter, status, error } = useSelector(
    state => state.contacts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  // Dodane sprawdzenie
  if (!contacts) {
    return <div>No contacts available</div>;
  }

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </List>
  );
};

export default ContactList;
