import { queryOptions } from '@tanstack/react-query'
import httpClient from '../httpClient'
import { CreateRoomDTO, GetRoomsData } from './type'

const MULTIPLAYER_API_PATH = 'multiplayer'

const multiplayerAPI = {
  getRooms: () =>
    queryOptions({
      queryKey: [MULTIPLAYER_API_PATH, multiplayerAPI.getRooms.name],
      queryFn: () =>
        httpClient.get(MULTIPLAYER_API_PATH + '/room').json<GetRoomsData>(),
      initialData: { rooms: [] }
    }),
  createRoom: () => ({
    //Only called during development and testing
    mutationFn: (params: CreateRoomDTO) =>
      httpClient.post(MULTIPLAYER_API_PATH + '/room', { json: params }).json()
  })
}

export default multiplayerAPI
