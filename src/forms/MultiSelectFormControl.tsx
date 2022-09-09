import React, { FC, useCallback, useEffect } from 'react'
import { useSelect, useMultipleSelection } from 'downshift'
import { SelectorIcon } from '@heroicons/react/solid'
import { X } from '@/components'
import { useFormContext } from 'react-hook-form'
import { classNames } from '@/utils'

type Props = {
  name: string
  label: string
  items: string[]
}

export const MultiSelectFormControl: FC<Props> = ({ name, items, label }) => {
  const { register, unregister, setValue, watch } = useFormContext()

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
    setSelectedItems,
  } = useMultipleSelection({
    initialSelectedItems: watch(name),
  })

  const handleFormRegistration = useCallback(() => {
    register(name)
    return () => {
      unregister(name)
    }
  }, [register, unregister, name])

  const getFilteredItems = (items) => items.filter((item) => selectedItems.indexOf(item) < 0)

  const removeLastItem = () => {
    if (selectedItems?.length > 0) {
      setSelectedItems(selectedItems.slice(0, selectedItems.length - 1))
    }
  }

  useEffect(() => {
    setValue(name, selectedItems as any[])
  }, [selectedItems])

  useEffect(() => {
    handleFormRegistration()
  }, [handleFormRegistration])

  const {
    isOpen,
    openMenu,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    selectItem,
  } = useSelect({
    items: getFilteredItems(items),
    onStateChange: ({ type, selectedItem }) => {
      switch (type) {
        case useSelect.stateChangeTypes.MenuKeyDownEnter:
        case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
        case useSelect.stateChangeTypes.MenuBlur:
          if (selectedItem) {
            addSelectedItem(selectedItem as string)
            selectItem(null)
          }
          break
        default:
          break
      }
    },
  })
  return (
    <>
      <div className="mt-2">
        <label htmlFor={name} className="mr-2 text-sm label">
          {label}
        </label>
      </div>
      <div
        className="relative rounded-md keyboard-focus-within"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Backspace') {
            removeLastItem()
          }
        }}
      >
        <div
          className="flex flex-wrap items-center p-2 rounded-lg shadow-sm bg-nord6 dark:bg-nord0 min-h-9"
          {...getToggleButtonProps(getDropdownProps())}
        >
          {selectedItems.map((selectedItem, index) => (
            <span
              key={`selected-item-${index}`}
              className="flex items-center px-3 py-1 mb-1 mr-2 font-semibold rounded-full cursor-pointer select-none bg-nord5 dark:bg-nord1 py-3px focus:outline-none whitespace-nowrap"
              {...getSelectedItemProps({ selectedItem, index })}
              onClick={() => {
                removeSelectedItem(selectedItem)
              }}
            >
              {selectedItem}
              <X className="ml-1" size={12} strokeWidth={3} />
            </span>
          ))}
          <div className="flex-grow cursor-pointer">
            <div className="flex justify-end">
              <SelectorIcon className="w-4 h-4 text-nord4 dark:text-nord2" aria-hidden="true" />
            </div>
          </div>
        </div>

        <ul
          {...getMenuProps()}
          className="absolute z-10 w-full mt-1 overflow-auto text-lg rounded-lg shadow-sm min-w-32 max-h-60 scrollbar bg-nord6 dark:bg-nord0 focus:outline-none text-primary"
        >
          {isOpen &&
            getFilteredItems(items).map((item, index) => (
              <li
                className={classNames(
                  highlightedIndex === index ? 'bg-nord5 dark:bg-nord1' : 'bg-nord6 dark:bg-nord0',
                  'px-3 py-2 font-medium',
                )}
                key={`${item}${index}`}
                onClick={() => {
                  if (!isOpen) openMenu()
                }}
                {...getItemProps({ item, index })}
                tabIndex={0}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}
