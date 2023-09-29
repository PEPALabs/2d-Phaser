import { matchPath, useLocation } from 'react-router-dom'
import { match } from 'ts-pattern'

interface PageMetadata {
  title: string
  titleIcon: string
}

const usePageMetadata = () => {
  const location = useLocation()

  return match<string, PageMetadata>(location.pathname)
    .when(
      pathname => matchPath('/shop', pathname),
      () => ({
        title: 'PEPA Shop',
        titleIcon: '/assets/images/quest-title-icon.png'
      })
    )
    .when(
      pathName => matchPath('/uniswap', pathName),
      () => ({
        title: 'Uniswap',
        titleIcon: '/assets/images/uniswap-title-icon.png'
      })
    )
    .when(
      pathName => matchPath('/inventory', pathName),
      () => ({
        title: 'PEPA Inventory',
        titleIcon: '/assets/images/inventory-title-icon.png'
      })
    )
    .when(
      pathName => matchPath('/quests', pathName),
      () => ({
        title: 'PEPA Quest Book',
        titleIcon: '/assets/images/quest-title-icon.png'
      })
    )
    .when(
      pathName => matchPath('/resources', pathName),
      () => ({
        title: 'PEPA Dashboard',
        titleIcon: '/assets/images/dashboard-title-icon.png'
      })
    )
    .otherwise(() => ({
      title: '',
      titleIcon:
        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="108" height="94"/>'
    }))
}

export default usePageMetadata
