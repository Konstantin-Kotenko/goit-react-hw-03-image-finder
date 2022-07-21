import { Component } from 'react';
import { Box } from './components/Box';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from './components/Button';
import { api } from './api/api';

export class App extends Component {
  state = {
    q: '',
    // page: 1,
  };

  formSubmitHandle = ({}) => {};

  async componentDidUpdate() {
    try {
      const { data } = await api.get(
        '?q=cat&page=1&image_type=photo&orientation=horizontal&per_page=12'
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Box>
        <Searchbar onSubmit={this.formSubmitHandle} />
        <ImageGallery />
        <Button />
      </Box>
    );
  }
}
