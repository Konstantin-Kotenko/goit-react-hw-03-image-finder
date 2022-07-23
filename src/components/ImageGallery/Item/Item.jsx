import { Modal } from 'components/Modal';
import { GalleryItem, Images } from './Item.styled';

export const Item = ({ id, src, tag, onClick, largeImageURL, isShowModal }) => {
  return (
    <GalleryItem id={id} key={id}>
      <Images src={src} alt={tag} onClick={onClick} />
      {isShowModal && (
        <Modal>
          <img id={id} src={largeImageURL} alt={tag} onClick={onClick} />
        </Modal>
      )}
    </GalleryItem>
  );
};
