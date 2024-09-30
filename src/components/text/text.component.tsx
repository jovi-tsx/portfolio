import * as S from './text.styles'

export type TextProps = {
  color?: 'primary' | 'secondary' | 'red' | 'gray' | 'lightGray' | 'darkGray'
  size?: 'xsmall' | 'small' | 'medium'
  style?: React.CSSProperties
} & React.HTMLAttributes<HTMLParagraphElement>

const Text: React.FC<TextProps> = ({
  children,
  color,
  size,
  style,
  ...otherProps
}) => (
  <S.Text color={color} size={size} style={style} {...otherProps}>
    {children}
  </S.Text>
)

export default Text
