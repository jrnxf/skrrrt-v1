import { InputButton } from '@/forms'
import {
  closestCenter,
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { EyeIcon, EyeOffIcon, XIcon } from '@heroicons/react/outline'
import React, { useCallback, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { v4 } from 'uuid'
import { SortableTrickTodo } from '@/components'
import { cloneDeep } from 'apollo-utilities'

type TrickTodo = { id: string; value: string; private: boolean }

export const TrickTodosInput = ({ name, initialValues = [] }) => {
  const { register, unregister, setValue, watch } = useFormContext()

  const [items, setItems] = useState<
    {
      id: string
      value: string
      private: boolean
    }[]
  >(initialValues)

  const sensors = useSensors(useSensor(PointerSensor))
  const [trickDragging, setTrickDragging] = useState<TrickTodo>(null)

  const handleFormRegistration = useCallback(() => {
    register(name)
    return () => {
      unregister(name)
    }
  }, [register, unregister, name])
  useEffect(() => {
    setValue(name, items)
  }, [items])

  useEffect(() => {
    handleFormRegistration()
  }, [handleFormRegistration])

  const handleUpdate = (trick) => {
    if (trick === '') return
    setItems((items) => [
      ...items,
      {
        id: v4(),
        value: trick,
        private: false,
      },
    ])
  }

  const handleTodoDeleted = (id) => {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  const handleTodoPrivatized = (id) => {
    const clone = cloneDeep(items)
    setItems(
      clone.map((todo) => {
        if (todo.id === id) {
          todo.private = !todo.private
        }
        return todo
      }),
    )
  }

  const handleDragStart = (event) => {
    setTrickDragging(items.find((item) => item.id === event.active.id))
  }

  const handleDragEnd = () => {
    setTrickDragging(null)
  }

  const handleDragOver = (event) => {
    const { active, over } = event
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIdx = items.findIndex((item) => item.id === active.id)
        const newIdx = items.findIndex((item) => item.id === over.id)
        return arrayMove(items, oldIdx, newIdx)
      })
    }
  }

  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragOver={handleDragOver}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragEnd}
        >
          {/* @ts-ignore */}
          <SortableContext items={items} strategy={() => {}}>
            <ul>
              {items.map((trick, idx) => (
                <SortableTrickTodo
                  key={trick.id}
                  {...{ trick, handleTodoPrivatized, handleTodoDeleted }}
                />
              ))}
            </ul>
          </SortableContext>
          <DragOverlay>
            {trickDragging ? (
              <div className="py-2 select-none">
                <div className="flex items-center px-3 py-2 text-lg font-medium rounded-md bg-nord6 dark:bg-nord0 cursor-grabbing">
                  <div className="flex-grow">{trickDragging.value}</div>
                  <div className="flex">
                    <div className="mr-2">
                      {trickDragging.private ? (
                        <EyeOffIcon className="w-5 h-5" />
                      ) : (
                        <EyeIcon className="w-5 h-5" />
                      )}
                    </div>
                    <XIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
        <div className="mt-2">
          <InputButton handleUpdate={handleUpdate} name="trick" maxLength={40} />
        </div>
      </div>
    </div>
  )
}
