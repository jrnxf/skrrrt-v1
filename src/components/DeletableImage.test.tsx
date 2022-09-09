import { DeletableImage } from '@/components'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'

const setup = () => {
  const handleDelete = jest.fn()
  const utils = render(
    <DeletableImage src="https://www.example.com/example.jpg" handleDelete={handleDelete} />,
  )
  return {
    handleDelete,
    ...utils,
  }
}

describe('Alert', () => {
  it('should handle deleted image', async () => {
    const { handleDelete, getByTestId } = setup()

    fireEvent.click(getByTestId('delete-image'))
    expect(handleDelete).toHaveBeenCalledTimes(1)
  })
})
