import { BsSearch } from 'react-icons/bs';
import { Formik } from 'formik';
import { Header, SearchForm, Button, Span, Input } from './Searchbar.styled';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    q: '',
  };

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Header>
        <Formik initialValues={{ q: '' }} onSubmit={handleSubmit}>
          <SearchForm>
            <Button type="submit">
              <BsSearch />
              <Span>Search</Span>
            </Button>
            <Input
              name="search"
              type="text"
              autocomplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        </Formik>
      </Header>
    );
  }
}
