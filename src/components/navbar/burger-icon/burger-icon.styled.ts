import styled from "styled-components";

export const StyledBurgerIcon = styled.div`
  position: relative;
  width: 3.5rem;
  height: 2rem;
  cursor: pointer;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.1rem;
    background-color: #2e2e2e;
    transition: background-color 0.2s ease-in-out;
  }

  &::after {
    top: 0;
  }

  &::before {
    bottom: 0;
  }

  &:hover::after,
  &:hover::before {
    background-color: #c54847;
  }
`;
