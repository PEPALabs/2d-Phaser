import React from 'react'
import { Tabs } from '@mantine/core'
import useProductCategory from '../hooks/useProductCategory'

interface ProductCategoryTab {
  name: string
  value: string
}

const productCategoryTabs: ProductCategoryTab[] = [
  { name: 'All', value: 'all' },
  { name: 'Plants', value: 'plants' },
  { name: 'Equipments', value: 'equipments' },
  { name: 'Buildings', value: 'buildings' },
  { name: 'Accessory', value: 'accessory' }
]

const ProductCategoryTabs = () => {
  const { category, setCategory } = useProductCategory()

  return (
    <Tabs
      className="border-image-primary"
      variant="pills"
      value={category}
      onTabChange={value => {
        setCategory(value)
      }}>
      <Tabs.List>
        {productCategoryTabs.map(tab => (
          <Tabs.Tab key={tab.name} value={tab.value}>
            {tab.name}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  )
}

export default ProductCategoryTabs
