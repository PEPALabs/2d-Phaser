import useAuthStore from './useAuthStore'
import env from './env'

const useIsLoggedIn = () => {
  const token = useAuthStore(state => state.token)

  // return !!token
  return true;
}

export default useIsLoggedIn
