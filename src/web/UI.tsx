import React, { ReactElement } from 'react'
import { useState, useEffect, useCallback } from 'react'
import { MouseEvent } from 'react'
import PubSub from 'pubsub-js'
import EventDispatcher from '../EventDispatcher'
import InventoryUI from './InventoryUI'

import MessageBox from './MessageBox'
import EthersContext from './EthersContext'
import FuelApp from './FuelApp'
import SigninBox from './Signin'
import Shop from './Shop'
import ShopUI from './ShopUI'
import Sidebar from './Sidebar'
import Alert from './Alert'

import GameManager from '../GameManager'
import { Anchor, Avatar, Button, Group, Header, Title } from '@mantine/core'

function UI() {
  // TODO: add game event handler

  const [message, setMessage] = useState('')
  const [showDialogBox, setShowDialogBox] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [showShop, setShowShop] = useState(false)
  const [showShopText, setShowShopText] = useState(false)
  const [showInventory, setShowInventory] = useState(false)
  const [showUniswap, setShowUniswap] = useState(false)
  const [showTeleport12, setShowTeleport12] = useState(false)
  const [login, setLogin] = useState(false)
  const [username, setUsername] = useState('')
  const [gameManager, setGameManager] = useState(GameManager.getInstance())

  var token: string,
    token1: string = ''
  var tokenShopTextOn: string = ''
  var tokenShopTextOff: string = ''
  var tokenTeleport12On: string = ''
  var tokenTeleport12Off: string = ''

  const dialogBoxEventListener = ({ detail }: any) => {
    setMessage(detail.message)
    setShowDialogBox(true)
  }

  // listen for login event
  const loginEventListener = ({ detail }: any) => {
    setShowLogin(false)
  }
  const shopEventListener = (msg: string, data: any) => {
    setShowShop(true)
  }
  const shopTextEventListener = (msg: string, data: any) => {
    setShowShopText(true)
  }
  const shopTextStopEventListener = (msg: string, data: any) => {
    setShowShopText(false)
    setShowShop(false)
  }
  const stopEventListener = (msg: string, data: any) => {
    setShowShop(false)
  }

  const teleportEventListener = (msg: string, data: any) => {
    setShowTeleport12(true)
  }
  const teleportStopEventListener = (msg: string, data: any) => {
    setShowTeleport12(false)
  }

  function escFunction(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      //Do whatever when esc is pressed
      setShowInventory(false)
      setShowShop(false)
      setShowLogin(false)

      gameManager.values['shopText'] = false
      gameManager.values['shopOpen'] = false
    }
  }

  function handleInventory(event: MouseEvent<HTMLButtonElement>) {
    setShowInventory(true)
  }
  // todo:  pass callback to login page
  const loginDone = useCallback(
    ({ login, name }: any) => {
      const customEvent = new CustomEvent('end-login')
      window.dispatchEvent(customEvent)
      // setShowLogin(false);
      setLogin(login)
      if (login) {
        setUsername(name)
      }
    },
    ['no idea']
  )

  const dialogDone = useCallback(() => {
    const customEvent = new CustomEvent('end-dialog')
    window.dispatchEvent(customEvent)

    setMessage('')
    setShowDialogBox(false)
  }, ['no idea'])

  function handleClick() {
    // Changing state
    setMessage('Click!')
    setShowDialogBox(!showDialogBox)
  }

  useEffect(() => {
    window.addEventListener('start-dialog', dialogBoxEventListener)
    window.addEventListener('end-login', loginEventListener)
    token = PubSub.subscribe('player:shop', shopEventListener)
    token1 = PubSub.subscribe('player:close', stopEventListener)
    tokenShopTextOn = PubSub.subscribe('player:shopText', shopTextEventListener)
    tokenShopTextOff = PubSub.subscribe(
      'player:shopTextStop',
      shopTextStopEventListener
    )

    tokenTeleport12On = PubSub.subscribe(
      'teleport12:text',
      teleportEventListener
    )
    tokenTeleport12Off = PubSub.subscribe(
      'teleport12:textStop',
      teleportStopEventListener
    )

    document.addEventListener('keydown', escFunction, false)
    // window.addEventListener('player:shop', shopEventListener);
    // window.addEventListener('player:close', stopEventListener);
    return () => {
      window.removeEventListener('start-dialog', dialogBoxEventListener)
      window.removeEventListener('end-login', loginEventListener)
      // window.removeEventListener('player:shop', shopEventListener);
      // window.removeEventListener('player:close', stopEventListener);
      PubSub.unsubscribe(token)
      PubSub.unsubscribe(token1)
      PubSub.unsubscribe(tokenShopTextOn)
      PubSub.unsubscribe(tokenShopTextOff)
      PubSub.unsubscribe(tokenTeleport12On)
      PubSub.unsubscribe(tokenTeleport12Off)

      document.removeEventListener('keydown', escFunction, false)
    }
  })

  return (
    <div>
      <Header height={64} px="xl">
        <Group align="center" className="h-full max-w-screen-xl">
          <Anchor href="https://flowbite.com">
            <Group align="center" spacing="xs">
              <Avatar
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
              />
              <Title order={2}>PEPA</Title>
            </Group>
          </Anchor>
          <Group spacing="xl" position="center" className="grow">
            <Button
              onClick={() => {
                setShowLogin(true)
              }}>
              {login ? username : 'Login'}
            </Button>
            <Button variant="light">Shop</Button>
            <Button variant="light">Home</Button>
            <Button
              variant="light"
              onClick={() => {
                setShowUniswap(!showUniswap)
              }}>
              Uniswap
            </Button>
            <Button variant="light" onClick={handleInventory}>
              Inventory
            </Button>
          </Group>
        </Group>
      </Header>

      <Sidebar
        showShopText={showShopText}
        showUniswap={showUniswap}
        showDialogBox={showDialogBox}
        showLogin={showLogin}
        showShop={showShop}
        showInventory={showInventory}
        message={message}
        dialogDone={dialogDone}
        loginDone={loginDone}
        username={username}
        teleport12={showTeleport12}
      />
      {/* {showUniswap && 
                <Iframe iframe={iframe} /> 
                }


                {showDialogBox && (
                    <MessageBox
                        message={message}
                        onDone={dislogDone}
                    />
                )}

                {showLogin && (
                    <SigninBox
                        message={message}
                        Signin={loginDone}
                    />
                )}

                {showShop && (
                    <ShopUI />
                    // <Shop message={message}
                    // Signin={loginDone}/>
                )
                }

                {showInventory && (
                    <InventoryUI />
                    // <Shop message={message}
                    // Signin={loginDone}/>
                )
                } */}
      {/* 
                <EthersContext />
                <FuelApp /> */}
    </div>
  )
}

export default UI
