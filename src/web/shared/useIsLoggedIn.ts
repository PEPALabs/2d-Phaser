import useAuthStore from './useAuthStore'
import env from './env'

const useIsLoggedIn = () => {
  const token = useAuthStore(state => state.token)

  if (env.REQUIRED_PASSWORD === 'false') {
    return true
  }

  return !!token
}

export default useIsLoggedIn
