// @ts-nocheck
import React, { useEffect, useState, forwardRef } from 'react'

export const Spiderfy = ({ map_instance, children }) => {
  const [oms, setOms] = useState(null)
  useEffect(() => {
    const { OverlappingMarkerSpiderfier } = require(`npm-overlapping-marker-spiderfier/lib/oms.min`)

    const _oms = new OverlappingMarkerSpiderfier(map_instance, {})

    setOms(_oms)
  }, [])

  // const onSpiderClick = (e, ref) => {
  // }

  const markerNodeMounted = async (ref) => {
    if (ref && oms) {
      setTimeout(() => {
        oms.addMarker(ref?.marker)
        // map_instance.addListener(ref.marker, 'spider_click', (e) => {
        //   if (onSpiderClick) onSpiderClick(e, ref)
        // })
      }, 2000)
    }
  }

  if (oms) {
    return React.Children.map(children, (child) =>
      React.cloneElement(child, { ref: markerNodeMounted }),
    )
  } else {
    return <p>waiting</p>
  }
}
