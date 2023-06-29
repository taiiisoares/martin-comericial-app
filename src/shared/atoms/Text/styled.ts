import styled from "styled-components";
import { THEME } from "../../../styles/theme";

export const Text = styled.p<{ color: THEME, weight?: number }>`
  color: ${(props) => props.color};
  font-size: 2.5rem;
  font-weight: ${props => props.weight};
  text-align: justify;
`;
