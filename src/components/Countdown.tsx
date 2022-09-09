import Cron from 'cron-converter'
import React, { FC, useEffect, useState } from 'react'
import ReactCountdown from 'react-countdown'

type Props = {
  cron: string
  timezone?: string
}

export const Countdown: FC<Props> = ({ cron, timezone = 'utc' }) => {
  const [cronInstance] = useState<Cron>(new Cron({ timezone }))
  const [schedule, setSchedule] = useState<Cron.Seeker>()
  const [nextDate, setNextDate] = useState<string>()

  useEffect(() => {
    cronInstance.fromString(cron)
    const _schedule = cronInstance.schedule()
    setSchedule(_schedule)
    setNextDate(_schedule.next().format())
  }, [cron, cronInstance])

  if (!nextDate) return null
  return (
    <ReactCountdown
      date={nextDate}
      key={nextDate} // this is important, by giving a new key when the timer hits, this component will reset
      onComplete={() => setNextDate(schedule.next().format())}
      renderer={({ days, hours, minutes, seconds }) => (
        <span>
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      )}
    />
  )
}
