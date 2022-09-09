import { Menu as TWMenu, Transition } from '@headlessui/react'
import React, { FC, Fragment } from 'react'
import { classNames } from '@/utils'

type Props = {
  items: {
    show: boolean
    text: string
    handler: any
  }[][]
  triggerSlot: any
}

export const Menu: FC<Props> = ({ triggerSlot, items }) => {
  if (items.some((nestedItems) => nestedItems.some((item) => !!item.show))) {
    return (
      <div className="z-10 text-right rounded-md">
        <TWMenu as="div" className="relative inline-block w-full text-left">
          {({ open }) => (
            <>
              <div className="w-full">
                <TWMenu.Button>{triggerSlot}</TWMenu.Button>
              </div>
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
                <TWMenu.Items
                  static
                  className="absolute right-0 z-20 mt-2 overflow-hidden text-sm origin-top-right border-2 divide-y-2 rounded-md shadow-sm bg-nord6 dark:bg-nord0 divide-nord5 dark:divide-nord1 border-nord5 dark:border-nord1 w-max focus:outline-none"
                >
                  {items?.map((item, idx) => (
                    <div key={idx}>
                      {item
                        ?.filter((x) => x.show)
                        ?.map((x, idx) => (
                          <TWMenu.Item key={idx}>
                            {({ active }) => (
                              <button
                                className={classNames(
                                  active && 'bg-nord5 dark:bg-nord1',
                                  'group font-medium flex items-center w-full text-lg px-3 py-2 focus:outline-none',
                                )}
                                onClick={x.handler}
                              >
                                {x.text}
                              </button>
                            )}
                          </TWMenu.Item>
                        ))}
                    </div>
                  ))}
                </TWMenu.Items>
              </Transition>
            </>
          )}
        </TWMenu>
      </div>
    )
  } else return null
}
