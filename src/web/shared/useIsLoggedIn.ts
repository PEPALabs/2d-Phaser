import useAuthStore from './useAuthStore'

const useIsLoggedIn = () => {
  const accessToken = useAuthStore(state => state.token)

  return !!accessToken
}

export default useIsLoggedIn
