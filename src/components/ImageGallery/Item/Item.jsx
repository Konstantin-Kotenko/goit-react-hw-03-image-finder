import { GalleryItem, Images } from './Item.styled';

export const Item = ({ id, src, tag, onToggleModal }) => {
  return (
    <GalleryItem id={id} key={id}>
      <Images src={src} alt={tag} onClick={onToggleModal} />
    </GalleryItem>
  );
};
