import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter) || '';
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </Label>
  );
};

export default Filter;
