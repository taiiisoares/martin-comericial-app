import styled, { css } from "styled-components";
import { THEME } from "../../../styles/theme";

export const Logo = styled.img`
  width: 10.3rem;
  height: 100%;

  @media (min-width: 750px) {
    width: 12rem;
  }
`;

export const Container = styled.header`
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: max-content;
  background-color: ${THEME.DEFAULT_BACKGROUND};
  top: 0;
  left: 0;
  z-index: 100;
  overflow-x: hidden;

  @media (min-width: 750px) {
    height: 8rem;
  }

  @media (min-width: 1060px) {
    height: 10rem;
  }
`;

export const Menu = styled.div<{ isOpened: boolean; visible: boolean }>`
  width: 4.4rem;
  height: max-content;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  position: relative;

  transition: 0.5s;

  :hover {
    opacity: 0.7;
  }

  div {
    height: 0.25rem;
    width: 2.5rem;
    background: ${THEME.PURPLE};
  }
  div {
    transition: all 0.2s ease-in-out;
  }
  ${(props) =>
    props.isOpened &&
    css`
      div:nth-child(2) {
        display: none;
      }

      div:nth-child(1) {
        transform: rotate(-45deg) translateY(0.5rem);
      }
      div:nth-child(3) {
        transform: rotate(45deg) translateY(-0.5rem);
      }
    `}
`;

export const WrapperNavItems = styled.div`
  display: flex;
  gap: 12rem;
  padding: 0 5rem;

  @media (min-width: 900px) {
    gap: 14rem;
  }

  @media (min-width: 1060px) {
    gap: 18rem;
  }

  @media (min-width: 1120px) {
    padding: 0 15rem;
  }

  @media (min-width: 1350px) {
    padding: 0 30rem;
  }
`;

export const MenuSideBar = styled.div`
  display: flex;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const ContainerNavBar = styled.div`
  display: none;

  @media (min-width: 700px) {
    display: flex;
  }
`;
