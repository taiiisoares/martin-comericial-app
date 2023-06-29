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
      description = "Somos especialistas em peças para todos os tipos de tratores, (Vial, agrícola, esteira, etc). Para solicitar uma cotação clique no botão de cotação que um de nossos especialistas irá prontamente atendê-lo.";
      textsBox = ['Algumas máquinas que trabalhamos', 'Trabalhamos apenas com as peças das máquinas a seguir']
      buttonDescription = "Faça sua Cotação"
      break;

    case 'Usa':
      title = "Services";
      description = "We are specialists in tractor spare parts. To request a quote, click on the quote button and one of our specialists will promptly assist you.";
      textsBox = ['Some machines we work on', 'We only work with parts of the following machines']
      buttonDescription = "Get your Quote"
      break;
    
    case 'Spain':
      title = "Servicios";
      description = "Somos especialistas en repuestos para todo tipo de tractores. Para solicitar una cotización, haga un clic en el botón cotizar y uno de nuestros especialistas lo atenderá a la brevedad.";
      textsBox = ['Algunas máquinas en las que trabajamos', 'Solo trabajamos con partes de las siguientes máquinas']
      buttonDescription = 'Obtén tu Cotización'
      break;
  }

  return <ServiceTemplate data={{ title, description, textsBox, buttonDescription }} />
}