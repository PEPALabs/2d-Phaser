import { queryOptions } from '@tanstack/react-query'
import httpClient from '../httpClient'
import { GetRoomsData } from './type'

const MULTIPLAYER_API_PATH = 'multiplayer'

const multiplayerAPI = {
  getRooms: () =>
    queryOptions({
      queryKey: [MULTIPLAYER_API_PATH, multiplayerAPI.getRooms.name],
      queryFn: () =>
        httpClient.get(MULTIPLAYER_API_PATH + '/room').json<GetRoomsData>()
    })
}

export default multiplayerAPI
