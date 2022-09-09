import React, { FC, useState } from 'react'
import { useCombobox, useMultipleSelection } from 'downshift'
import { X } from './svg'
import { SelectorIcon } from '@heroicons/react/solid'
import { classNames } from '@/utils'

type Props = {
  items: string[]
}
export const MultiSelectSearch: FC<Props> = ({ items }) => {
  const [inputValue, setInputValue] = useState('')
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection({ initialSelectedItems: [] })
  const getFilteredItems = () =>
    items.filter(
      (item) =>
        selectedItems.indexOf(item) < 0 && item.toLowerCase().startsWith(inputValue.toLowerCase()),
    )
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    openMenu,
  } = useCombobox({
    inputValue,
    defaultHighlightedIndex: 0, // after selection, highlight the first item.
    selectedItem: null,
    items: getFilteredItems(),
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true, // keep the menu open after selection.
          }
      }
      return changes
    },
    onStateChange: ({ inputValue, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue)
          break
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('')
            addSelectedItem(selectedItem)
          }
          break
        default:
          break
      }
    },
  })
  return (
    <div className="relative">
      <div className="flex flex-wrap items-center rounded-lg shadow-sm bg-nord5 dark:bg-nord1">
        {selectedItems.map((selectedItem, index) => (
          <span
            className="flex items-center px-2 py-1 mx-1 my-2 font-semibold rounded-full cursor-pointer select-none bg-nord4 dark:bg-nord2 text-sm focus:outline-none"
            key={`selected-item-${index}`}
            {...getSelectedItemProps({ selectedItem, index })}
            onClick={(e) => {
              e.stopPropagation()
              removeSelectedItem(selectedItem)
            }}
          >
            {selectedItem}
            <X className="ml-1" size={12} strokeWidth={3} />
          </span>
        ))}
        <div {...getComboboxProps()} className="relative flex flex-grow">
          <input
            className="w-full h-8 px-3 py-2 leading-tight border-0 rounded-lg outline-none text-primary focus:border-purple-11 focus:border-opacity-50 focus:ring-3 focus:ring-purple-11 focus:ring-opacity-50 bg-nord5 dark:bg-nord1"
            {...getInputProps(
              getDropdownProps({
                onFocus: () => {
                  if (!isOpen) openMenu()
                },
              }),
            )}
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon className="w-4 h-4 text-nord4 dark:text-nord2" aria-hidden="true" />
          </span>
        </div>
      </div>
      <ul
        {...getMenuProps()}
        className="absolute z-10 w-full mt-1 overflow-auto text-xs rounded-md shadow-sm select-none scrollbar bg-nord5 dark:bg-nord1 max-h-60 focus:outline-none text-primary"
      >
        {isOpen &&
          getFilteredItems().map((item, index) => (
            <li
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
              className={classNames(
                'px-3 py-2',
                highlightedIndex === index ? 'bg-nord4 dark:bg-nord2' : 'bg-nord5 dark:bg-nord1',
              )}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  )
}
