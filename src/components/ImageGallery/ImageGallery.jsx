import { Item } from './Item/Item';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images, onClick, isShowModal }) => {
  return (
    <List>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <Item
          key={id}
          largeImageURL={largeImageURL}
          src={webformatURL}
          tag={tags}
          onClick={onClick}
          isShowModal={isShowModal}
        />
      ))}
    </List>
  );
};
