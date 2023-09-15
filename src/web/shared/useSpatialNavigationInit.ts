import { useLayoutEffect } from 'react'
import { init, destroy } from '@noriginmedia/norigin-spatial-navigation'

const useSpatialNavigationInit = () => {
  useLayoutEffect(() => {
    init()

    return () => {
      destroy()
    }
  }, [])
}

export default useSpatialNavigationInit
