import styled, { css } from "styled-components";
import { THEME } from "../../../styles/theme";

export const Title = styled.h1<{ color: THEME; isContact?: boolean }>`
  color: ${(props) => props.color};
  font-size: 4rem;
  font-weight: 700;

  @media (min-width: 370px) {
    font-size: 5rem;
  }

  /* ${(props) =>
    props.isContact &&
    css`
      @media (min-width: 700px) {
        color: ${THEME.WHITE};
      }
    `} */
`;
