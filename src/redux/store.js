import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('contacts');
    if (serializedState === null) {
      return undefined;
    }
    return { contacts: JSON.parse(serializedState) };
  } catch (err) {
    return undefined;
  }
};

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state.contacts);
    localStorage.setItem('contacts', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export { store };
