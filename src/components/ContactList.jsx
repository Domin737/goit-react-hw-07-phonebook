import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../redux/contactsSlice';
import ContactItem from './ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts) || [];
  const filter = useSelector(state => state.contacts.filter) || '';
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={() => dispatch(removeContact(contact.id))}
        />
      ))}
    </List>
  );
};

export default ContactList;
