import Link from "next/link";
import styled from "styled-components";
import { THEME } from "../../../styles/theme";

export const Button = styled(Link)`
  border-radius: 2rem;
  background-color: ${THEME.PURPLE};
  color: ${THEME.WHITE};
  padding: 2rem 7rem;
  font-size: 2rem;
  font-weight: 700;
  font-family: var(--poppins);
  text-decoration: none;

  @media (max-width: 409px) {
    padding: 2rem 4rem;
  }
`;