import PropTypes from 'prop-types';
import { removeContact } from 'redux/contactSlice';
import { useDispatch } from 'react-redux';
import { ContactItem, ContactButton, ContactNumber } from './Contact.styled';

export const Contact = ({ options: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <span>{name}:</span>
      <ContactNumber>
        <span>{number}</span>
      </ContactNumber>
      <ContactButton type="button" onClick={() => dispatch(removeContact(id))}>
        Delete
      </ContactButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  options: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
