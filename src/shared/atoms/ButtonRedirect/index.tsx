import * as S from './styled'

export default function ButtonRedirect({ link, children }: { link: string, children: any }) {
  return <S.Button href={link}>{children}</S.Button>
}