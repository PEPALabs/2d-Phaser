import { useEffect, useState } from 'react'
import socket from '../../../multiplayer/socket'

const useSocketStatus = () => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)

    socket.addEventListener('open', handleOpen)
    socket.addEventListener('close', handleClose)

    return () => {
      socket.removeEventListener('open', handleOpen)
      socket.removeEventListener('close', handleClose)

      socket.close()
    }
  }, [])

  return { isOpen }
}

export default useSocketStatus
