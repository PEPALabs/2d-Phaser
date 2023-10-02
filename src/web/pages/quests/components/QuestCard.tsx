import React from 'react'
import {
  Badge,
  Title,
  Text,
  Group,
  Stack,
  Button,
  Box,
  UnstyledButton
} from '@mantine/core'
import {
  IconArchive,
  IconArrowRight,
  IconCheck,
  IconMapPin,
  IconProgress
} from '@tabler/icons-react'
import { match } from 'ts-pattern'
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
  return (
    <Box onClick={onClick} className="quest-item-background w-full">
      <UnstyledButton py="lg" px={56} component={Group} justify="space-between">
        <Stack gap="sm" align="start">
          <Box>
            <Text c="primary" fw="bold">
              {questItem.questTag}
            </Text>
            <Title order={2}>{questItem.questName}</Title>
          </Box>
          <Group>
            <Badge variant="white" size="lg" className="normal-case">
              {questItem.questTag}
            </Badge>
            <Button
              variant="subtle"
              color="dark"
              leftSection={<IconMapPin size="1rem" />}>
              {questItem.questLocation}
            </Button>
          </Group>
        </Stack>
        {match(questItem.questStatus)
          .with('Completed', () => (
            <Button
              onClick={questUpdate}
              rightSection={<IconCheck size="1rem" />}>
              Take Rewards
            </Button>
          ))
          .with('In Progress', () => (
            <Button rightSection={<IconProgress size="1rem" />}>
              In Progress
            </Button>
          ))
          .with('Available', () => (
            <Button
              onClick={questUpdate}
              rightSection={<IconArrowRight size="1rem" />}>
              Start Quest
            </Button>
          ))
          .otherwise(() => (
            <Button
              color="gray"
              disabled
              rightSection={<IconArchive size="1rem" />}>
              Archived
            </Button>
          ))}
      </UnstyledButton>
    </Box>
  )
}

export default QuestCard
