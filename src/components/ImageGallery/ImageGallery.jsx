import { Component } from 'react';
import { Item } from './Item/Item';
import { List } from './ImageGallery.styled';
import { api } from '../../api/api';

export class ImageGallery extends Component {
  state = {
    data: null,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.search !== this.props.search) {
      this.setState({ loading: true });
      try {
        const { data } = await api.get(
          `?q=${this.props.search}&page=1&image_type=photo&orientation=horizontal&per_page=12`
        );
        console.log(data.hits.map(hit => hit.id));
        this.setState({ data });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { loading, data } = this.state;

    return (
      <List>
        {loading && <div>Loading</div>}
        {data && <Item onData={data} />}
      </List>
    );
  }
}
