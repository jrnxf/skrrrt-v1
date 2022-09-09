import Tippy from '@tippyjs/react'
import React, { FC } from 'react'
import ReactCountryFlag from 'react-country-flag'

type Props = { location: any; dimensions?: string; scale?: number }

export const Flag: FC<Props> = ({ location, dimensions = '0.75em', scale = 1, ...rest }) => (
  <>
    {location && (
      <div {...rest}>
        <Tippy content={location.country_long_name}>
          <div className="flex items-center">
            <ReactCountryFlag
              countryCode={location.country_short_name || ''}
              style={{
                transform: `scale(${scale})`,
              }}
              title={location.country_long_name}
            />
          </div>
        </Tippy>
      </div>
    )}
  </>
)
