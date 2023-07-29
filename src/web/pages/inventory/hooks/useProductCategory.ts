import { useSearchParams } from 'react-router-dom'

const useProductCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams([['category', 'all']])

  const category = searchParams.get('category')

  const setCategory = (value: string) => {
    setSearchParams({ category: value })
  }

  return { category, setCategory }
}

export default useProductCategory
