import styled from 'styled-components';

export const LoadMore = styled.button`
  width: 150px;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  margin: 0 auto;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
