import { motion } from "framer-motion";
import styled from "styled-components";
import { THEME } from "../../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 4.5rem 3.7rem;
  background-color: ${THEME.DEFAULT_BACKGROUND};
`;

export const WrapperTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  align-items: center;
`;

export const MotionDiv = styled(motion.div)``;
