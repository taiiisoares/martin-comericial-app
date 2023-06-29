import { motion } from "framer-motion";
import styled from "styled-components";
import { THEME } from "../../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: max-content;

  @media (min-width: 885px) {
    background-image: url('/Services/services-background.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 4rem 8rem; 
  }

  @media (min-width: 1066px) {
   padding: 10rem; 
  }

  @media (min-width: 1170px) {
    padding: 13rem;
  }
`;

export const WrapperItemsInView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 4.5rem 4.2rem;

  @media (min-width: 1024px) {
    gap: 5rem;
  }
  
  @media (min-width: 1024px) {
    gap: 8rem;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;
  border-radius: 2rem;
  background-color: ${THEME.DEFAULT_BACKGROUND};
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.50);
  padding: 4.2rem 2rem;
`;

export const WrapperImagesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.1rem;

  @media (min-width: 885px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

export const TitleBox = styled.h2`
  color: ${THEME.TITLE_PURPLE};
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  width: 32rem;

  @media (min-width: 885px) {
    width: 100%;
  }
  
  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

export const TextBox = styled.p`
  color: ${THEME.TEXT_BLACK};
  font-size: 2rem;
  text-align: justify;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const Image = styled.img<{ width: number, height: number }>`
  width: ${props => props.width}rem;
  height: ${props => props.height}rem;
`;

export const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7rem;

  @media (max-width: 885px) {
    gap: 5rem;
  }
`;