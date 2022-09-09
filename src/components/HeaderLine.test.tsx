import React from 'react'
import { render } from '@testing-library/react'
import { HeaderLine } from './HeaderLine'

const setup = () => {
  const utils = render(<HeaderLine text="hello, world" />)
  return {
    ...utils,
  }
}

describe('HeaderLine', () => {
  it('should render HeaderLine correctly', async () => {
    const { getByText } = setup()
    expect(getByText(/hello, world/i)).toBeInTheDocument()
  })
})
