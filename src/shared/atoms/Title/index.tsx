import { THEME } from "../../../styles/theme";
import * as S from "./styled";

interface TitleProps {
  color: THEME;
  children: any;
}

export default function Title({ color, children }: TitleProps) {
  return <S.Title color={color}>{children}</S.Title>;
}
