import { BN, Provider, Wallet } from "fuels";
import { useEffect, useState } from "react";

import React, { ReactElement } from 'react'

import { useFuel } from "./useFuel";

function FuelApp() {
  const [fuel] = useFuel();
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState(0);
  const [account, setAccount] = useState(null);

  const provider = new Provider("https://beta-3.fuel.network/graphql");
//   const myWallet = Wallet.fromAddress("0x...", provider);

  async function connect(event) {
    try {
        const connected = await fuel.connect();
        // expect(connected).toBeTruthy();
        const currentAccount = await fuel.currentAccount();
        setAccount(currentAccount);
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect(event) {
    try {
        const isConnected = await fuel.disconnect();
        // expect(isConnected).toBeFalsy();
        setAccount(null);
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    async function handleConnection() {
      const isConnected = await fuel.isConnected();
      setIsConnected(isConnected);
    }

    if (fuel) {
      handleConnection();
    }

    fuel?.on(fuel.events.connection, handleConnection);
    return () => {
      fuel?.off(fuel.events.connection, handleConnection);
    };
  }, [fuel]);

  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={connect} onMouseDown={(e)=>{e.stopPropagation()}} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect Fuel</button>
      {isConnected ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
      <button onClick={disconnect} onMouseDown={(e)=>{e.stopPropagation()}} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Disconnect Fuel</button>
    </div>
  );
}

export default FuelApp;