import React, { useEffect, useRef, useState } from 'react'
import {
  AppShell,
  Stack,
  ScrollArea,
  TextInput,
  Group,
  ActionIcon,
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
      <Stack className="grow overflow-hidden" gap={0}>
        <Title order={4} className="text-[#E17777]">
          Chat History
        </Title>
        <AppShell.Section
          grow
          component={ScrollArea}
          viewportRef={viewportRef}
          p="xs"
          style={theme => ({ borderRadius: theme.radius.lg })}
          className="border-solid border-[#F7CE88] bg-[#FCE8C6]">
          <Stack gap="lg">
            {messages
              .filter(item => item.message.trim() !== '')
              .map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
          </Stack>
        </AppShell.Section>
      </Stack>
      <Group gap="xs">
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
