import Button from 'components/Button'
import Input from 'components/Input'
import useForm from 'hooks/useForm'
import * as S from './styles'

import { connect } from 'react-redux'
import { ApplicationState } from 'store'

import * as UserActions from 'store/ducks/user/actions'

import { bindActionCreators, Dispatch } from 'redux'

const Login = () => {
  const email = useForm('email')
  const password = useForm('password')

  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>
          Olá, seja
          <br />
          bem-vindo!
        </S.Title>
        <S.Sub>Para acessar a plataforma, faça seu login.</S.Sub>
        <S.Form>
          <S.FieldsContainer>
            <Input type="text" label="E-MAIL" name="email" {...email} />
            <Input
              type="password"
              name="password"
              label="SENHA"
              {...password}
            />
          </S.FieldsContainer>
          <Button value="ENTRAR" />
          <S.LostPass>
            Esqueceu seu login ou senha? Clique <a>aqui</a>
          </S.LostPass>
        </S.Form>
      </S.Content>
    </S.Wrapper>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  user: state.user.data
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(UserActions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login)
