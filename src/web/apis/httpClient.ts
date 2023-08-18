import ky from 'ky'
import { notifications } from '@mantine/notifications'
import env from '../shared/env'

interface APIResponse {
  code: number
  msg: string
  data: unknown
}

const httpClient = ky.create({
  prefixUrl: env.BASE_API_PATH,
  retry: 0,
  hooks: {
    afterResponse: [
      async (_request, _options, response) => {
        const json: APIResponse = await response.json()

        if (!response.ok) {
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
