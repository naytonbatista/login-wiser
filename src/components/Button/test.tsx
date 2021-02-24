import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('Deve renderizar um botão', () => {
    render(<Button value="Entrar" />)

    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
  })
})
