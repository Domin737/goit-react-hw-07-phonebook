import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

const ContactItem = ({ contact, onDelete }) => {
  return (
    <Item>
      <span>
        {contact.name}: {contact.phone}
      </span>{' '}
      {/* Poprawa nazwy pola */}
      <Button onClick={onDelete}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired, // Poprawa nazwy pola
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
