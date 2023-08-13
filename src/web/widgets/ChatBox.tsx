import React, { useEffect, useRef, useState } from 'react'
import {
  Stack,
  ScrollArea,
  TextInput,
  Group,
  ActionIcon,
  useMantineTheme,
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

  const theme = useMantineTheme()

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
      <Title color="primary" order={3}>
        Chat History
      </Title>
      <Navbar.Section
        className="border-image-primary"
        grow
        component={ScrollArea}
        viewportRef={viewportRef}>
        <Stack spacing="lg">
          {messages
            .filter(item => item.message.trim() !== '')
            .map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
        </Stack>
      </Navbar.Section>
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
          color={theme.primaryColor}
          onClick={handleSend}>
          <IconSend size="1.3rem" />
        </ActionIcon>
      </Group>
    </>
  )
}
export default ChatBox
