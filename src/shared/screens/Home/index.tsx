import { useRecoilValue } from "recoil";
import { SideBar } from "../../../context/sidebar";
import { THEME } from "../../../styles/theme";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import SideBarComponent from "../../organisms/SideBar";
import * as S from "./styled";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";

export default function Home() {
  const isOpenedSideBar = useRecoilValue(SideBar);

  return (
    <>
      <Header />
      {isOpenedSideBar && <SideBarComponent />}
      <S.Container>
        <S.WrapperTexts>
          <S.MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Title isContact={false} color={THEME.TITLE_PURPLE}>
              Sobre nós
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
              Somos uma empresa brasileira que atua no mercado nacional e internacional como especialista em vendas nas
              principais plataformas de comércio eletrônico, importação, exportação e redirecionamento de produtos.
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
              No mercado nacional trabalhamos com itens de diversos seguimentos e no mercado internacional nos
              destacamos com envios de peças para tratores sendo eles de linha amarela, agrícola ou demais modelos.
              Desde a sua fundação, a empresa tem se dedicado a oferecer soluções eficientes e confiáveis para atender
              às necessidades de seus clientes de maneira, rápida, eficaz, humanizada e personalizada.
            </Text>
          </S.MotionDiv>
          <Text color={THEME.TEXT_BLACK}>
            A Martin Comercial nasceu do empreendedorismo de uma profissional que possui mais de 16 anos de experiência
            em comércio internacional e que ao longo desses anos se especializou na área e identificou como oportunidade
            de negócio atender aos seus clientes com uma visão estratégica e precisa, onde desenvolveu e investiu em
            recursos tecnológicos e logísticos para proporcionar um serviço de excelência.
          </Text>
          <Text color={THEME.TEXT_BLACK}>
            A Martin Comercial se orgulha de oferecer soluções personalizadas levando em consideração suas necessidades
            específicas. Com uma equipe altamente qualificada e experiente, a empresa busca compreender as demandas dos
            clientes e fornecer produtos de alta qualidade, adequados às suas especificações técnicas e requisitos
            operacionais.
          </Text>
        </S.WrapperTexts>
      </S.Container>
      <Footer backgroundColor={THEME.PURPLE} color={THEME.WHITE} />
    </>
  );
}
