import { motion } from "framer-motion";
import styled from "styled-components";
import { THEME } from "../../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: max-content;
  background-image: url("/Contacts/background-contacts.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15rem 2.5rem 7rem;
  gap: 8rem;

  @media (min-width: 700px) {
    padding: 20rem 2.5rem 10rem;
  }

  @media (min-width: 1366px) {
    padding: 15rem 2.5rem 10rem;
    height: 100vh;
  }
`;

export const WrapperTextIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
`;

export const WrapperIcons = styled.div`
  display: flex;
  gap: 6rem;
`;

export const Icon = styled.div<{ icon: string; hover: string }>`
  background-image: ${(props) => `url(${props.icon})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 8.5rem;
  height: 8.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-image: ${(props) => `url(/Contacts/${props.hover})`};
  }
`;

export const MotionDiv = styled(motion.div)``;

export const TextContact = styled.h2`
  color: ${THEME.WHITE};
  font-size: 5rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: 604px) {
    font-size: 4rem;
  }

  @media (max-width: 370px) {
    font-size: 3.5rem;
  }
`;

export const wrapper = styled.div`
  height: max-content;
`