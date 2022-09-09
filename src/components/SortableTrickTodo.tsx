import React, { FC } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { EyeIcon, EyeOffIcon, XIcon } from '@heroicons/react/outline'
import { classNames } from '@/utils'

type Props = {
  trick: any
  handleTodoPrivatized: (id: string) => void
  handleTodoDeleted: (id: string) => void
}

export const SortableTrickTodo: FC<Props> = ({
  trick,
  handleTodoDeleted,
  handleTodoPrivatized,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: trick.id,
  })

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : undefined,
    transition,
  }

  return (
    <li className="py-2 text-lg font-medium select-none" ref={setNodeRef} style={{ ...style }}>
      <div
        className={classNames(
          'flex items-center bg-nord6 dark:bg-nord0 rounded px-3 py-2 shadow-sm',
          trick.private && 'opacity-60',
        )}
      >
        <div className="flex-grow rounded cursor-grab" {...attributes} {...listeners} tabIndex={-1}>
          {trick.value}
        </div>
        <div className="flex cursor-pointer">
          <div className="mr-2">
            {trick.private ? (
              <EyeOffIcon className="w-5 h-5" onClick={() => handleTodoPrivatized(trick.id)} />
            ) : (
              <EyeIcon className="w-5 h-5" onClick={() => handleTodoPrivatized(trick.id)} />
            )}
          </div>
          <XIcon
            className="w-5 h-5 hover:text-nord11 stroke-3"
            onClick={() => handleTodoDeleted(trick.id)}
          />
        </div>
      </div>
    </li>
  )
}
