import React, { useEffect, useRef } from 'react'
import {
  AppShell,
  Stack,
  ScrollArea,
  TextInput,
  Group,
  ActionIcon,
  Title,
  Box
} from '@mantine/core'

import ChatMessage from './ChatMessage'
import { IconSend } from '@tabler/icons-react'
import useGameStore, { messageActions } from '../../../data/useGameStore'
import useChatMessageForm from './useChatMessageForm'
import emitter from '../../../multiplayer/emitter'

function ChatBox() {
  const messages = useGameStore(state => state.messages)

  const { form, handleSubmit } = useChatMessageForm()

  const viewportRef = useRef<HTMLDivElement>()

  useEffect(() => {
    emitter.on('receive_scene_message', data => {
      messageActions.addMessage(data.message)
    })
    return () => {
      emitter.off('receive_scene_message')
    }
  }, [])

  useEffect(() => {
    viewportRef.current.scrollTo({
      top: viewportRef.current.scrollHeight,
      behavior: 'smooth'
    })
  }, [messages])

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
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
          </Stack>
        </AppShell.Section>
      </Stack>
      <Box component="form" onSubmit={handleSubmit}>
        <Group gap="xs">
          <TextInput
            className="grow"
            placeholder="Type something..."
            {...form.getInputProps('message')}
          />
          <ActionIcon
            variant="filled"
            type="submit"
            size="lg"
            color="secondary">
            <IconSend size="1.3rem" />
          </ActionIcon>
        </Group>
      </Box>
    </>
  )
}
export default ChatBox
