import { GalleryItem, Images } from './Item.styled';

export const Item = ({ onData }) => {
  console.log(onData);
  return onData.hits.map(hit => {
    <GalleryItem id={hit.id}>
      <Images src={hit.webformatURL} alt="" />
    </GalleryItem>;
  });
};
