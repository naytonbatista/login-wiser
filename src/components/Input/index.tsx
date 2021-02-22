import React from 'react'
import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type InputProps = {
  label: string
  setValue(value: string): void
  error: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ label, setValue, error = '', ...props }: InputProps) => {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.InputWrapper error={error}>
        <S.Input {...props} />
        {error && <S.Clear src="./img/x.png" onClick={() => setValue('')} />}
      </S.InputWrapper>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default Input
