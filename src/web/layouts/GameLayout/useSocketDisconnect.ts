import { useEffect } from 'react'
import socket from '../../../multiplayer/socket'

const useSocketDisconnect = () => {
  useEffect(() => {
    return () => {
      socket.close()
    }
  })
}

export default useSocketDisconnect
