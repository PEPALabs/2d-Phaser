import ky from 'ky'
import { notifications } from '@mantine/notifications'
import env from '../shared/env'
import useAuthStore from '../shared/useAuthStore'

interface APIResponse {
  code: number
  msg: string
  data: unknown
}

const httpClient = ky.create({
  prefixUrl: env.BASE_API_PATH,
  retry: 0,
  timeout: false,
  hooks: {
    beforeRequest: [
      request => {
        const authState = useAuthStore.getState()

        if (authState.token) {
          request.headers.set('Authorization', `Bearer ${authState.token}`)
        }
      }
    ],
    afterResponse: [
      async (_request, _options, response) => {
        const json: APIResponse = await response.json()

        if (!response.ok) {
          if (response.status === 401) {
            useAuthStore.setState({ token: null })
            return
          }

          const error = new Error(json.msg)
          error.name = response.status.toString()

          notifications.show({
            color: 'red',
            message: json.msg
          })

          throw error
        }

        const body = JSON.stringify(json.data)

        return new Response(body, response)
      }
    ]
  }
})

export default httpClient
