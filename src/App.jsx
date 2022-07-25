import { Component } from 'react';
import { Box } from './components/Box';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from './components/Button';
import * as API from './api/api';
import { Modal } from './components/Modal';
import { Loader } from 'components/Loader';

export class App extends Component {
  state = {
    search: '',
    items: [],
    page: 1,
    isShowModal: false,
    loading: false,
  };

  onToggleModal = e => {
    this.setState(({ isShowModal }) => ({
      isShowModal: !isShowModal,
    }));
    if (!this.state.isShowModal) {
      this.setState({
        largeImageURL: e.target.dataset.set,
        alt: e.target.alt,
      });
    }
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
      this.setState({ loading: true });
      try {
        const { hits } = await API.getImages(API.searchParams);
        this.setState({
          items:
            prevState.search !== search ? hits : [...prevState.items, ...hits],
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  onFormSubmit = values => {
    this.setState({
      search: values,
      page: 1,
    });
  };

  render() {
    const { items, isShowModal, largeImageURL, alt, loading } = this.state;
    return (
      <Box>
        <Searchbar onSubmit={this.onFormSubmit} />
        {loading && <Loader />}
        {items.length !== 0 && (
          <ImageGallery images={items} onClick={this.onToggleModal} />
        )}
        {isShowModal && (
          <Modal onClose={this.onToggleModal}>
            <img src={largeImageURL} alt={alt} />
          </Modal>
        )}
        {items.length !== 0 && <Button onLoadMore={this.onloadMore} />}
      </Box>
    );
  }
}
