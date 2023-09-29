import React, { PropsWithChildren } from 'react'
import {
  BackgroundImage,
  Modal,
  ScrollArea,
  Stack,
  Title,
  Image,
  SimpleGrid,
  Space,
  Box,
  ActionIcon,
  Group
} from '@mantine/core'
import { useMatch, useNavigate } from 'react-router-dom'
import usePageMetadata from './usePageMetadata'

const SubWindow = ({ children }: PropsWithChildren<{}>) => {
  const { title, titleIcon } = usePageMetadata()

  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/home')
  }

  const isHomePage = useMatch('/home')

  return (
    <Modal
      opened={!isHomePage}
      onClose={handleClose}
      centered
      size="72%"
      padding={0}
      returnFocus={false}
      withCloseButton={false}
      classNames={{ content: 'bg-transparent overflow-y-visible' }}>
      <BackgroundImage
        src="/assets/images/subwindow-background.png"
        className="aspect-[1836/1224]">
        <Stack align="center" className="h-full overflow-hidden">
          <SimpleGrid
            cols={3}
            className="h-[14%] w-full items-center"
            px="lg"
            py="sm">
            <Space />
            <Group className="justify-self-center" wrap="nowrap">
              <Image
                src={titleIcon}
                alt={title}
                className="h-14 w-16 basis-16"
              />
              <Title c="secondary" className="whitespace-nowrap">
                {title}
              </Title>
            </Group>
            <Box className="self-start justify-self-end">
              <ActionIcon
                radius="xl"
                variant="transparent"
                onClick={handleClose}>
                <Image
                  src="/assets/images/close-icon.png"
                  alt="close subwindow"
                />
              </ActionIcon>
            </Box>
          </SimpleGrid>
          <ScrollArea
            className="h-full w-full"
            offsetScrollbars
            classNames={{ viewport: '[&>div]:h-full px-14' }}>
            {children}
          </ScrollArea>
          <Space className="h-[5%]" />
        </Stack>
      </BackgroundImage>
    </Modal>
  )
}

export default SubWindow
