import React from 'react'
import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type InputProps = {
  label: string
  initialValue?: string
  error: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({
  label,
  initialValue = '',
  error = '',
  ...props
}: InputProps) => {
  const [value, setValue] = React.useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
  }

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.InputWrapper error={error}>
        <S.Input value={value} onChange={onChange} {...props} />
        {error && <S.Clear src="./img/x.png" />}
      </S.InputWrapper>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default Input
