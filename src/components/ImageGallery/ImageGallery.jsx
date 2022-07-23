import { Item } from './Item/Item';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map(({ id, webformatURL, tags, onToggleModal }) => (
        <Item key={id} src={webformatURL} tag={tags} onClick={onToggleModal} />
      ))}
    </List>
  );
};
