import { render, screen } from '@testing-library/react'

import Login from '.'

describe('<Login />', () => {
  it('should render the paragraph', () => {
    render(<Login />)

    expect(screen.getByRole('paragraph', { name: /olá/i })).toBeInTheDocument()
  })
})
