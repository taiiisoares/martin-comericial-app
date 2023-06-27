import { THEME } from "../../../styles/theme";
import * as S from "./styled";

interface TitleProps {
  isContact: boolean;
  color: THEME;
  children: any;
}

export default function Title({ isContact, color, children }: TitleProps) {
  return (
    <S.Title isContact={isContact} color={color}>
      {children}
    </S.Title>
  );
}
