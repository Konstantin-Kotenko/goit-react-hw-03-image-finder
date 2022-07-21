import { Header, SearchForm, Button, Span, Input } from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <Header class="searchbar">
      <SearchForm class="form">
        <Button type="submit" class="button">
          <Span class="button-label">Search</Span>
        </Button>
        <Input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
