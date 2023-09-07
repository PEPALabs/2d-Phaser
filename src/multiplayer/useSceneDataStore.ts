import { create } from 'zustand'
import { EnterSceneData } from './emitter'

const useSceneDataStore = create<EnterSceneData | null>()(() => null)

export default useSceneDataStore
