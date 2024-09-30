import * as S from './heading.styles'

export type HeadingProps = {
  color?: 'primary' | 'secondary' | 'red'
  size?: 'large' | 'xlarge' | 'xxlarge' | 'huge'
  weight?: 'medium' | 'semibold' | 'bold'
  level?: number
  label?: string
} & React.HTMLAttributes<HTMLHeadingElement>

const Heading: React.FC<HeadingProps> = ({
  children,
  color,
  size,
  weight,
  label,
  level = 2,
}) => {
  const CustomHeading = `h${level}` as keyof JSX.IntrinsicElements
  return (
    <S.Heading color={color} size={size} weight={weight}>
      {label && <S.HeadingLabel>{label}</S.HeadingLabel>}
      <CustomHeading>{children}</CustomHeading>
    </S.Heading>
  )
}

export default Heading
