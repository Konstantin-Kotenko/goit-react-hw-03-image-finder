import { Overlay, ModalWrapper } from './Modal.styled';

export const Modal = ({ images }) => {
  return (
    <Overlay>
      <ModalWrapper>
        <img src={images.largeImageURL} alt={images.tags} />
      </ModalWrapper>
    </Overlay>
  );
};
