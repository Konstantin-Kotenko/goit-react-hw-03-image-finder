import { Component } from 'react';
import { Box } from './components/Box';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from './components/Button';
import * as API from './api/api';
import { Modal } from './components/Modal';

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

  onToggleModal = () => {
    const { isShowModal } = this.state.isShowModal;
    this.setState({ isShowModal: !isShowModal });
    if (!isShowModal) {
      this.setState({ isShowModal: isShowModal });
    }
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      try {
        API.searchParams.q = search;
        API.searchParams.page = page;
        const { hits } = await API.getImages(API.searchParams);
        this.setState({
          items: prevState.items ? [...prevState.items, ...hits] : hits,
        });
      } catch (error) {}
    }
  }

  onFormSubmit = values => {
    this.setState({ search: values });
  };

  render() {
    const { items, isShowModal } = this.state;
    return (
      <Box>
        <Searchbar onSubmit={this.onFormSubmit} />
        {items.length !== 0 && (
          <ImageGallery images={items} onClick={this.onToggleModal} />
        )}
        {items.length !== 0 && <Button onLoadMore={this.onloadMore} />}
        {isShowModal && <Modal images={items} onClick={this.onToggleModal} />}
      </Box>
    );
  }
}
