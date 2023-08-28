import { useSearchParams } from 'react-router-dom'

const useQuestCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams([['category', 'all']])

  const category = searchParams.get('category')

  const setCategory = (value: string) => {
    setSearchParams({ category: value })
  }

  return { category, setCategory }
}

export default useQuestCategory
