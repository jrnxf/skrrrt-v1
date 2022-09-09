import { Select, UserTile } from '@/components'
import { Spiderfy } from '@/components/Spiderfy'
import { useTheme } from '@/context'
import { E_User_Locations_Enum, useLocationsByTypeLazyQuery } from '@/types'
import { DARK_MAP, LIGHT_MAP } from '@/utils'
import { SelectorIcon } from '@heroicons/react/outline'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const UsersMap = () => {
  const { isDarkMode } = useTheme()
  const [locationType, setLocationType] = useState<E_User_Locations_Enum>(
    E_User_Locations_Enum.Current,
  )

  const [markerData, setMarkerData] = useState<any>()

  const [getLocationsByType, { data }] = useLocationsByTypeLazyQuery()

  useEffect(() => {
    getLocationsByType({
      variables: {
        type: locationType,
      },
    })
  }, [locationType, getLocationsByType])

  useEffect(() => {
    if (data) {
      const markers = data?.user_locations.map(({ lat, lng, user }) => ({
        position: {
          lat,
          lng,
        },
        user: {
          ...user,
        },
      }))

      setMarkerData(markers)
    }
  }, [data])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCo5Mn21GTk0cOjR3pNb5wlc72p_UbJ4fE',
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(
    (_map) => {
      setMap(_map)
    },
    [getLocationsByType],
  )

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <>
      <Head>
        <title>skrrrt | users map</title>
      </Head>
      <div className="w-full h-full max-w-5xl mx-auto">
        <div className="flex justify-center mb-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <Select
                selected={locationType}
                handleChange={(type) => {
                  setLocationType(type)
                }}
                options={Object.values(E_User_Locations_Enum)}
                triggerSlot={
                  <div className="relative flex items-center w-full px-2 py-2 pr-10 overflow-auto text-left rounded-md shadow-sm cursor-pointer bg-nord6 dark:bg-nord0 min-h-9 focus:outline-none keyboard-focus-within">
                    <div className="mx-2 select-none label">display</div>

                    {locationType && (
                      <span className="block font-medium truncate">{locationType}</span>
                    )}
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="w-4 h-4 text-nord4 dark:text-nord2"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                }
              />
            </div>
          </div>
        </div>
        <div className="h-full pb-12">
          <div className="w-full h-full rounded-md shadow-sm">
            <GoogleMap
              mapContainerStyle={{
                height: '100%',
                width: '100%',
                borderRadius: '10px',
              }}
              center={{
                lat: 0,
                lng: 0,
              }}
              zoom={2}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                zoomControl: false,
                styles: isDarkMode ? DARK_MAP : LIGHT_MAP,
              }}
            >
              {map && markerData && (
                // @ts-ignore
                <Spiderfy map_instance={map}>
                  {markerData.map((marker, idx) => (
                    <CustomMarker marker={marker} key={idx} />
                  ))}
                </Spiderfy>
              )}
            </GoogleMap>
          </div>
        </div>
      </div>
    </>
  ) : null
}

export default UsersMap

/**
 * The reason this component is so important is that we only want the re-renders
 * to happen inside this component, NOT the parent above. When a re-render
 * happens above, the entire map is brought back to the center
 */
const CustomMarker = React.forwardRef((props: any, ref) => {
  const [isOpen, setIsOpen] = useState<any>(null)

  return (
    <Marker
      position={props.marker.position}
      title={props.marker.title}
      onClick={() => {
        setIsOpen(true)
      }}
      // @ts-ignore
      ref={ref}
    >
      {isOpen && (
        <InfoWindow onCloseClick={() => setIsOpen(false)} position={props.marker.position}>
          <UserTile user={props.marker.user} />
        </InfoWindow>
      )}
    </Marker>
  )
})
