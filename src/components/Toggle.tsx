import { Switch } from '@headlessui/react'
import { classNames } from '@/utils'

export const Toggle = ({ enabled, setEnabled, label = 'toggle' }) => {
  return (
    <div
      className={classNames(
        enabled ? 'bg-nord4 dark:bg-nord2' : 'bg-nord6 dark:bg-nord0',
        'relative inline-flex items-center h-6 rounded-full w-auto focus:outline-none',
      )}
    >
      <div className="mx-2 select-none label text-sm">{label}</div>

      <Switch checked={enabled} onChange={setEnabled}>
        <span className="sr-only">Enable notifications</span>
        <span
          className={classNames(
            enabled ? 'translate-x-6' : 'translate-x-1',
            'inline-block w-4 h-4 transform shadow-sm bg-primary transition-transform ease-in-out duration-200 rounded-full',
          )}
        />
      </Switch>
    </div>
  )
}
