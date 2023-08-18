import httpClient from '../httpClient'
import type { LoginDTO, LoginData } from './type'

const userAPI = {
  login: () => ({
    mutationFn: (params: LoginDTO) =>
      httpClient.post('login', { json: params }).json<LoginData>()
  }),
  logout: () => ({
    mutationFn: () => httpClient.get('logout').json()
  })
}

export default userAPI
