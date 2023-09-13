import React, { useEffect, useRef, useState } from 'react'
import {
  Stack,
  ScrollArea,
  TextInput,
  Group,
  ActionIcon,
  Navbar,
  Title
} from '@mantine/core'

import ChatMessage from './ChatMessage'
import { IconSend } from '@tabler/icons-react'
import useGameStore, { messageActions } from '../../data/useGameStore'

function ChatBox() {
  const messages = useGameStore(state => state.messages)

  const [text, setText] = useState('')
  const [username, setUsername] = useState('player')

  const viewportRef = useRef<HTMLDivElement>()

  useEffect(() => {
    viewportRef.current.scrollTo({
      top: viewportRef.current.scrollHeight,
      behavior: 'smooth'
    })
  }, [messages])

  const handleSend = e => {
    e.preventDefault()
    const newMessage = {
      sender: username,
      message: text
    }
    messageActions.addMessage(newMessage)
    // e.target.message.value = "";
    setText('')
  }

  return (
    <>
      <Stack className="grow overflow-hidden" spacing={0}>
        <Title color="primary" order={4}>
          Chat History
        </Title>
        <Navbar.Section
          grow
          component={ScrollArea}
          viewportRef={viewportRef}
          p="xs"
          sx={theme => ({ borderRadius: theme.radius.lg })}
          className="border-solid border-[#F7CE88] bg-[#FCE8C6]">
          <Stack spacing="lg">
            {messages
              .filter(item => item.message.trim() !== '')
              .map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
          </Stack>
        </Navbar.Section>
      </Stack>
      <Group spacing="xs">
        <TextInput
          className="grow"
          placeholder="Type something..."
          value={text}
          onChange={e => setText(e.currentTarget.value)}
        />
        <ActionIcon
          variant="filled"
          size="lg"
          color="secondary"
          onClick={handleSend}>
          <IconSend size="1.3rem" />
        </ActionIcon>
      </Group>
    </>
  )
}
export default ChatBox
