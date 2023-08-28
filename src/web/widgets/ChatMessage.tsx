import React from 'react'
import { Avatar, Badge, Box, Group, Paper, Text } from '@mantine/core'
import { IconUser } from '@tabler/icons-react'

interface ChatMessageProps {
  message: {
    sender: string
    message: string
  }
}

function ChatMessage({ message }: ChatMessageProps) {
  return (
    <Group align="flex-start" noWrap spacing="xs">
      <Avatar color="primary" radius="xl">
        <IconUser />
      </Avatar>
      <Box>
        <Group spacing="xs" align="center">
          <Badge size="sm">npc</Badge>
          <Text color="dimmed" size="sm">
            {message.sender}
          </Text>
        </Group>
        <Paper className="mt-1 max-w-fit bg-gray-100" px="sm" py="xs">
          <Text>{message.message}</Text>
        </Paper>
      </Box>
    </Group>
  )
}

export default ChatMessage
