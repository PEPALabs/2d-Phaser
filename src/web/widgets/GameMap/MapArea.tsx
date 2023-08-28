import React from 'react'
import { Box, Text, clsx } from '@mantine/core'
import { MapAreaData, GameMapRect } from '.'

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
      className="group absolute cursor-pointer select-none transition-all"
      sx={{
        left: `calc((${position.x} / ${GameMapRect.BASE_WIDTH}) * 100%)`,
        top: `calc((${position.y} / ${GameMapRect.BASE_HEIGHT}) * 100%)`,
        transform: `scale(${isActive ? scale * 1.05 : scale})`,
        transformOrigin: 'top left', //Set the reference point to the top left corner of the element
        '&:hover': {
          transform: `scale(${scale * 1.05})`
        }
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
        align="center"
        color="white"
        size="lg"
        fw="bold"
        sx={{ textShadow: ' 1px 1px 2px black' }}>
        {name}
      </Text>
    </Box>
  )
}

export default MapArea
