import { matchPath, useLocation } from 'react-router-dom'
import { match } from 'ts-pattern'

const usePageTitle = () => {
  const location = useLocation()

  return match(location.pathname)
    .when(
      pathname => matchPath('/shop', pathname),
      () => 'PEPA Shop'
    )
    .when(
      pathName => matchPath('/uniswap', pathName),
      () => 'Uniswap'
    )
    .when(
      pathName => matchPath('/exchange', pathName),
      () => 'PEPA Exchange'
    )
    .when(
      pathName => matchPath('/inventory', pathName),
      () => 'PEPA Inventory'
    )
    .when(
      pathName => matchPath('/quests', pathName),
      () => 'PEPA Quest Book'
    )
    .when(
      pathName => matchPath('/dashboard', pathName),
      () => 'PEPA Dashboard'
    )
    .otherwise(() => '')
}

export default usePageTitle
