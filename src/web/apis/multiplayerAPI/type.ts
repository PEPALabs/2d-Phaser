export interface Room {
  id: string
  name: string
  playerCount: 0
  maxPlayersCount: 0
}

export interface GetRoomsData {
  rooms: Room[]
}
