import { Component } from 'react';
import { Box } from './components/Box';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from './components/Button';

export class App extends Component {
  state = {
    search: '',
  };

  formSubmitHandle = search => {
    this.setState({ search });
  };

  render() {
    return (
      <Box>
        <Searchbar onSubmit={this.formSubmitHandle} />
        <ImageGallery search={this.state.search} />
        <Button />
      </Box>
    );
  }
}
