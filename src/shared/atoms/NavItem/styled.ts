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
`;

export const MotionDiv = styled(motion.div)``;
