import { useRecoilValue, useSetRecoilState } from "recoil";
import { SideBar } from "../../../context/sidebar";
import { THEME } from "../../../styles/theme";
import NavItem from "../../atoms/NavItem";
import * as S from "./styled";

export default function Header() {
  const setOpenedSideBar = useSetRecoilState(SideBar);
  const isOpenedSideBar = useRecoilValue(SideBar);
  const items = ["Início", "Serviços", "Contatos"];

  return (
    <S.Container>
      <S.Logo src="/martin-comercial-logo.svg" alt="Logo da Martin Comercial" />
      <S.MenuSideBar>
        <S.Menu visible isOpened={isOpenedSideBar} onClick={() => setOpenedSideBar((old) => !old)}>
          <div></div>
          <div></div>
          <div></div>
        </S.Menu>
      </S.MenuSideBar>
      <S.ContainerNavBar>
        <S.WrapperNavItems>
          {items.map((item, index) => {
            let hrefs = item.toLowerCase();
            hrefs = hrefs === "início" ? "" : hrefs;
            return (
              <NavItem color={THEME.PURPLE} key={index} link={hrefs}>
                {item}
              </NavItem>
            );
          })}
        </S.WrapperNavItems>
      </S.ContainerNavBar>
    </S.Container>
  );
}
