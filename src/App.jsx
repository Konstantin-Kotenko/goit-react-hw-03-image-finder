import { Component } from 'react';
import { Box } from './components/Box';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from './components/Button';
import * as API from './api/api';

export class App extends Component {
  state = {
    search: '',
    items: [],
    page: 1,
    isShowModal: false,
  };

  onloadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      API.searchParams.q = search;
      API.searchParams.page = page;
      try {
        const { hits } = await API.getImages(API.searchParams);
        this.setState({
          items:
            prevState.search !== search ? hits : [...prevState.items, ...hits],
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  onFormSubmit = values => {
    this.setState({
      search: values,
      page: 1,
    });
  };

  onToggleModal = () => {
    const { isShowModal } = this.state;
    if (!isShowModal) {
      this.setState({ isShowModal: !isShowModal });
    }
  };

  render() {
    const { items, isShowModal } = this.state;
    return (
      <Box>
        <Searchbar onSubmit={this.onFormSubmit} />
        {items.length !== 0 && (
          <ImageGallery
            images={items}
            onClick={this.onToggleModal}
            isShowModal={isShowModal}
          />
        )}
        {items.length !== 0 && <Button onLoadMore={this.onloadMore} />}
      </Box>
    );
  }
}
