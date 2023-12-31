import { motion } from "framer-motion";
import styled from "styled-components";
import { THEME } from "../../../styles/theme";

export const Container = styled.div<{ isEnglish: boolean }>`
  width: 100%;
  height: max-content;
  padding: 4.5rem 3.7rem;
  background-color: ${THEME.DEFAULT_BACKGROUND};

  @media (min-width: 700px) {
    background-image: url("/Home/home-background.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 9rem 10rem;
  }

  @media (min-width: 980px) {
    height: 180vh;
  }

  @media (min-width: 1145px) {
    height: 200vh;
    padding: 9rem 15rem;
  }

  @media (min-width: 1366px) {
    height: 215vh;
    padding: 30rem 35rem;
  }
`;

export const WrapperTexts = styled.div<{ isEnglish: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  align-items: center;

  @media (min-width: 980px) {
    gap: 5rem;
  }
`;

export const MotionDiv = styled(motion.div)`
  text-align: center;
`;
