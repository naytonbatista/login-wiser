import { render, screen } from '@testing-library/react'
import store from '../../store'

import Login from '.'
import { Provider } from 'react-redux'

describe('<Login />', () => {
  it('Deve renderizar o form', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    )

    expect(screen.getByText(/e-mail/i)).toBeInTheDocument()

    expect(screen.getAllByText(/senha/i)).toHaveLength(2)

    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
  })
})
