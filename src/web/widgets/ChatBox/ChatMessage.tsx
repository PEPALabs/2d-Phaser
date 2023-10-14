import React from 'react'
import { Avatar, Badge, Box, Group, Paper, Text } from '@mantine/core'
import { IconUser } from '@tabler/icons-react'
import { SceneMessage } from '../../../multiplayer/emitter'

interface ChatMessageProps {
  message: SceneMessage
}

function ChatMessage({ message }: ChatMessageProps) {
  return (
    <Group align="flex-start" wrap="nowrap" gap="xs">
      <Avatar color="secondary" radius="xl">
        <IconUser />
      </Avatar>
      <Box>
        <Group gap="xs" align="center">
          <Badge size="sm" color="secondary">
            npc
          </Badge>
          <Text c="dimmed" size="sm">
            {message.sender}
          </Text>
        </Group>
        <Paper className="mt-1 max-w-fit bg-gray-100" px="sm" py="xs">
          <Text>{message.content}</Text>
        </Paper>
      </Box>
    </Group>
  )
}

export default ChatMessage
