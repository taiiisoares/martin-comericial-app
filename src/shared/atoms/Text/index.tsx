import { THEME } from "../../../styles/theme";
import * as S from "./styled";

export default function Text({ color, children }: { color: THEME; children: any }) {
  return <S.Text color={color}>{children}</S.Text>;
}
