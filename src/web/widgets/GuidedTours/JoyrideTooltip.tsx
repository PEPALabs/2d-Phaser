import React from 'react'
import { Box, Card, Group, Text, Button, Stack, Title } from '@mantine/core'
import { TooltipRenderProps } from 'react-joyride'

const JoyrideTooltip = ({
  tooltipProps,
  step,
  isLastStep,
  skipProps,
  index,
  backProps,
  primaryProps,
  continuous
}: TooltipRenderProps) => {
  return (
    <Card className="max-w-sm" {...tooltipProps}>
      <Stack spacing="sm">
        <Title order={2}>{step.title}</Title>
        <Text>{step.content}</Text>
        <Group position="apart">
          <Box>
            {!isLastStep && (
              <Button variant="default" {...skipProps}>
                Skip
              </Button>
            )}
          </Box>
          <Group>
            {index > 0 && (
              <Button variant="light" {...backProps}>
                Back
              </Button>
            )}
            <Button {...primaryProps}>
              {isLastStep ? 'Complete' : 'Next'}
            </Button>
          </Group>
        </Group>
      </Stack>
    </Card>
  )
}

export default JoyrideTooltip
