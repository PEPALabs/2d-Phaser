import React, { useState } from 'react'
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

import messageData from '../../data/messageData'
import ChatMessage from './ChatMessage'
import { IconSend } from '@tabler/icons-react'

function ChatBox() {
  const [messages, setMessage] = useState(messageData)
  const [text, setText] = useState('')
  const [username, setUsername] = useState('Test User')

  const theme = useMantineTheme()

  const handleSend = e => {
    e.preventDefault()
    const newMessage = {
      sender: username,
      message: text
    }
    setMessage([...messages, newMessage])
    // e.target.message.value = "";
    setText('')
  }

  return (
    <>
      <Title order={3}>Chat History</Title>
      <Navbar.Section grow component={ScrollArea}>
        <Stack spacing="lg">
          {messages.map((message, index) => (
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
