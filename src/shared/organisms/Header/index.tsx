import * as S from "./styled";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { SideBar } from "../../../context/sidebar";

export default function Header() {
  const setOpenedSideBar = useSetRecoilState(SideBar);
  const isOpenedSideBar = useRecoilValue(SideBar);
  const items = ["Início", "Serviços", "Contatos"];

  return (
    <S.Container>
      <S.Logo src="/martin-comercial-logo.svg" alt="Logo da Martin Comercial" />
      <S.Menu visible isOpened={isOpenedSideBar} onClick={() => setOpenedSideBar((old) => !old)}>
        <div></div>
        <div></div>
        <div></div>
      </S.Menu>

      {/* <S.WrapperNavItems>
        {items.map((item, index) => {
          const hrefs = item.toLowerCase();
          return (
            <NavItem key={index} link={hrefs}>
              {item}
            </NavItem>
          );
        })}
      </S.WrapperNavItems> */}
    </S.Container>
  );
}
