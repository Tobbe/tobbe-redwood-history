import { render } from '@redwoodjs/testing'

import BetaPage from './BetaPage'

describe('BetaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BetaPage />)
    }).not.toThrow()
  })
})
