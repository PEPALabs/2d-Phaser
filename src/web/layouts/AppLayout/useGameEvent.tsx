import React, { useEffect, useState } from 'react'
import { Kbd } from '@mantine/core'
import { useWindowEvent } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import { useNavigate } from 'react-router-dom'
import PubSub from 'pubsub-js'
import GameManager from '../../../GameManager'

const useSubscribe = (
  name: string,
  handler: (msg: string, data: unknown) => void
) => {
  useEffect(() => {
    const token = PubSub.subscribe(name, handler)

    return () => {
      PubSub.unsubscribe(token)
    }
  }, [name, handler])
}

const useGameEvent = () => {
  const [gameManager] = useState(() => GameManager.getInstance())

  const navigate = useNavigate()

  useWindowEvent('start-dialog', ({ detail }) => {
    notifications.show({
      message: detail.message
    })
  })

  useWindowEvent('keydown', event => {
    if (event.key === 'Escape') {
      navigate('/home')
      gameManager.values['shopText'] = false
      gameManager.values['shopOpen'] = false
    }
  })

  useSubscribe('player:shop', () => {
    navigate('/shop')
  })

  useSubscribe('player:close', () => {})

  useSubscribe('player:shopText', () => {
    notifications.show({
      message: (
        <>
          Press <Kbd>SPACE</Kbd> to Open Shop
        </>
      )
    })
  })
  useSubscribe('player:shopTextStop', () => {})

  useSubscribe('teleport12:text', () => {
    notifications.show({
      message: (
        <>
          Press <Kbd>SPACE</Kbd> to teleport
        </>
      )
    })
  })
  useSubscribe('teleport12:textStop', () => {})
}

export default useGameEvent
