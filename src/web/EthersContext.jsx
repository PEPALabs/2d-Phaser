import { Web3ReactProvider, useWeb3React } from '@web3-react/core'

import { Web3Provider } from "@ethersproject/providers";

import { InjectedConnector } from "@web3-react/injected-connector";

import React, { ReactElement } from 'react'
import { useState } from 'react';

import  ConnectWallet  from './ConnectWallet';

const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  });


function getLibrary(provider) {
    return new Web3Provider(provider);
}


function EthersContext () {

    return (
            <Web3ReactProvider getLibrary={getLibrary}>

                <ConnectWallet />

            </Web3ReactProvider>
    )

};

export default EthersContext;