import React, { useState } from 'react'
import {
  Affix,
  rem,
  Card,
  Text,
  Stack,
  ScrollArea,
  TextInput,
  Group,
  ActionIcon,
  useMantineTheme
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
    <Affix position={{ bottom: rem(320), right: rem(60) }}>
      <Card className="max-w-sm w-96" withBorder shadow="sm">
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw="bold">Chat History</Text>
        </Card.Section>
        <Card.Section inheritPadding>
          <ScrollArea className="h-96">
            <Stack spacing="lg" py="md">
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
            </Stack>
          </ScrollArea>
        </Card.Section>
        <Card.Section inheritPadding pb="xs">
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
        </Card.Section>
      </Card>
    </Affix>
  )
}
export default ChatBox
