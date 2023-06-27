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
`;
