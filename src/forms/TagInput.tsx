import { SortableChip, X } from '@/components'
import {
  closestCenter,
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { v4 } from 'uuid'

type Props = {
  name: string
  label: string
  initialItems?: string[]
}
export const TagInput: FC<Props> = ({ initialItems = [], name, label }) => {
  const [tagValue, setTagValue] = useState('')
  const [items, setItems] = useState<
    {
      value: any
      id: string
    }[]
  >([])

  const [overlayText, setOverlayText] = useState(null)

  const sensors = useSensors(useSensor(PointerSensor))

  useEffect(() => {
    setItems(
      initialItems.map((item) => ({
        id: v4(),
        value: item,
      })),
    )
  }, [initialItems])

  const { register, unregister, setValue } = useFormContext()

  const handleFormRegistration = useCallback(() => {
    register(name)
    return () => {
      unregister(name)
    }
  }, [register, unregister, name])

  useEffect(() => {
    setValue(
      name,
      items.map((i) => i.value),
    )
  }, [items])

  useEffect(() => {
    handleFormRegistration()
  }, [handleFormRegistration])

  const handleDragStart = (event) => {
    setOverlayText(items.find((item) => item.id === event.active.id).value)
  }

  const handleDragEnd = (event) => {
    setOverlayText(null)
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

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <>
      <div className="mt-2">
        <label htmlFor={name} className="mr-2 text-xs label">
          {label}
        </label>
      </div>
      <div className="relative">
        <div className="flex flex-col">
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
              <div>
                {items.map((item) => (
                  <SortableChip
                    key={item.id}
                    id={item.id}
                    value={item.value}
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            </SortableContext>
            <DragOverlay>
              {overlayText ? (
                <div className="z-20 flex items-center px-3 py-1 font-semibold rounded-full select-none bg-nord5 dark:bg-nord1 py-3px focus:outline-none cursor-grabbing whitespace-nowrap">
                  {overlayText}
                  <X className="w-3 h-3 ml-1 stroke-3" />
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>

          <div className="relative inline-flex flex-grow">
            <input
              className="w-full p-3 leading-tight border-0 rounded-md shadow-sm outline-none text-primary focus:border-purple-11 focus:border-opacity-50 focus:ring-3 focus:ring-purple-11 focus:ring-opacity-50 bg-nord6 dark:bg-nord0"
              value={tagValue}
              onChange={(e) => setTagValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  if (tagValue.trim()) {
                    setItems([...items, { id: v4(), value: tagValue }])
                    setTagValue('')
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
