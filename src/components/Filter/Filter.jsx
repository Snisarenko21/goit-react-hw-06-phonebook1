import { nanoid } from 'nanoid';
import { Field, FieldInput } from './Filter.styled';
import { setFilter, getFilter } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const inputIdGenerate = nanoid();

  return (
    <>
      <Field>Find contacts by name</Field>
      <FieldInput
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        id={inputIdGenerate}
      />
    </>
  );
};
