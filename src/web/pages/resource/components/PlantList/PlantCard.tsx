import React from 'react'
import {
  Card,
  Group,
  Button,
  Text,
  Stack,
  Title,
  Flex,
  Image
} from '@mantine/core'
import { match } from 'ts-pattern'
import { type PlantType } from '../../../../../data/plants'
import usePlantStore from '../../../../../data/plantStore'

interface PlantCardProps {
  plant: PlantType
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const { removePlant, updatePlant } = usePlantStore()

  const onClickPlant = () => {
    console.log('Planting')
    const tmpPlant: PlantType = { ...plant }
    tmpPlant.state = 'PLANTING'
    updatePlant(tmpPlant, plant.id)
  }

  const onClickHarvest = () => {
    console.log('Harvesting')
    removePlant(plant, plant.id)
  }

  return (
    <Card withBorder>
      <Flex justify="space-between" align="center">
        <Group spacing="xs" noWrap>
          <Image width={80} height={80} src={null} withPlaceholder />
          <Stack spacing="xs">
            <Title order={5}>{plant.name}</Title>
            <Text size="sm" color="dimmed">
              {plant.description}
            </Text>
          </Stack>
        </Group>
        <Flex className="basis-24" justify="flex-end">
          {match(plant.state)
            .with('EMPTY', () => (
              <Button onClick={onClickPlant} color="green">
                <Text size="sm">Plant</Text>
              </Button>
            ))
            .with('PLANTING', () => (
              <Button disabled color="grey">
                <Text size="sm">Planting</Text>
              </Button>
            ))
            .otherwise(() => (
              <Button onClick={onClickHarvest} color="yellow">
                <Text size="sm">Harvest</Text>
              </Button>
            ))}
        </Flex>
      </Flex>
    </Card>
  )
}

export default PlantCard
