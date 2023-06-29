import { useRecoilValue } from 'recoil';
import { SideBar } from '../../../context/sidebar';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import SideBarComponent from '../../organisms/SideBar';
import { THEME } from '../../../styles/theme';
import * as S from './styled'
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import Translator from '../../organisms/Translator';
import ButtonRedirect from '../../atoms/ButtonRedirect';

interface ServicesProps {
  title: string;
  description: string;
  textsBox: string[];
  buttonDescription: string;
}

export default function ServicesTemplate({ data }: { data: ServicesProps }) {
  const isOpenedSideBar = useRecoilValue(SideBar);
  return (
    <>
      <Header />
      <Translator />
      {isOpenedSideBar && <SideBarComponent />}
      <S.Container>
        <S.WrapperItemsInView>
          <S.MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Title color={THEME.TITLE_PURPLE}>{data.title}</Title>
          </S.MotionDiv>
          <S.MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Text color={THEME.TEXT_BLACK}>
              {data.description}
            </Text>
            <S.MotionDiv whileHover={{ scale: 1.3 }} whileFocus={{ scale: .9 }}>
              <ButtonRedirect link="/contatos">{data.buttonDescription}</ButtonRedirect>
            </S.MotionDiv>
          </S.MotionDiv>
          <S.Box>
            <S.MotionDiv
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <S.TitleBox>{data.textsBox[0]}</S.TitleBox>
              <S.TextBox>{data.textsBox[1]}</S.TextBox>
            </S.MotionDiv>
            <S.WrapperImagesBox>
              <S.MotionDiv
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <S.Image src="/Services/trator1.png" alt="Máquina 1" width={23} height={17.2} />
              </S.MotionDiv>
              <S.MotionDiv
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.8,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <S.Image src="/Services/trator2.png" alt="Máquina 2" width={32} height={17.9} />
              </S.MotionDiv>
              <S.MotionDiv
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 2.1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <S.Image src="/Services/trator3.png" alt="Máquina 3" width={23} height={14.4} />
              </S.MotionDiv>
            </S.WrapperImagesBox>
          </S.Box>
        </S.WrapperItemsInView>
      </S.Container>
      <Footer backgroundColor={THEME.PURPLE} color={THEME.WHITE} />
    </>
  );
}