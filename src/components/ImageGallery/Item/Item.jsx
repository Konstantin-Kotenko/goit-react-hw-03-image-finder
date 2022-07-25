import { GalleryItem, Images } from './Item.styled';

export const Item = ({ id, src, tag, onClick, largeImageURL }) => {
  return (
    <GalleryItem key={id} id={id}>
      <Images src={src} alt={tag} onClick={onClick} data-set={largeImageURL} />
    </GalleryItem>
  );
};
