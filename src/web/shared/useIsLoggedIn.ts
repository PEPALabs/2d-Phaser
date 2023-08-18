import useAuthStore from './useAuthStore'

const useIsLoggedIn = () => {
  const token = useAuthStore(state => state.token)

  return !!token
}

export default useIsLoggedIn
