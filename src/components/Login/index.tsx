import Button from '../Button'
import Input from '../Input'
import useForm from '../../hooks/useForm'
import * as S from './styles'

import { connect } from 'react-redux'
import { ApplicationState } from '../../store'

import * as UserActions from '../../store/ducks/user/actions'

import { bindActionCreators, Dispatch } from 'redux'
import React from 'react'
import { User, UserState } from '../../store/ducks/user/types'

type StateProps = {
  user: UserState
}

type DispatchProps = {
  loginRequest(user: User): void
}

type Props = StateProps & DispatchProps

const Login = ({ loginRequest, user }: Props) => {
  const email = useForm('email')
  const password = useForm('password')

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()

    await loginRequest({ userName: email.value, password: password.value })
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>
          Olá, seja
          <br />
          bem-vindo!
        </S.Title>
        <S.Sub>Para acessar a plataforma, faça seu login.</S.Sub>
        <S.Form onSubmit={handleSubmit}>
          <S.FieldsContainer>
            <Input type="text" label="E-MAIL" name="email" {...email} />
            <Input
              type="password"
              name="password"
              label="SENHA"
              {...password}
            />
          </S.FieldsContainer>
          {user.loading ? (
            <Button disabled value="ENTRANDO..." />
          ) : (
            <Button value="ENTRAR" />
          )}
          <S.LostPass>
            Esqueceu seu login ou senha? Clique <a>aqui</a>
          </S.LostPass>
        </S.Form>
      </S.Content>
    </S.Wrapper>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(UserActions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login)
