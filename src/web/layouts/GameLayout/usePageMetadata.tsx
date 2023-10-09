import React from 'react'
import { matchPath, useLocation } from 'react-router-dom'
import { match } from 'ts-pattern'
import AccountBalance from '../../shared/components/AccountBalance'

interface PageMetadata {
  title: string
  headerRightSection?: React.ReactNode
}

const usePageMetadata = () => {
  const location = useLocation()

  return match<string, PageMetadata>(location.pathname)
    .when(
      pathname => matchPath('/shop', pathname),
      () => ({ title: 'PEPA Shop', headerRightSection: <AccountBalance /> })
    )
    .when(
      pathName => matchPath('/uniswap', pathName),
      () => ({ title: 'Uniswap' })
    )
    .when(
      pathName => matchPath('/exchange', pathName),
      () => ({ title: 'PEPA Exchange' })
    )
    .when(
      pathName => matchPath('/inventory', pathName),
      () => ({
        title: 'PEPA Inventory',
        headerRightSection: <AccountBalance />
      })
    )
    .when(
      pathName => matchPath('/quests', pathName),
      () => ({ title: 'PEPA Quest Book' })
    )
    .when(
      pathName => matchPath('/dashboard', pathName),
      () => ({ title: 'PEPA Dashboard' })
    )
    .otherwise(() => ({ title: '' }))
}

export default usePageMetadata
