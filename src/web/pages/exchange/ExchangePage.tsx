/// <reference types="@fuel-wallet/sdk" />
import React, { useState, useEffect } from 'react'
import { Center, Card, Tabs, Space, Group, Stack, Box } from '@mantine/core'
import PepaLogo from './components/PepaLogo'
import { useFuel } from './hooks/useFuel'
import { useIsConnected } from './hooks/useIsConnected'
import { FuelConnect, SwapButton } from './components/FuelConnect'
import { useLoading } from './hooks/useLoading'
import type { Asset } from '@fuel-wallet/sdk'
import { BaseAssetId, Wallet } from 'fuels'
import { ethers } from 'ethers'

const pairs = [['ETH', 'PEPA']]

type SwapInputProps = {
  token: string
  amount: string
  setAmount: (amount: string) => void
  disabled: boolean
  readOnly: boolean
  balance: string
}

const SwapInput = ({
  token,
  amount,
  setAmount,
  disabled,
  readOnly,
  balance
}: SwapInputProps) => {
  return (
    <fieldset
      disabled={disabled}
      className="mb-1 flex flex-col rounded-xl border border-pepa-blue bg-pepa-lightGreen/10 px-6 py-4 text-pepa-textBlue">
      <div className="flex flex-row justify-between">
        <label
          htmlFor={token + '_amount'}
          className="mb-2 w-1/3 text-lg font-bold">
          {token}
        </label>
        <label
          htmlFor={token + '_balance'}
          className="mb-2 w-1/3 text-right text-lg">
          Balance: {balance ? balance : '0.0'}
        </label>
      </div>

      <input
        type="text"
        id={token + '_amount'}
        placeholder="0.0"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        readOnly={readOnly}
        className="w-full border-0 bg-transparent text-3xl font-bold text-pepa-textBlue focus:border-0 focus:!outline-none focus:ring-0"
      />
    </fieldset>
  )
}

type ChangeDirectionButtonProps = {
  zeroForOne: boolean
  setZeroForOne: (zeroForOne: boolean) => void
  isDisabled: boolean
}

const ChangeDirectionButton = ({
  zeroForOne,
  setZeroForOne,
  isDisabled
}: ChangeDirectionButtonProps) => {
  return (
    <div className="w-full text-center">
      <button
        className="swap-form-change-button my-3 h-10 w-10 cursor-pointer select-none rounded-full border-0 bg-pink-300 bg-cover p-0"
        disabled={isDisabled}
        onClick={e => {
          e.preventDefault()
          setZeroForOne(!zeroForOne)
        }}>
        {/* <img src="/assets/images/swap-form-change.png" className="w-40"></img> */}
      </button>
    </div>
  )
}

const ExchangePage = () => {
  const pair = pairs[0]

  const enabled = true

  const [zeroForOne, setZeroForOne] = useState(true)
  const [amount0, setAmount0] = useState()
  const [amount1, setAmount1] = useState()
  const [token0, setToken0] = useState()
  const [token1, setToken1] = useState()
  const [manager, setManager] = useState()
  const [quoter, setQuoter] = useState()
  const [loading, setLoading] = useState(false)

  const setAmount_ = setAmountFn => {
    return amount => {
      amount = amount || 0
      setAmountFn(amount)
    }
  }

  const [fuel, notDetected] = useFuel()
  const [connected, setConnected] = useState(false)
  const [currentAccount, setCurrentAccount] = useState<string>('')
  const [assets, setAssets] = useState<Asset[]>()
  const [wallet, setWallet] = useState<Wallet>()
  const [ethBalance, setEthBalance] = useState<string>()

  useEffect(() => {
    async function getEthBalance() {
      const accounts = await fuel.accounts()
      const account = accounts[0]
      const wallet = await fuel.getWallet(account)
      const balance = await wallet.getBalance(BaseAssetId)
      const balances = await wallet.getBalances()
      // console.log(JSON.stringify(wallet) + ':' + JSON.stringify(ethBalance))
      console.log(balances)
      setWallet(wallet)
      setEthBalance(ethers.formatUnits(balance.toNumber(), 9))
    }

    if (!ethBalance) getEthBalance()
  }, [wallet, ethBalance, fuel, currentAccount])

  // console.log(currentAccount)

  return (
    <>
      <Stack
        className="relative h-full w-full !bg-cover"
        bg="url(/assets/images/main-background.png)">
        <PepaLogo />
        <Center className="h-full px-8 py-8 lg:px-0">
          <Card withBorder className="w-full lg:w-7/12 xl:w-1/2 2xl:w-1/3">
            <Tabs color="pink" defaultValue="swap">
              <Group justify="space-between">
                <Tabs.List>
                  <Tabs.Tab value="swap">Swap</Tabs.Tab>
                  <Tabs.Tab value="pool">Pool</Tabs.Tab>
                </Tabs.List>
              </Group>
              <Space h={16} />
              <Tabs.Panel value="swap">
                <Box mx="auto" className="w-full">
                  <Box className="flex w-full justify-end pb-4">
                    <FuelConnect
                      connected={connected}
                      setConnected={setConnected}
                      currentAccount={currentAccount}
                      setCurrentAccount={setCurrentAccount}
                      assets={assets}
                      setAssets={setAssets}
                    />
                  </Box>
                  <SwapInput
                    amount={zeroForOne ? amount0 : amount1}
                    setAmount={setAmount_(zeroForOne ? setAmount0 : setAmount1)}
                    token={zeroForOne ? pair[0] : pair[1]}
                    disabled={!enabled || loading}
                    readOnly={false}
                    balance={connected && ethBalance}
                  />
                  <ChangeDirectionButton
                    zeroForOne={zeroForOne}
                    setZeroForOne={setZeroForOne}
                    isDisabled={!enabled || loading}
                  />
                  <SwapInput
                    amount={zeroForOne ? amount1 : amount0}
                    setAmount={setAmount_(zeroForOne ? setAmount0 : setAmount1)}
                    disabled={!enabled || loading}
                    readOnly={true}
                    token={zeroForOne ? pair[1] : pair[0]}
                    balance=""
                  />
                  <SwapButton
                    connected={connected}
                    setConnected={setConnected}
                    currentAccount={currentAccount}
                    setCurrentAccount={setCurrentAccount}
                  />

                  {/* {assets?.length ? (
                    <>
                      {assets.map(asset => (
                        <div key={asset.assetId}>
                          {asset.name} ({asset.symbol}): {asset.assetId}
                        </div>
                      ))}
                    </>
                  ) : (
                    <div> No assets </div>
                  )} */}
                </Box>
              </Tabs.Panel>
              <Tabs.Panel value="pool">
                <Box mx="auto">
                  This is pool
                  <FuelConnect
                    connected={connected}
                    setConnected={setConnected}
                    currentAccount={currentAccount}
                    setCurrentAccount={setCurrentAccount}
                    assets={assets}
                    setAssets={setAssets}
                  />
                </Box>
              </Tabs.Panel>
            </Tabs>
          </Card>
        </Center>
      </Stack>
    </>
  )
}

export default ExchangePage

export const Component = ExchangePage
