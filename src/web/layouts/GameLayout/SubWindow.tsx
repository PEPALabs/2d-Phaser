import React, { PropsWithChildren } from 'react'
import {
  ActionIcon,
  BackgroundImage,
  Divider,
  Image,
  Modal,
  Card,
  ScrollArea,
  Stack,
  Title,
  SimpleGrid,
  Space,
  Box
} from '@mantine/core'
import { useMatch, useNavigate } from 'react-router-dom'
import usePageMetadata from './usePageMetadata'

const SubWindow = ({ children }: PropsWithChildren<{}>) => {
  const { title, headerRightSection } = usePageMetadata()

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
      size="86%"
      padding={0}
      returnFocus={false}
      withCloseButton={false}
      classNames={{ content: 'bg-transparent overflow-y-visible' }}>
      <BackgroundImage
        src="/assets/images/subwindow-background.png"
        className="aspect-[1495/827]">
        <Stack align="center" className="h-full overflow-hidden px-14 py-6">
          <SimpleGrid cols={3} className="w-full" px="xl">
            <Space />
            <Card
              py={4}
              px="lg"
              radius="xl"
              shadow="lg"
              className="justify-self-center">
              <Title c="primary" order={2}>
                {title}
              </Title>
            </Card>
            <Box className="justify-self-end">{headerRightSection}</Box>
          </SimpleGrid>
          <Divider size="md" color="white" className="w-full" />
          <ScrollArea
            className="h-full w-full"
            offsetScrollbars
            classNames={{ viewport: '[&>div]:h-full' }}>
            {children}
          </ScrollArea>
        </Stack>
      </BackgroundImage>
      <ActionIcon
        radius="xl"
        size="xl"
        className="absolute -right-16 top-0"
        onClick={handleClose}>
        <Image src="/assets/images/close-icon.png" alt="close subwindow" />
      </ActionIcon>
    </Modal>
  )
}

export default SubWindow
