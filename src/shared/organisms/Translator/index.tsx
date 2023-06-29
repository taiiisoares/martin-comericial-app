import { useSetRecoilState } from 'recoil';
import { TranslateLanguage } from '../../../context/translate';
import * as S from './styled'

export default function Translator() {
  const setLanguage = useSetRecoilState(TranslateLanguage);

  return (
    <S.Container>
      <S.MontionDiv onClick={() => setLanguage("Brazil")} whileHover={{ scale: 1.3 }} whileFocus={{ scale: .9 }}>
        <S.Icons src="/brazil.png" width={3.2} height={3.2} />
      </S.MontionDiv>
      <S.MontionDiv onClick={() => setLanguage("Usa")} whileHover={{ scale: 1.3 }} whileFocus={{ scale: .9 }}>
        <S.Icons src="/usa.png" width={3.2} height={3.2} />
      </S.MontionDiv>
      <S.MontionDiv onClick={() => setLanguage("Spain")} whileHover={{ scale: 1.3 }} whileFocus={{ scale: .9 }}>
        <S.Icons src="/spain.png" width={4.2} height={4.2} />
      </S.MontionDiv>
    </S.Container>
  );
}