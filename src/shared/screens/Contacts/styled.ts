import { motion } from "framer-motion";
import styled from "styled-components";

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
  padding: 10rem 2.5rem 5rem;
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
  padding: 0 10rem;

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;

  @media (min-width: 700px) {
    flex-direction: row;
  }
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
