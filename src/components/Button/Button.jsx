import { LoadMore } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return <LoadMore onClick={onLoadMore}>Load more</LoadMore>;
};
