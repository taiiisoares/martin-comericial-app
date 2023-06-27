import { THEME } from "../../../styles/theme";
import * as S from "./styled";

interface HeaderProps {
  link: string;
  color: THEME;
  children: any;
}

export default function NavItem({ link, color, children }: HeaderProps) {
  return (
    <S.MotionDiv whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
      <S.Item color={color} href={link}>
        {children}
      </S.Item>
    </S.MotionDiv>
  );
}
