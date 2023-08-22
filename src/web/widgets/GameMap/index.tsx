import React, { useState } from 'react'
import { AspectRatio, BackgroundImage, Box } from '@mantine/core'
import { useResizeObserver } from '@mantine/hooks'
import MapArea from './MapArea'

export interface MapAreaData {
  name: string
  src: string
  position: {
    x: number
    y: number
  }
}

export enum GameMapRect {
  BASE_WIDTH = 1280,
  BASE_HEIGHT = 720
}

const mapAreas: MapAreaData[] = [
  {
    name: 'area1',
    src: '/assets/images/world-map-icons/area1.png',
    position: { x: 519, y: 160 }
  },
  {
    name: 'area2',
    src: '/assets/images/world-map-icons/area2.png',
    position: { x: 570, y: 285 }
  },
  {
    name: 'area3',
    src: '/assets/images/world-map-icons/area3.png',
    position: { x: 733, y: 100 }
  },
  {
    name: 'area4',
    src: '/assets/images/world-map-icons/area4.png',
    position: { x: 467, y: 357 }
  }
]

const GameMap = () => {
  const [activeAreaName, setActiveAreaName] = useState<string>()

  const [ref, rect] = useResizeObserver()

  return (
    <AspectRatio ratio={16 / 9} className="w-full">
      <Box ref={ref} className="relative">
        <BackgroundImage
          src="/assets/images/world-map.png"
          className="h-full"
        />
        {mapAreas.map(mapArea => (
          <MapArea
            key={mapArea.name}
            {...mapArea}
            scale={rect.width / GameMapRect.BASE_WIDTH}
            isActive={mapArea.name === activeAreaName}
            onChange={setActiveAreaName}
          />
        ))}
      </Box>
    </AspectRatio>
  )
}

export default GameMap
