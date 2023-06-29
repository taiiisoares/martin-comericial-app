import { useRecoilValue } from "recoil";
import { TranslateLanguage } from "../../../context/translate";
import ContactsTemplate from "../../templates/Contacts";

export default function Contacts() {
  const language = useRecoilValue(TranslateLanguage);
  let title: string;
  let description: string;

  switch(language) {
    case 'Brazil':
      title = "Contato";
      description = "Fale conosco";
      break;

    case 'Usa':
      title = "Contact";
      description = "Contact us";
      break;
    
    case 'Spain':
      title = "Contacto";
      description = "Hable con nosotros";
      break;
  }

  return <ContactsTemplate data={{ title, description }}  />
}