import React, { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  value: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ value, ...props }: ButtonProps) => {
  return (
    <S.Button {...props} type="button">
      {value}
    </S.Button>
  )
}

export default Button
