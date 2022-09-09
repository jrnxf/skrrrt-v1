import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, DotsHorizontalIcon, SelectorIcon } from '@heroicons/react/solid'
import React, { FC, Fragment } from 'react'
import { Check } from '@/components'

type Props = {
  triggerSlot: any
  selected?: string
  handleChange?: (val: any) => void
  options: string[]
}
export const Select: FC<Props> = ({ triggerSlot, selected, handleChange, options }) => {
  return (
    <Listbox value={selected} onChange={handleChange}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button>{triggerSlot}</Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Listbox.Options
                static
                className="absolute right-0 z-30 py-1 mt-2 overflow-auto text-lg border-2 rounded-md shadow-sm border-nord5 dark:border-nord1 w-max bg-nord6 dark:bg-nord0 max-h-60 focus:outline-none text-primary"
              >
                {options.map((option, optionIdx) => (
                  <Listbox.Option
                    key={optionIdx}
                    className={({ active }) =>
                      `${active ? 'bg-nord5 dark:bg-nord1' : ''}
                          cursor-pointer select-none relative py-2 pl-8 pr-4`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <Check
                              className="text-nord4 dark:text-nord2"
                              strokeWidth={4}
                              size={16}
                            />
                          </span>
                        ) : null}
                        <span className="block px-2 text-lg font-medium truncate">{option}</span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
