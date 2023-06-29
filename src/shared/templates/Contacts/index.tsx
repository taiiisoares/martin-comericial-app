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
import Translator from "../../organisms/Translator";

function reducer(state: string, action: { icon: string }) {
  switch (action.icon) {
    case "email":
      return "mailto:martincomercial@martincomercial.com.br";

    case "whatsapp":
      return "https://api.whatsapp.com/send?phone=11943388544";

    default:
      return "";
  }
}

const initialState = "";

interface ContactsProps {
  title: string;
  description: string;
}

export default function ContactsTemplate({ data }: { data: ContactsProps }) {
  const contactIcons = ["/whatsapp.svg", "/email.svg"];
  const [state, dispatch] = useReducer(reducer, initialState);
  const isOpenedSideBar = useRecoilValue(SideBar);

  return (
    <>
      <Header />
      <Translator />
      {isOpenedSideBar && <SideBarComponent />}
      <S.Container>
        <S.MotionDiv
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Title color={THEME.WHITE}>
            {data.title}
          </Title>
        </S.MotionDiv>
        <S.WrapperTextIcons>
          <S.MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <S.TextContact>
              {data.description}:
            </S.TextContact>
          </S.MotionDiv>
          <S.MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
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
