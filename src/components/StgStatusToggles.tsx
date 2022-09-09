import { useRouter } from 'next/router'
import React from 'react'
import { STG_STATUSES } from '@/utils'
import { Select } from '.'
import { SelectorIcon } from '@heroicons/react/outline'

export const StgStatusToggles = () => {
  const router = useRouter()

  const route = (status) => {
    router.push(`/games/stg/${status}`)
  }

  const selected = Object.values(STG_STATUSES).find((status) => router.pathname?.includes(status))
  return (
    <div className="flex items-center">
      <Select
        selected={selected}
        handleChange={route}
        options={Object.values(STG_STATUSES)}
        triggerSlot={
          <div className="relative flex items-center w-full px-2 py-2 pr-10 overflow-auto text-left rounded-md shadow-sm cursor-pointer bg-nord6 dark:bg-nord0 min-h-9 max-h-60 scrollbar focus:outline-none keyboard-focus-within">
            <div className="mx-2 select-none label">status</div>
            {selected && <span className="block font-medium truncate">{selected}</span>}
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon className="w-4 h-4 text-nord4 dark:text-nord2" aria-hidden="true" />
            </span>
          </div>
        }
      />
    </div>
  )
}
