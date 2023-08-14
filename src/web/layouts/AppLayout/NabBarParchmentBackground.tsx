import React from 'react'
import { Box } from '@mantine/core'

const NabBarParchmentBackground = () => {
  return (
    <>
      <svg className="hidden">
        <filter id="wavy2">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.01"
            numOctaves="5"
            seed="1"
          />
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
      <Box
        className="absolute inset-0 -left-2 -z-10 h-full w-full bg-cover bg-center"
        bg="url(/assets/images/parchment2.jpg)"
        sx={{ filter: 'url(#wavy2)' }}
      />
    </>
  )
}

export default NabBarParchmentBackground
