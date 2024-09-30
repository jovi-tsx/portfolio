import * as S from './container.styles'

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...otherProps
}) => <S.Container {...otherProps}>{children}</S.Container>

export default Container
