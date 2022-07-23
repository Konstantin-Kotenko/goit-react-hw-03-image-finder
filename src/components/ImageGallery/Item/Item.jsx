import { GalleryItem, Images } from './Item.styled';

export const Item = ({ id, src, tag }) => {
  return (
    <GalleryItem id={id} key={id}>
      <Images src={src} alt={tag} />
    </GalleryItem>
  );
};
