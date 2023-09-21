import React from 'react'
import {
  Badge,
  Title,
  Text,
  Group,
  Stack,
  Button,
  Box,
  Paper,
  useMantineTheme,
  UnstyledButton
} from '@mantine/core'
import { clsx } from 'clsx'
import {
  IconArchive,
  IconArrowRight,
  IconCheck,
  IconMapPin,
  IconProgress
} from '@tabler/icons-react'
import { type QuestType } from '../../../../data/items.type'

interface QuestCardProps {
  questItem: QuestType
  questUpdate: () => void
  isActive: boolean
  onClick: () => void
}

function QuestCard({
  questItem,
  questUpdate,
  isActive,
  onClick
}: QuestCardProps) {
  const theme = useMantineTheme()

  return (
    <Paper
      withBorder
      radius="lg"
      style={{ borderColor: isActive ? 'transparent' : undefined }}
      className={clsx(
        'mb-10 ml-2 mr-5 overflow-hidden first:mt-3 last:mb-3',
        isActive && theme.focusClassName
      )}
      onClick={onClick}>
      <UnstyledButton
        className="border-image-second border-solid"
        py="md"
        px="lg"
        component={Group}
        justify="space-between">
        <Stack gap="xs" className="tracking-wider">
          <Box>
            <Text c={theme.primaryColor} size="sm">
              {questItem.questTag}
            </Text>
            <Title order={2}>{questItem.questName}</Title>
          </Box>
          <Group>
            <Badge size="lg" className="normal-case tracking-wider">
              {questItem.questTag}
            </Badge>
            <Button
              className="tracking-wider"
              variant="subtle"
              color="dark"
              leftSection={<IconMapPin size="1rem" />}>
              {questItem.questLocation}
            </Button>
          </Group>
        </Stack>
        {questItem.questStatus === 'Completed' ? (
          // awaiting rewards
          <Button
            onClick={questUpdate}
            rightSection={<IconCheck size="1rem" />}
            className="tracking-wider">
            Take Rewards
          </Button>
        ) : questItem.questStatus === 'In Progress' ? (
          <Button
            rightSection={<IconProgress size="1rem" />}
            className="tracking-wider">
            In Progress
          </Button>
        ) : questItem.questStatus === 'Available' ? (
          <Button
            onClick={questUpdate}
            rightSection={<IconArrowRight size="1rem" />}
            className="tracking-wider">
            Start Quest
          </Button>
        ) : (
          <Button
            className="tracking-wider"
            color="gray"
            disabled
            rightSection={<IconArchive size="1rem" />}>
            Archived
          </Button>
        )}
      </UnstyledButton>
    </Paper>
  )
}

export default QuestCard
