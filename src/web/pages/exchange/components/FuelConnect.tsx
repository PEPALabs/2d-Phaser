/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'

import { Box, Button, Tag, Text } from '@fuel-ui/react'
import { Button as Btn } from '@mantine/core'
import { cssObj } from '@fuel-ui/css'
import { useFuel } from '../hooks/useFuel'
import { useLoading } from '../hooks/useLoading'

type ButtonProps = {
  connected: boolean
  setConnected: (connected: boolean) => void
  currentAccount: string
  setCurrentAccount: (currentAccount: string) => void
}

export function FuelConnect({
  connected,
  setConnected,
  currentAccount,
  setCurrentAccount
}: ButtonProps) {
  const [fuel, notDetected] = useFuel()

  const [handleConnect, isConnecting, errorConnect] = useLoading(async () => {
    console.log('Request connection to Wallet!')
    /* connect:start */
    const isConnected = await fuel.connect()
    console.log('Connection response', isConnected)
    /* connect:end */
    setConnected(isConnected)
  })

  const [handleDisconnect, isDisconnecting, errorDisconnect] = useLoading(
    async () => {
      console.log('Request disconnection to Wallet!')
      /* disconnect:start */
      await fuel.disconnect()
      /* disconnect:end */
      setConnected(false)
      console.log('Disconnection response')
    }
  )

  const [handleCurrentAccount, errorCurrentAccount] = useLoading(async () => {
    const currentAccount = await fuel.currentAccount()
    setCurrentAccount(currentAccount)
  })

  const handleAccountEvent = (account: string) => {
    setCurrentAccount(account)
  }

  useEffect(() => {
    // listen to the current event account, and call the handleAccountEvent
    fuel?.on(fuel.events.currentAccount, handleAccountEvent)
    return () => {
      // remove the listener when the component is unmounted
      fuel?.off(fuel.events.currentAccount, handleAccountEvent)
    }
  }, [fuel])
  /* eventCurrentAccount:end */

  useEffect(() => {
    if (connected) handleCurrentAccount()
  }, [connected])

  // const errorMessage = errorConnect || errorDisconnect || notDetected

  return (
    <Box>
      <Box.Flex gap="$4">
        {/* {errorMessage} */}
        {!connected ? (
          <Button
            onPress={handleConnect}
            isLoading={isConnecting}
            isDisabled={isConnecting || !fuel}
            className="!border-black/20 !bg-pepa-pink !font-normalText !font-bold">
            Connect Wallet
          </Button>
        ) : (
          <Box className="flex flex-row">
            <Box.Stack
              gap="$3"
              css={{ mt: '$2', mr: '$3' }}
              className="!font-normalText">
              {!!currentAccount && (
                <Box.Stack>
                  <Text
                    key={currentAccount}
                    className="text-black-70 !font-normalText">
                    {currentAccount.slice(0, 6) +
                      '...' +
                      currentAccount.slice(-6)}
                  </Text>
                </Box.Stack>
              )}
              {currentAccount.length < 1 && <Text>No account connected</Text>}
            </Box.Stack>
            <Button
              onPress={handleDisconnect}
              isLoading={isDisconnecting}
              isDisabled={isDisconnecting || !connected || !fuel}
              className="!border-black/20 !bg-pepa-pink !font-normalText !font-bold">
              {connected ? 'Disconnect' : 'Disconnected'}
            </Button>
          </Box>
        )}
      </Box.Flex>
    </Box>
  )
}

export function SwapButton({
  connected,
  setConnected,
  currentAccount,
  setCurrentAccount
}: ButtonProps) {
  const [fuel, notDetected] = useFuel()

  console.log(notDetected)

  return (
    <Btn
      size="lg"
      fullWidth
      data-disabled={notDetected.length > 1 || !connected}
      className={`mt-4 bg-pepa-pink text-xl ${
        notDetected.length > 1 || !connected ? '!bg-gray-100' : ''
      }`}>
      {notDetected ? (
        <div>Install Fuel Wallet</div>
      ) : (
        <div>{connected ? 'Swap' : 'Connect Wallet'}</div>
      )}
    </Btn>
  )
}
