import { Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';
import { Button, Header, SearchForm, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ search }, { resetForm }) => {
    onSubmit(search);
    console.log();
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
