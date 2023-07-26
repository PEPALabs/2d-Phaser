import React from 'react'
import ResourceSection from '../ResourceSection'
import { ScrollArea, Stack } from '@mantine/core'
import PlantCard from './PlantCard'
import useGameStore from '../../../../../data/useGameStore'

const PlantList = () => {
  const plants = useGameStore(state => state.plants)

  const plantData = Object.entries(plants)
    .map(item => {
      if (item[1]) {
        return item[1]
      }
    })
    .filter(item => item !== undefined)
  console.log(plantData, plants)

  return (
    <ResourceSection name="Plants">
      <ScrollArea h={420}>
        <Stack>
          {plantData.map((plant, index) => (
            <PlantCard key={index} plant={plant} />
          ))}
        </Stack>
      </ScrollArea>
    </ResourceSection>
  )
}

export default PlantList
