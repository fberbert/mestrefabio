import { render, screen } from '@testing-library/react'
import Home from './index'

describe('<Home />', () => {
  render(<Home />)
  test('is there a <p> with counter?', () => {
    const pElement = screen.getByText(/Counter/)
    expect(pElement).toBeInTheDocument()
  })
})

