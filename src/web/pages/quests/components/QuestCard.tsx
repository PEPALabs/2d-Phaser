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
      sx={
        isActive && {
          ...theme.focusRingStyles.styles(theme)
        }
      }
      className="mb-10 ml-2 mr-5 overflow-hidden first:mt-3 last:mb-3"
      onClick={onClick}>
      <UnstyledButton
        className="border-image-second"
        py="md"
        px="lg"
        component={Group}
        position="apart">
        <Stack spacing="xs" className="tracking-wider">
          <Box>
            <Text color={theme.primaryColor} size="sm">
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
              leftIcon={<IconMapPin size="1rem" />}>
              {questItem.questLocation}
            </Button>
          </Group>
        </Stack>
        {questItem.questStatus === 'Completed' ? (
          // awaiting rewards
          <Button
            onClick={questUpdate}
            rightIcon={<IconCheck size="1rem" />}
            className="tracking-wider">
            Take Rewards
          </Button>
        ) : questItem.questStatus === 'In Progress' ? (
          <Button
            rightIcon={<IconProgress size="1rem" />}
            className="tracking-wider">
            In Progress
          </Button>
        ) : questItem.questStatus === 'Available' ? (
          <Button
            onClick={questUpdate}
            rightIcon={<IconArrowRight size="1rem" />}
            className="tracking-wider">
            Start Quest
          </Button>
        ) : (
          <Button
            className="tracking-wider"
            color="gray"
            disabled
            rightIcon={<IconArchive size="1rem" />}>
            Archived
          </Button>
        )}
      </UnstyledButton>
    </Paper>
  )
}

export default QuestCard
