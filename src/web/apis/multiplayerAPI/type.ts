export interface Room {
  id: string
  name: string
  playerCount: number
  maxPlayerCount: number
}

export interface GetRoomsData {
  rooms: Room[]
}

export interface CreateRoomDTO extends Room {}
