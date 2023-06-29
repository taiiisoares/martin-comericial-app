import { useRecoilValue } from "recoil";
import { SideBar } from "../../../context/sidebar";
import { THEME } from "../../../styles/theme";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import SideBarComponent from "../../organisms/SideBar";
import * as S from "./styled";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import Translator from "../../organisms/Translator";

interface HomeProps {
  title: string;
  texts: string[];
  english: boolean;
}

export default function Home({ data }: { data: HomeProps }) {
  const isOpenedSideBar = useRecoilValue(SideBar);

  return (
    <>
      <Header />
      <Translator />
      {isOpenedSideBar && <SideBarComponent />}
      <S.Container isEnglish={data.english}>
        <S.WrapperTexts isEnglish={data.english}>
          <S.MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Title color={THEME.TITLE_PURPLE}>
              {data.title}
            </Title>
          </S.MotionDiv>
          <S.MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Text color={THEME.TEXT_BLACK}>
              {data.texts[0]}
            </Text>
          </S.MotionDiv>
          <S.MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Text color={THEME.TEXT_BLACK}>
              {data.texts[1]}
            </Text>
          </S.MotionDiv>
          <Text color={THEME.TEXT_BLACK}>
            {data.texts[2]}
          </Text>
          <Text color={THEME.TEXT_BLACK}>
            {data.texts[3]}
          </Text>
        </S.WrapperTexts>
      </S.Container>
      <Footer backgroundColor={THEME.PURPLE} color={THEME.WHITE} />
    </>
  );
}
