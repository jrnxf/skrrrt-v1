import React from 'react'

export const HeaderLine = ({ text, subtext }: { text: string; subtext?: string }) => (
  <div className="flex flex-row items-center w-full">
    <div className="line h-[2px]" />
    <div className="flex flex-col items-center justify-center px-4 text-secondary">
      <p className="text-lg font-extrabold tracking-wider uppercase">{text}</p>
      {subtext && <p className="font-bold tracking-wider uppercase">{subtext}</p>}
    </div>
    <div className="line h-[2px]" />
  </div>
)
