import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core'

import React, { ReactElement } from 'react'
import { useState, useEffect, useCallback } from 'react'

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 42161]
})
const chainIdToName = {
  1: 'ETH Mainnet',
  3: 'ETH Ropsten',
  4: 'ETH Rinkeby',
  5: 'ETH Goerli',
  42: 'ETH Kovan',
  42161: 'Arbitrum One'
}
function ConnectWallet() {
  const { active, account, chainId, library, connector, activate, deactivate } =
    useWeb3React()

  async function connect(event) {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect(event) {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={connect}
        onMouseDown={e => {
          e.stopPropagation()
        }}
        className="mb-4 mt-20 w-56 rounded-lg bg-blue-600 py-2 text-lg font-bold text-white hover:bg-blue-800">
        Connect to MetaMask
      </button>
      {active ? (
        <span>
          Connected with <b>{account}</b>
        </span>
      ) : (
        <span>Not connected</span>
      )}
      {active ? (
        <span>
          Chain <b>{chainIdToName[chainId]}</b>
        </span>
      ) : (
        <></>
      )}
      <button
        onClick={disconnect}
        onMouseDown={e => {
          e.stopPropagation()
        }}
        className="mb-4 mt-20 w-56 rounded-lg bg-blue-600 py-2 text-lg font-bold text-white hover:bg-blue-800">
        Disconnect
      </button>
    </div>
  )
}

export default ConnectWallet
