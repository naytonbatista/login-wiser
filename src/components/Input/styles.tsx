import styled from 'styled-components'

type InputWrapperStyleProps = {
  error: string
}

export const Wrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`

export const InputWrapper = styled.div<InputWrapperStyleProps>`
  border: solid 1px
    ${({ error }) => (error.length <= 0 ? '#989fdb' : '#FF377F')};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  background: #faf5ff;
`

export const Label = styled.label`
  display: block;
  font-size: 0.625rem;
  color: #383e71;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
`

export const Input = styled.input`
  background: #faf5ff;
  padding: 1rem;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  color: #989fdb;
`

export const Clear = styled.img`
  margin-right: 1rem;
  cursor: pointer;
`

export const Error = styled.label`
  font-size: 10px;
  color: #ff377f;
  font-weight: 400;
  margin-left: 1rem;
`
