import { useRecoilValue, useSetRecoilState } from "recoil";
import { TranslateLanguage } from "../../../context/translate";
import { SideBar } from "../../../context/sidebar";
import NavItem from "../../atoms/NavItem";
import { THEME } from "../../../styles/theme";
import * as S from "./styled";

export default function SideBarComponent() {
  const isOpenedSideBar = useRecoilValue(SideBar);
  const setOpenedSideBar = useSetRecoilState(SideBar);
  const language = useRecoilValue(TranslateLanguage)
  let items: string[]

  switch(language) {
    case 'Brazil':
      items = ['Início', 'Serviços', 'Contatos']
      break;

    case 'Usa':
      items = ['Home', 'Services', 'Contact']
      break;
    
    case 'Spain':
      items = ['Inicio', 'Servicios', 'Contacto']
      break;
  }

  return (
    <S.NavList isOpened={isOpenedSideBar}>
        <S.NavItems onClick={() => setOpenedSideBar(false)}>
          <NavItem color={THEME.WHITE} link="/">
            {items[0]}
          </NavItem>
        </S.NavItems>
        <S.NavItems onClick={() => setOpenedSideBar(false)}>
          <NavItem color={THEME.WHITE} link="/servicos">
            {items[1]}
          </NavItem>
        </S.NavItems>
        <S.NavItems onClick={() => setOpenedSideBar(false)}>
          <NavItem color={THEME.WHITE} link="/contatos">
            {items[2]}
          </NavItem>
        </S.NavItems>
    </S.NavList>
  );
}
