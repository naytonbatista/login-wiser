import { render, screen } from '@testing-library/react'

import Input from '.'

describe('<Input />', () => {
  it('Deve renderizar um textbox', () => {
    render(<Input label="Senha" setValue={() => ''} error="" name="senha" />)

    expect(screen.getByText(/senha/i)).toBeInTheDocument()
  })

  it('Deve validar o textbox se conter erro', () => {
    render(
      <Input
        label="Senha"
        setValue={() => ''}
        error="Campo obrigatório"
        name="senha"
      />
    )

    expect(screen.getByText(/campo obrigatório/i)).toBeInTheDocument()
  })
})
