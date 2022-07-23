import { Formik } from 'formik';
// import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Button, Header, SearchForm, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
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

// export class Searchbar extends Component {
//   state = {
//     search: '',
//   };

//   handleNameChange = e => {
//     this.setState({ search: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.search.trim() === '') {
//       alert('safasf');
//       return;
//     }
//     this.props.onSubmit(this.state.search);
//     this.setState({ search: '' });
//   };

//   render() {
//     return (
//       <Header>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <Button type="submit">
//             <BsSearch />
//           </Button>
//           <Input
//             name="search"
//             type="text"
//             autocomplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.search}
//             onChange={this.handleNameChange}
//           />
//         </SearchForm>
//       </Header>
//     );
//   }
// }
