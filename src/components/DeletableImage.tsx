import React, { FC } from 'react'
import { Trash } from '@/components'
import Image from 'next/image'

type Props = {
  handleDelete: () => void
  src: string
  [x: string]: any
}
export const DeletableImage: FC<Props> = ({ handleDelete, src, ...rest }) => {
  return (
    <div className="relative">
      <span className="absolute top-0 left-0 px-3 py-2">
        <button
          data-testid="delete-image"
          className={`border-2 border-nord11 text-nord11 rounded-full cursor-pointer focus:ring-nord11 hover:ring-nord11
        transform duration-100 ease-in hover:transition focus:outline-none focus:ring-3 focus:ring-opacity-50 hover:ring-3 hover:ring-opacity-50 lowercase p-0.5`}
          type="button"
          onClick={handleDelete}
        >
          <Trash size={20} />
        </button>
      </span>
      <div>
        <Image src={src} alt="image to delete" {...rest} />
      </div>
    </div>
  )
}
