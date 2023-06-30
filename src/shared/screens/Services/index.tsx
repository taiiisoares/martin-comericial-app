import { useRecoilValue } from 'recoil';
import ServiceTemplate from '../../templates/Services'
import { TranslateLanguage } from '../../../context/translate';

export default function Service() {
  const language = useRecoilValue(TranslateLanguage);
  let title: string;
  let description: string;
  let textsBox: string[];
  let buttonDescription: string;

  switch(language) {
    case 'Brazil':
      title = "Serviços";
      description = "Somos especialistas em peças de reposição para todos os tipos de tratores. Para solicitar um orçamento, clique no botão orçamento e um de nossos especialistas irá atendê-lo o mais breve possível.";
      textsBox = ['Algumas máquinas que trabalhamos', 'Trabalhamos apenas com as peças das máquinas a seguir']
      buttonDescription = "Orçamento"
      break;

    case 'Usa':
      title = "Services";
      description = "We are specialists in tractor spare parts. To request a quote, click on the quote button and one of our specialists will promptly assist you.";
      textsBox = ['Some machines we work on', 'We only work with parts of the following machines']
      buttonDescription = "Budget"
      break;
    
    case 'Spain':
      title = "Servicios";
      description = "Somos especialistas en repuestos para todo tipo de tractores. Para solicitar una cotización, haga un clic en el botón cotizar y uno de nuestros especialistas lo atenderá a la brevedad.";
      textsBox = ['Algunas máquinas en las que trabajamos', 'Solo trabajamos con partes de las siguientes máquinas']
      buttonDescription = 'Presupuesto'
      break;
  }

  return <ServiceTemplate data={{ title, description, textsBox, buttonDescription }} />
}