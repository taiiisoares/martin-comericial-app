import styled from "styled-components";
import { THEME } from "../../../styles/theme";
import { motion } from "framer-motion";
import Link from "next/link";

export const Item = styled(Link)<{ color: THEME }>`
  font-family: var(--poppins);
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) => props.color};
  cursor: pointer;
  text-decoration: none;

  @media (min-width: 700px) {
    font-size: 2rem;
  }

  @media (min-width: 750px) {
    font-size: 2.3rem;
  }

  @media (min-width: 1060px) {
    font-size: 2.6rem;
  }

  @media (min-width: 1350px) {
    font-size: 3rem;
  }
`;

export const MotionDiv = styled(motion.div)``;
