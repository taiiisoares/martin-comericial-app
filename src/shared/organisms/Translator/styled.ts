import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 1;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`

export const Icons = styled.img<{ width: number, height: number }>`
  width: ${props => props.width}rem;
  height: ${props => props.height}rem;
`

export const MontionDiv = styled(motion.div)`
  cursor: pointer;
`