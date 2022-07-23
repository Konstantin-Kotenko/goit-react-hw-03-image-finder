import { Component } from 'react';
import { Box } from './components/Box';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
// import { Button } from './components/Button';
import * as API from './api/api';

export class App extends Component {
  state = {
    search: '',
    items: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      try {
        API.searchParams.q = search;
        const { hits } = await API.getImages(API.searchParams);
        console.log(hits);
        console.log(this.state.items);
      } catch (error) {}
    }
  }

  onFormSubmit = search => {
    this.setState({ search });
  };

  render() {
    const { items } = this.state;
    return (
      <Box>
        <Searchbar onSubmit={this.onFormSubmit} />
        {items.length !== 0 && <ImageGallery images={items} />}
        {/* <Button /> */}
      </Box>
    );
  }
}
