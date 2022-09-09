import React from 'react'
import { Countdown } from '.'

export const NextStgCountdown = () => (
  <div className="flex flex-col items-center font-bold tracking-wide uppercase text-secondary">
    <div>next rotation</div>
    <div className="lowercase mt-2px">
      <Countdown cron="0 0 * * 1" />
    </div>
  </div>
)
