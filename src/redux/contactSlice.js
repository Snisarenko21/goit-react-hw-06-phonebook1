import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },

    removeContact: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },

    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, removeContact, setFilter } = contactSlice.actions;

// SELECTORS

export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;
