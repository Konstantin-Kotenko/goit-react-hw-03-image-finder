import { Component } from 'react';
import { Box } from './components/Box';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from './components/Button';
import * as API from './api/api';
import { Modal } from './components/Modal';
import { Loader } from 'components/Loader';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    q: '',
    items: [],
    page: 1,
    isShowModal: false,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { q, page } = this.state;
    if (prevState.q !== q || prevState.page !== page) {
      this.setState({ loading: true });
      try {
        if (q === '') {
          return this.setState({
            q: '',
          });
        }
        const { hits, total } = await API.getImages({ q, page });
        Notiflix.Notify.success(total);
        console.log(total, hits);
        this.setState({
          items: prevState.q !== q ? hits : [...prevState.items, ...hits],
        });
      } catch (error) {
        Notiflix.Notify.failure(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  onFormSubmit = values => {
    const { q } = this.state;
    if (values === q && values !== '') {
      return Notiflix.Notify.failure('Please entry new name');
    } else if (values === '') {
      this.setState({
        items: [],
        q: values,
        page: 1,
      });
      Notiflix.Notify.failure('Please entry name');
    } else {
      this.setState({
        q: values,
        page: 1,
      });
    }
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
        {items.length >= 12 && <Button onLoadMore={this.onloadMore} />}
      </Box>
    );
  }
}
