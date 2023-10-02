import React from 'react'
import { ActionIcon, Group, Image, Pill, Stack, Tooltip } from '@mantine/core'

const PlayerInfo = () => {
  return (
    <Group align="start" className="relative ml-7">
      <Tooltip label="Information" position="right">
        <ActionIcon className="absolute -bottom-4 -left-3.5">
          <Image
            src="/assets/images/player-info-icon.png"
            alt="player info"
            className="h-14 w-14"
          />
        </ActionIcon>
      </Tooltip>

      <Image
        src="/assets/images/pepa-avtar.png"
        alt="player avtar"
        className="h-24 w-24"
      />

      <Stack gap="sm">
        <Pill
          className="w-fit border-2 border-solid border-[#4A2E10] bg-white font-JotiOne text-[#C98F49]"
          radius="md"
          size="xl">
          Hello World
        </Pill>
        <Pill className="bg-white text-[#C98F49]" radius="md" size="md">
          helloworld@gmail.com
        </Pill>
      </Stack>
    </Group>
  )
}

export default PlayerInfo
