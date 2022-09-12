import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import React from 'react'
import { useTheme } from '@/context'
import { LIGHT_MAP, DARK_MAP } from '@/utils'

export const Map = ({ coords }) => {
  const { isDarkMode } = useTheme()
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(
    (_map) => {
      setMap(_map)
    },
    [coords],
  )

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        height: '100%',
        width: '100%',
        borderRadius: '10px',
      }}
      center={coords}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: false,
        styles: isDarkMode ? DARK_MAP : LIGHT_MAP,
      }}
    >
      <Marker position={coords} />
    </GoogleMap>
  ) : null
}
