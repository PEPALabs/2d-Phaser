import { create } from 'zustand'
import { EnterSceneData } from '../web/shared/emitter'

const useSceneDataStore = create<EnterSceneData | null>()(() => null)

export default useSceneDataStore
