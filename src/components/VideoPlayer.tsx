import React, { useEffect, useRef, useState } from 'react'
import videojs from 'video.js'
import { useAuth } from '@/context'

const usePlayer = ({ src, controls, autoplay }) => {
  const videoRef = useRef(null)
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current, {
      fluid: true, // maintain aspect ratio
      preload: 'none', // don't preload the video (save network $$$)
      bigPlayButton: false, // hide ugly big button
      aspectRatio: '16:9', // keep this ratio
      html5: {
        vhs: {
          overrideNative: true, // opts into hls if available
        },
      },
      playbackRates: [1, 0.5, 0.25, 0.1],
      controls,
      autoplay,
      sources: [src],
    })
    setPlayer(vjsPlayer)

    return () => {
      if (player !== null) {
        // @ts-ignore
        player.dispose()
      }
    }
  }, [player, src, autoplay, controls])

  useEffect(() => {
    if (player !== null) {
      // @ts-ignore
      player.src({ src })
    }
  }, [player, src])

  return videoRef
}

export const VideoPlayer = ({ playbackId, controls = true, autoplay = false }) => {
  const playerRef = usePlayer({
    src: `https://stream.mux.com/${playbackId}.m3u8`,
    controls,
    autoplay,
  })

  return (
    <div
      className="bg-[#1C2028] aspect-w-16 aspect-h-9 responsive-video-container focus:outline-none"
      data-vjs-player
    >
      <video
        ref={playerRef}
        className="w-full h-full video-js"
        poster={`https://image.mux.com/${playbackId}/thumbnail.jpg?time=0&width=800&height=550`}
      />
    </div>
  )
}
