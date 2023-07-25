import { create } from 'zustand'
import { type ItemType } from '../../../../data/items.type'
import { getItems } from '../../../../utils/getItems'

interface InventoryStoreState {
  products: ItemType[]
  balance: number
  index: number
  setIndex: (newIndex: number) => void
  updateAmount: (count: number) => void
}

const useInventoryStore = create<InventoryStoreState>()(set => ({
  products: getItems(),
  balance: 1000,
  index: 0,
  setIndex: newIndex => {
    set({ index: newIndex })
  },
  updateAmount(count) {
    set(state => {
      const products = [...state.products]

      const product = products[state.index]

      product.value = (+product.value - count).toString()

      return { products }
    })
  }
}))

export default useInventoryStore
