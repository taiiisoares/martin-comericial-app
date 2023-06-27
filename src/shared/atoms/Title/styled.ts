import styled from "styled-components";
import { THEME } from "../../../styles/theme";

export const Title = styled.h1<{ color: THEME }>`
  color: ${(props) => props.color};
  font-size: 5rem;
  font-weight: 700;
`;
