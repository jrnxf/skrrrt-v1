import React, { FC } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { X } from './svg'

type Props = {
  id: string
  value: string
  handleDelete: (id: string) => void
}

export const SortableChip: FC<Props> = ({ id, value, handleDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: id,
  })

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : undefined,
    transition,
  }

  return (
    <div className="inline-flex mx-1 my-2">
      <div
        className="flex items-center px-3 py-1 font-semibold rounded-full cursor-pointer select-none bg-nord5 dark:bg-nord1 py-3px focus:outline-none whitespace-nowrap"
        ref={setNodeRef}
        style={{ ...style }}
      >
        <div {...attributes} {...listeners} tabIndex={-1} className="cursor-grab">
          {value}
        </div>
        <X
          className="w-3 h-3 ml-1 hover:text-nord11 stroke-3"
          onClick={() => {
            handleDelete(id)
          }}
        />
      </div>
    </div>
  )
}
