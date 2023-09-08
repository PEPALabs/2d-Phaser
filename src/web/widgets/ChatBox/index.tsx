import React, { useEffect, useRef } from 'react'
import {
  Stack,
  ScrollArea,
  TextInput,
  Group,
  ActionIcon,
  Navbar,
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
  })

  useEffect(() => {
    viewportRef.current.scrollTo({
      top: viewportRef.current.scrollHeight,
      behavior: 'smooth'
    })
  }, [messages])

  return (
    <>
      <Title color="primary" order={3}>
        Chat History
      </Title>
      <Navbar.Section
        className="border-image-primary border-solid"
        grow
        component={ScrollArea}
        viewportRef={viewportRef}>
        <Stack spacing="lg" p="xs">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </Stack>
      </Navbar.Section>
      <Box component="form" onSubmit={handleSubmit}>
        <Group spacing="xs">
          <TextInput
            className="grow"
            placeholder="Type something..."
            {...form.getInputProps('message')}
          />
          <ActionIcon variant="filled" type="submit" size="lg" color="primary">
            <IconSend size="1.3rem" />
          </ActionIcon>
        </Group>
      </Box>
    </>
  )
}
export default ChatBox
