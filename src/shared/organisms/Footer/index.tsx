import { useRecoilValue } from "recoil";
import { TranslateLanguage } from "../../../context/translate";
import { THEME } from "../../../styles/theme";
import * as S from "./styled";

export default function Footer({ backgroundColor, color }: { backgroundColor: THEME; color: THEME }) {
  const language = useRecoilValue(TranslateLanguage);
  let description: string;
  
  switch(language) {
    case 'Brazil':
      description = "© 2023 Martin Comercial Todos os direitos reservados";
      break;
    
    case 'Usa':
      description = "© 2023 Martin Comercial. All rights reserved.";
      break;
    
    case 'Spain':
      description = "© 2023 Martin Comercial. Todos los derechos reservados."
      break;
  }

  return (
    <S.Container backgroundColor={backgroundColor} color={color}>
      {description}
    </S.Container>
  );
}
