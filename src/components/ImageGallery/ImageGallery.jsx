import { Item } from './Item';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <List>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <Item
          key={id}
          id={id}
          largeImageURL={largeImageURL}
          src={webformatURL}
          tag={tags}
          onClick={onClick}
        />
      ))}
    </List>
  );
};
