import { Position } from './emitter'

const initialPlayerPosition = {
  Level: { x: 1640, y: 1264 },
  Farm: { x: 1064, y: 1222 }
} satisfies Record<string, Position>

export default initialPlayerPosition
