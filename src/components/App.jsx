import { Toaster } from 'react-hot-toast';
import { Container, Title } from './App.styled';
import { Form } from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      <Toaster />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
}
