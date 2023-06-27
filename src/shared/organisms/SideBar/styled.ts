import styled from "styled-components";

export const NavList = styled.ul<{ isOpened: boolean }>`
  width: 100%;
  height: 95vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #000;

  position: fixed;
  top: 5rem;
  right: 0;

  list-style: none;
  opacity: 0.98;
`;

export const NavItems = styled.li`
  letter-spacing: 3px;
`;
