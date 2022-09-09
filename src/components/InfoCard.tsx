import React from 'react'

type Props = {
  children: any
  title: string
  subtitle?: string
  [x: string]: any
}

export const InfoCard: React.FC<Props> = ({ children, title, subtitle, ...rest }) => (
  <div {...rest}>
    <div className="px-4 py-2 rounded-lg shadow-sm bg-nord6 dark:bg-nord0">
      <div className="flex items-end justify-between m-1">
        <div>
          <div className="font-bold tracking-wider uppercase">
            {title} {subtitle && <span className="ml-1">({subtitle})</span>}
          </div>
        </div>
      </div>
      {children}
    </div>
  </div>
)
