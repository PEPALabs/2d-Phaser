import { create } from 'zustand'
import { type PlantType } from './plants'

interface PlantStore {
  plants: { [key: string]: PlantType }
  populateId: (id: number) => void
  addPlant: (plant: PlantType, id: string | number) => void
  removePlant: (plant: PlantType, id: string | number) => void
  updatePlant: (plant: PlantType, id: string | number) => void
}

const usePlantStore = create<PlantStore>()(set => ({
  plants: {},
  populateId: id =>
    set(state => {
      const new_state = { plants: { ...state.plants } }
      if (Object.keys(state.plants).length == 0) {
        for (let i = 0; i < id; i++) {
          new_state.plants[String(i)] = null
        }
      }
      console.log('populate id 1', new_state)
      return new_state
    }),
  addPlant: (plant, id) =>
    set(state => {
      return { plants: { ...state.plants, [id]: plant } }
    }),
  removePlant: (plant, id) =>
    set(state => {
      const new_state = { plants: { ...state.plants } }
      new_state.plants[id] = null
      return new_state
    }),
  updatePlant: (plant, id) =>
    set(state => {
      const new_state = { plants: { ...state.plants } }
      new_state.plants[id] = plant
      return new_state
    })
}))

export default usePlantStore
