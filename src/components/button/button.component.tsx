import { BaseButton, OutlinedButton } from './button.styles'

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  outlined = 'outlined',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.outlined]: OutlinedButton,
  }[buttonType])

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES
  color?: 'primary' | 'secondary' | 'red'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  color,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType)
  return (
    <CustomButton color={color} {...otherProps}>
      {children}
    </CustomButton>
  )
}

export default Button
