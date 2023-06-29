import { useRecoilValue, useSetRecoilState } from "recoil";
import { SideBar } from "../../../context/sidebar";
import { THEME } from "../../../styles/theme";
import NavItem from "../../atoms/NavItem";
import * as S from "./styled";
import { TranslateLanguage } from "../../../context/translate";

export default function Header() {
  const setOpenedSideBar = useSetRecoilState(SideBar);
  const isOpenedSideBar = useRecoilValue(SideBar);
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
          <NavItem color={THEME.PURPLE} link="/">
            {items[0]}
          </NavItem>
          <NavItem color={THEME.PURPLE} link="/servicos">
            {items[1]}
          </NavItem>
          <NavItem color={THEME.PURPLE} link="/contatos">
            {items[2]}
          </NavItem>
        </S.WrapperNavItems>
      </S.ContainerNavBar>
    </S.Container>
  );
}
