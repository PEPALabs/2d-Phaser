import React from 'react'
import { Box } from '@mantine/core'

const ParchmentBackground = () => {
  return (
    <>
      <svg className="hidden">
        <filter id="wavy">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.02"
            numOctaves="5"
            seed="1"
          />
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
      <Box
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        bg="url(/assets/images/parchment.jpeg)"
        sx={{ filter: 'url(#wavy)' }}
      />
    </>
  )
}

export default ParchmentBackground
