import { fireEvent, queryAllByTestId, render } from '@testing-library/react'
import React from 'react'
import { ChipsSection } from '@/components'

describe('ChipsSection', () => {
  it('should render ChipsSection page correctly', async () => {
    const { getByText, queryAllByTestId } = render(
      <ChipsSection title="chips" chips={['foo', 'bar', 'baz']} />,
    )

    expect(getByText(/chips/i)).toBeInTheDocument()

    expect(queryAllByTestId('chip').length).toBe(3)
    expect(getByText(/foo/i)).toBeInTheDocument()
    expect(getByText(/bar/i)).toBeInTheDocument()
    expect(getByText(/baz/i)).toBeInTheDocument()
  })
})
