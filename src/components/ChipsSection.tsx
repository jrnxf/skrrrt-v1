import React, { FC } from 'react'
import { InfoCard } from '.'

type Props = {
  title: string
  chips: string[]
}
export const ChipsSection: FC<Props> = ({ title, chips }) => (
  <>
    {chips?.length > 0 && (
      <div className="mb-4">
        <InfoCard title={title}>
          <div className="flex flex-row flex-wrap items-start font-medium">
            {chips?.map((chip, idx) => (
              <span
                key={idx}
                className="my-2 mr-2 shadow-sm chip bg-nord5 dark:bg-nord1"
                data-testid="chip"
              >
                {chip}
              </span>
            ))}
          </div>
        </InfoCard>
      </div>
    )}
  </>
)
