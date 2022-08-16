import { ToastContainer} from 'react-toast'
import { Container, Title } from './App.styled';
import { Form } from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      <ToastContainer />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
}
