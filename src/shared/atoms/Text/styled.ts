import styled from "styled-components";
import { THEME } from "../../../styles/theme";

export const Text = styled.p<{ color: THEME }>`
  color: ${(props) => props.color};
  font-size: 2.5rem;
  text-align: justify;
`;
