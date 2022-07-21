import { Component } from 'react';
import { Box } from './components/Box';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from './components/Button';

export class App extends Component {
  state = {};

  render() {
    return (
      <Box>
        <Searchbar />
        <ImageGallery />
        <Button />
      </Box>
    );
  }
}
