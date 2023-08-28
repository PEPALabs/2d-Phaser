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
import { type PlantType } from '../../../../../data/items.type'
import { plantActions } from '../../../../../data/useGameStore'

interface PlantCardProps {
  plant: PlantType
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const onClickPlant = () => {
    console.log('Planting')
    const tmpPlant: PlantType = { ...plant }
    tmpPlant.state = 'PLANTING'
    plantActions.updatePlant(tmpPlant, plant.id)
  }

  const onClickHarvest = () => {
    console.log('Harvesting')
    plantActions.removePlant(plant.id)
  }

  return (
    <Card className="border-image-second border-solid">
      <Flex justify="space-between" align="center">
        <Group spacing="xs" noWrap>
          <Image width={80} height={80} src={null} withPlaceholder />
          <Stack spacing="xs">
            <Title order={5} className="tracking-wider">
              {plant.name}
            </Title>
            <Text size="sm">{plant.description}</Text>
          </Stack>
        </Group>
        <Flex className="basis-24" justify="flex-end">
          {match(plant.state)
            .with('EMPTY', () => (
              <Button
                className="tracking-wider"
                onClick={onClickPlant}
                color="green">
                <Text size="sm">Plant</Text>
              </Button>
            ))
            .with('PLANTING', () => (
              <Button className="tracking-wider" disabled color="grey">
                <Text size="sm">Planting</Text>
              </Button>
            ))
            .otherwise(() => (
              <Button
                className="tracking-wider"
                onClick={onClickHarvest}
                color="yellow">
                <Text size="sm">Harvest</Text>
              </Button>
            ))}
        </Flex>
      </Flex>
    </Card>
  )
}

export default PlantCard
