import { THEME } from "../../../styles/theme";
import * as S from "./styled";

export default function Footer({ backgroundColor, color }: { backgroundColor: THEME; color: THEME }) {
  return (
    <S.Container backgroundColor={backgroundColor} color={color}>
      © 2023 Martin Comercial Todos os direitos reservados
    </S.Container>
  );
}
