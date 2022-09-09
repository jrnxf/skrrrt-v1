import { useRouter } from 'next/router'
import React from 'react'
import { GAME_TYPES, STG_STATUSES } from '@/utils'
import { Select } from '.'
import { SelectorIcon } from '@heroicons/react/outline'

export const GameTypeToggles = () => {
  const router = useRouter()

  const route = (type) => {
    router.push(`/games/${type}`)
  }

  const selected = Object.values(GAME_TYPES).find((type) => router.pathname?.includes(type))
  return (
    <div className="flex items-center">
      <Select
        selected={selected}
        handleChange={route}
        options={Object.values(GAME_TYPES)}
        triggerSlot={
          <div className="relative flex items-center w-full pr-10 overflow-auto text-xs text-left rounded-md shadow-sm cursor-pointer bg-nord6 dark:bg-nord0 min-h-9 max-h-60 scrollbar focus:outline-none keyboard-focus-within">
            <div className="mx-2 select-none label text-sm">game</div>
            {selected && <span className="block text-sm font-medium truncate">{selected}</span>}
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon className="w-4 h-4 text-nord4 dark:text-nord2" aria-hidden="true" />
            </span>
          </div>
        }
      />
    </div>
  )
}
