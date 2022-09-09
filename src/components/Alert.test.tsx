import { fireEvent, getByTestId, render } from '@testing-library/react'
import React from 'react'
import { Alert } from '.'

const setup = () => {
  const handleClose = jest.fn()
  const utils = render(
    <Alert title="caution" handleClose={handleClose} color="purple">
      <p>danger danger danger</p>
    </Alert>,
  )
  return {
    handleClose,
    ...utils,
  }
}

describe('Alert', () => {
  it('should render Alert page correctly', async () => {
    const { getByText, handleClose, getByTestId } = setup()

    expect(getByText(/caution/i)).toBeInTheDocument()
    expect(getByText(/danger danger danger/i)).toBeInTheDocument()

    fireEvent.click(getByTestId('closeModal'))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})
