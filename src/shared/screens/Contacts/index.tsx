import Link from "next/link";
import { useReducer } from "react";
import { useRecoilValue } from "recoil";
import { SideBar } from "../../../context/sidebar";
import { THEME } from "../../../styles/theme";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import SideBarComponent from "../../organisms/SideBar";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import * as S from "./styled";

function reducer(state: string, action: { icon: string }) {
  switch (action.icon) {
    case "email":
      return "mailto:";

    case "whatsapp":
      return "https://api.whatsapp.com/send?phone=11943388544";

    case "instagram":
      return "https://instagram.com/";

    default:
      return "";
  }
}

const initialState = "";

export default function Contacts() {
  const contactIcons = ["/instagram.svg", "/whatsapp.svg", "/email.svg"];
  const [state, dispatch] = useReducer(reducer, initialState);
  const isOpenedSideBar = useRecoilValue(SideBar);

  return (
    <>
      <Header />
      {isOpenedSideBar && <SideBarComponent />}
      <S.Container>
        <S.MotionDiv>
          <Title isContact color={THEME.TITLE_PURPLE}>
            Contatos
          </Title>
        </S.MotionDiv>
        <S.WrapperTextIcons>
          <S.MotionDiv>
            <Text color={THEME.WHITE}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem reprehenderit omnis ab nisi ut
              est sit quis adipisci quidem id incidunt earum, beatae officiis libero, repudiandae soluta repellendus
              quisquam debitis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, at iusto minus quia
              libero quasi quisquam temporibus unde necessitatibus facere voluptatem? Corporis animi voluptates quod
              eaque ab illum est neque!
            </Text>
          </S.MotionDiv>
          <S.MotionDiv>
            <S.WrapperIcons>
              {contactIcons.map((icon, index) => {
                const hoverIcon = icon.replace(".", "-hover.");
                const nameIcon = icon.slice(1, -4);
                return (
                  <Link href={state} target="_blank" key={index} onClick={() => dispatch({ icon: nameIcon })}>
                    <S.Icon icon={`/Contacts/${icon}`} hover={hoverIcon} />
                  </Link>
                );
              })}
            </S.WrapperIcons>
          </S.MotionDiv>
        </S.WrapperTextIcons>
      </S.Container>
      <Footer backgroundColor={THEME.DEFAULT_BACKGROUND} color={THEME.TEXT_BLACK} />
    </>
  );
}
