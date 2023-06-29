import { useRecoilValue } from 'recoil';
import { TranslateLanguage } from '../../../context/translate';
import HomeTemplate from '../../templates/Home'

export default function Home() {
  const language = useRecoilValue(TranslateLanguage);
  let title: string;
  let texts: string[];
  let english: boolean;

  switch(language) {
    case 'Brazil':
      title = "Sobre nós";
      texts = [
        'Somos uma empresa brasileira que atua no mercado nacional e internacional como especialista em vendas nas principais plataformas de comércio eletrônico, importação, exportação e redirecionamento de produtos. ', 
        'No mercado nacional trabalhamos com itens de diversos seguimentos e no mercado internacional nos destacamos com envios de peças para tratores sendo eles de linha amarela, agrícola ou demais modelos. Desde a sua fundação, a empresa tem se dedicado a oferecer soluções eficientes e confiáveis para atender às necessidades de seus clientes de maneira, rápida, eficaz, humanizada e personalizada.', 
        'A Martin Comercial nasceu do empreendedorismo de uma profissional que possui mais de 16 anos de experiência em comércio internacional e que ao longo desses anos se especializou na área e identificou como oportunidade de negócio atender aos seus clientes com uma visão estratégica e precisa, onde desenvolveu e investiu em recursos tecnológicos e logísticos para proporcionar um serviço de excelência.', 
        'A Martin Comercial se orgulha de oferecer soluções personalizadas levando em consideração suas necessidades específicas. Com uma equipe altamente qualificada e experiente, a empresa busca compreender as demandas dos clientes e fornecer produtos de alta qualidade, adequados às suas especificações técnicas e requisitos operacionais.'
      ];
      break;

    case 'Usa':
      title = "About us";
      texts = [
        'Since its founding, the company has been dedicated to offering efficient solutions and has remained to meet the needs of its customers in a fast, effective, humanized and personalized way.', 
        'Martin Comercial was born from the entrepreneurship of a professional who has more than 16 years of experience in international trade and who over the years has specialized in the area and identified as a business opportunity to serve the customers with a strategic and precise vision. Where it developed and invested in technological and logistical resources to provide an excellent service.', 
        'Martin Comercial is proud to offer customized solutions taking into account your specific needs. With a highly qualified and experienced team, the company seeks to understand customer demands and provide high quality products, suited to their technical specifications and operational requirements.', 
        ''
      ];
      english = true;
      break;
    
    case 'Spain':
      title = "Sobre nosotros";
      texts = [
        'Somos una empresa brasileña que actúa en el mercado nacional e internacional como especialista en ventas en las principales plataformas de comercio electrónico, importación, exportación y redirección de productos.', 
        'En el mercado nacional trabajamos con artículos de diferentes segmentos y en el mercado internacional nos destacamos con envíos de repuestos para tractores para línea amarilla, agrícola u otros modelos. Desde su fundación, la empresa se ha dedicado a ofrecer soluciones eficientes y confiables para satisfacer las necesidades de sus clientes de una manera rápida, eficaz, humana y personalizada.', 
        'Martin Comercial nace del emprendimiento de un profesional con más de 16 años de experiencia en comercio internacional y que a lo largo de los años se ha especializado en el área e identificado como una oportunidad de negocio atender a sus clientes con una visión estratégica y precisa, donde ha desarrollado e invertido en recursos tecnológicos y logísticos para brindar un servicio de excelencia.', 
        'Martin Comercial se orgulla de ofrecer soluciones personalizadas teniendo en cuenta sus necesidades específicas. Con un equipo altamente calificado y experiente, la empresa busca comprender las demandas de los clientes y proporcionar productos de alta calidad, adecuados a sus especificaciones técnicas y requisitos operativos.'
      ];
      break;
  }
  return <HomeTemplate data={{ title, texts, english }} />
}