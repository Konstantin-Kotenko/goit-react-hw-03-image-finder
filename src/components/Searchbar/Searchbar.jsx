import { Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Button, Header, SearchForm, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ search }, { resetForm }) => {
    onSubmit(search);
    resetForm();
  };
  return (
    <Header>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <Button type="submit">
            <BsSearch />
          </Button>
          <Input type="text" name="search" />
        </SearchForm>
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
