import useAuthStore from './useAuthStore'

const useIsLoggedIn = () => {
  const token = useAuthStore(state => state.token)

  // return !!token
  return true;
}

export default useIsLoggedIn
