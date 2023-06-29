import { THEME } from "../../../styles/theme";
import * as S from "./styled";

export default function Text({ color, weight, children }: { color: THEME; weight?: number;children: any }) {
  return <S.Text weight={weight} color={color}>{children}</S.Text>;
}
