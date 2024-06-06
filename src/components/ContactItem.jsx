import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

const ContactItem = ({ contact, onDelete }) => {
  return (
    <Item>
      <span>
        {contact.name}: {contact.number}
      </span>
      <Button onClick={() => onDelete(contact.id)}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
