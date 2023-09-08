import React from 'react'
import { Box, Group, Paper, Text } from '@mantine/core'
import { SceneMessage } from '../../../multiplayer/emitter'

interface ChatMessageProps {
  message: SceneMessage
}

function ChatMessage({ message }: ChatMessageProps) {
  return (
    <Group align="flex-start" noWrap>
      <Box>
        <Group spacing="xs" align="center">
          <Text size="md" color="primary" fw="bold">
            {message.sender}
          </Text>
        </Group>
        <Paper
          className="mt-1 max-w-fit bg-gray-100"
          px="sm"
          py="xs"
          radius="md">
          <Text>{message.content}</Text>
        </Paper>
      </Box>
    </Group>
  )
}

export default ChatMessage
