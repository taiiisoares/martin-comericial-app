import { useRecoilValue, useSetRecoilState } from "recoil";
import { SideBar } from "../../../context/sidebar";
import { THEME } from "../../../styles/theme";
import * as S from "./styled";
import NavItem from "../../atoms/NavItem";

export default function SideBarComponent() {
  const isOpenedSideBar = useRecoilValue(SideBar);
  const setOpenedSideBar = useSetRecoilState(SideBar);
  const items = ["Início", "Serviços", "Contatos"];

  return (
    <S.NavList isOpened={isOpenedSideBar}>
      {items.map((item, index) => {
        let hrefs = item.toLowerCase();
        hrefs = hrefs === "início" ? "" : hrefs;
        return (
          <S.NavItems key={index} onClick={() => setOpenedSideBar(false)}>
            <NavItem color={THEME.WHITE} link={`/${hrefs}`}>
              {item}
            </NavItem>
          </S.NavItems>
        );
      })}
    </S.NavList>
  );
}
