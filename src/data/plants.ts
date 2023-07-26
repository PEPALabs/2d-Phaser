import { PlantType } from './items.type'
import { plantActions } from './useGameStore'

export const plantData: PlantType[] = [
  {
    id: 0,
    name: 'Wheat',
    description: 'Plant Type Wheat: Generates 100 wheat',
    state: 'EMPTY',
    duration: 10000,
    seedTexture: 'guapen',
    plantTexture: 'FufuSuperDino'
  },
  {
    id: 1,
    name: 'Grass',
    state: 'EMPTY',
    description: 'Plant Type Grass: Generates 1 Grass',
    duration: 30000,
    seedTexture: 'guapen',
    plantTexture: 'FufuSuperDino'
  },
  {
    id: 2,
    name: 'Grass',
    description: 'Plant Type Grass: Generates 2 Grass',
    state: 'PLANTING',
    duration: 20000,
    seedTexture: 'guapen',
    plantTexture: 'FufuSuperDino'
  },
  {
    id: 3,
    name: 'Apple',
    description: 'Plant Type Apple: Generates 4 Apple',
    state: 'READY',
    duration: 40000,
    seedTexture: 'guapen',
    plantTexture: 'FufuSuperDino'
  }
]

export const plants = {
  1: {
    id: 1,
    name: 'Guapen',
    seedTexture: 'guapen',
    plantTexture: 'FufuSuperDino'
  }
}

plantActions.populateId(20)

for (var i = 0; i < plantData.length; i++) {
  plantActions.addPlant(plantData[i], String(plantData[i].id))
}
