import styled from "styled-components";
import { THEME } from "../../../styles/theme";

export const Title = styled.h1<{ color: THEME }>`
  color: ${(props) => props.color};
  font-size: 4rem;
  font-weight: 700;

  @media (min-width: 370px) {
    font-size: 5rem;
  }
`;
