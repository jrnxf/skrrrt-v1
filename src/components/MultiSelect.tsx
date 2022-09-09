import React, { FC, Fragment, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { useSelect, useMultipleSelection } from 'downshift'
import { SelectorIcon } from '@heroicons/react/solid'
import { X } from '.'
import { classNames } from '@/utils'
type Props = {
  label?: string
  items: string[]
  activeItems: string[]
  itemClicked: (item: string) => void
  handleBackspace: () => void
}

export const MultiSelect: FC<Props> = ({
  label = 'select',
  items,
  activeItems,
  itemClicked,
  handleBackspace,
}) => {
  const { getSelectedItemProps, getDropdownProps, selectedItems, setSelectedItems } =
    useMultipleSelection()

  const getFilteredItems = (items: any) =>
    items.filter((item: any) => selectedItems.indexOf(item) < 0)

  useEffect(() => {
    setSelectedItems(activeItems)
  }, [activeItems])

  const { isOpen, openMenu, getToggleButtonProps, getMenuProps, highlightedIndex, getItemProps } =
    useSelect({
      items: getFilteredItems(items),
      onStateChange: ({ type, selectedItem }) => {
        switch (type) {
          case useSelect.stateChangeTypes.MenuKeyDownEnter:
          case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
          case useSelect.stateChangeTypes.ItemClick:
          case useSelect.stateChangeTypes.MenuBlur:
            if (selectedItem) itemClicked(selectedItem as string)
            break
          default:
            break
        }
      },
    })
  return (
    <div
      className="relative w-full rounded-md cursor-pointer keyboard-focus-within"
      tabIndex={0}
      onKeyDown={(e) => {
        e.key === 'Backspace' && handleBackspace()
      }}
    >
      <div
        className="flex flex-wrap items-center p-1 rounded-md shadow-sm bg-nord6 dark:bg-nord0 min-h-9"
        {...getToggleButtonProps(getDropdownProps())}
      >
        <div className="mx-2 my-1 select-none label">{label}</div>
        {selectedItems.map((selectedItem, index) => (
          <span
            key={`selected-item-${index}`}
            className="flex items-center px-3 py-0.5 my-0.5 mx-1 text-sm font-semibold rounded-full cursor-pointer bg-nord5 dark:bg-nord1 focus:outline-none"
            {...getSelectedItemProps({ selectedItem, index })}
            onClick={() => {
              itemClicked(selectedItem as string)
            }}
          >
            {selectedItem}
            <X className="ml-1" size={12} strokeWidth={3} />
          </span>
        ))}

        <div className="flex-grow cursor-pointer">
          <div className="flex justify-end">
            <SelectorIcon className="w-4 h-4 mx-2 text-nord4 dark:text-nord2" aria-hidden="true" />
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <ul
          {...getMenuProps()}
          className="absolute right-0 z-20 mt-2 overflow-auto text-lg origin-top-right border-2 divide-y-2 rounded-md shadow-sm cursor-pointer bg-nord6 dark:bg-nord0 divide-nord5 dark:divide-nord1 min-w-32 max-h-60 scrollbar border-nord5 dark:border-nord1 w-max focus:outline-none"
        >
          {getFilteredItems(items).map((item, index) => (
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
      </Transition>
    </div>
  )
}
