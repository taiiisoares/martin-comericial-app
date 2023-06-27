import styled from "styled-components";

export const Container = styled.div<{ backgroundColor: string; color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: 1rem;

  @media (min-width: 500px) {
    font-size: 1.5rem;
  }

  @media (min-width: 750px) {
    height: 8rem;
    font-size: 2rem;
  }

  @media (min-width: 1060px) {
    height: 10rem;
  }
`;
