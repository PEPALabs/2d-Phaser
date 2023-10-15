import { useEffect, useState } from 'react'
import socket from '../../../multiplayer/socket'

const useSocketStatus = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [closeEvent, setCloseEvent] = useState<CloseEvent>(null)

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    const handleClose = (evnet: CloseEvent) => {
      if (evnet.code > 4000) {
        socket['_shouldReconnect'] = false
        setCloseEvent(evnet)
      }

      setIsOpen(false)
    }

    socket.addEventListener('open', handleOpen)
    socket.addEventListener('close', handleClose)

    return () => {
      socket.removeEventListener('open', handleOpen)
      socket.removeEventListener('close', handleClose)

      socket.close()
    }
  }, [])

  return { isOpen, closeEvent }
}

export default useSocketStatus
