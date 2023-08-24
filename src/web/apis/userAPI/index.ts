import httpClient from '../httpClient'
import type { LoginDTO, LoginData, SignupDTO } from './type'

const USER_API_PATH = 'user'

const userAPI = {
  login: () => ({
    mutationFn: (params: LoginDTO) =>
      httpClient
        .post(USER_API_PATH + '/login', { json: params })
        .json<LoginData>()
  }),
  logout: () => ({
    mutationFn: () => httpClient.post(USER_API_PATH + '/logout').json()
  }),
  signup: () => ({
    mutationFn: (params: SignupDTO) =>
      httpClient.post(USER_API_PATH + '/register', { json: params }).json()
  })
}

export default userAPI
