import { Header, SearchForm, Button, Span, Input } from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <Header>
      <SearchForm>
        <Button type="submit">
          <Span>Search</Span>
        </Button>
        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
