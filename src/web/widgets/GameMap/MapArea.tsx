import React from 'react'
import { Box, Text } from '@mantine/core'
import { clsx } from 'clsx'
import { MapAreaData, GameMapRect } from './'

export interface MapAreaProps extends MapAreaData {
  scale: number
  isActive: boolean
  onChange?: (areaName: string) => void
}

const MapArea = ({
  name,
  src,
  position,
  scale,
  isActive,
  onChange
}: MapAreaProps) => {
  return (
    <Box
      className={clsx(
        'group absolute cursor-pointer transition-all',
        'hover:!scale-[var(--map-hover-scale)]'
      )}
      style={{
        left: `calc((${position.x} / ${GameMapRect.BASE_WIDTH}) * 100%)`,
        top: `calc((${position.y} / ${GameMapRect.BASE_HEIGHT}) * 100%)`,
        transform: `scale(${isActive ? scale * 1.05 : scale})`,
        transformOrigin: 'top left' //Set the reference point to the top left corner of the element
      }}
      onClick={() => {
        onChange?.(name)
      }}>
      <Box
        component="img"
        className={clsx(
          'drop-shadow-map-area group-hover:drop-shadow-map-area-active',
          isActive && 'drop-shadow-map-area-active'
        )}
        src={src}
        alt={name}
        draggable={false}
      />
      <Text
        ta="center"
        c="white"
        size="lg"
        fw="bold"
        style={{ textShadow: ' 1px 1px 2px black' }}>
        {name}
      </Text>
    </Box>
  )
}

export default MapArea
