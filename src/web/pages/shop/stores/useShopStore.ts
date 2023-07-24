import { create } from 'zustand'
import { type ItemType } from '../../../../data/items.type'
import { getItems } from '../../../../utils/getItems'

interface ShopStoreState {
  products: ItemType[]
  amount: number
  index: number
  setIndex: (newIndex: number) => void
  purchase: (count: number) => void
}

const useShopStore = create<ShopStoreState>()(set => ({
  products: getItems(),
  amount: 1000,
  index: 0,
  setIndex: newIndex => {
    set({ index: newIndex })
  },
  purchase(count) {
    set(state => {
      const products = [...state.products]

      const product = products[state.index]

      product.value = (+product.value - count).toString()

      return { amount: state.amount - product.price * count, products }
    })
  }
}))

export default useShopStore
