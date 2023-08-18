import { create } from 'zustand'
import {
  persist,
  createJSONStorage,
  type StateStorage
} from 'zustand/middleware'
import Cookies from 'js-cookie'
import { type LoginData } from '../apis/userAPI/type'

const AUTH_STORAGE_KEY = 'auth-storage'

const cookieStorage: StateStorage = {
  getItem: (name: string) => {
    return Cookies.get(name) ?? null
  },
  setItem: (name: string, value: string) => {
    Cookies.set(name, value, { expires: 1 })
  },
  removeItem: (name: string) => {
    Cookies.remove(name)
  }
}

const useAuthStore = create<Partial<LoginData>>()(
  persist(() => ({}), {
    name: AUTH_STORAGE_KEY,
    storage: createJSONStorage(() => cookieStorage)
  })
)

export default useAuthStore
