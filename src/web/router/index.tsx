import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route
} from 'react-router-dom'

import AppLayout from '../layouts/AppLayout'
import GameLayout from '../layouts/GameLayout'
import RequireAuthLayout from '../layouts/RequireAuthLayout'
import NoMatch from './components/NoMatch'
import AppErrorBoundary from './components/AppErrorBoundary'
import PageErrorBoundary from './components/PageErrorBoundary'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<AppLayout />}
        errorElement={<AppErrorBoundary />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="login" lazy={() => import('../pages/login/LoginPage')} />
        <Route
          path="signup"
          lazy={() => import('../pages/signup/SignupPage')}
        />
        <Route element={<PageErrorBoundary />}>
          <Route element={<RequireAuthLayout />}>
            <Route element={<GameLayout />}>
              <Route
                path="shop"
                lazy={() => import('../pages/shop/ShopPage')}
              />
              <Route
                path="home"
                lazy={() => import('../pages/game/GamePage')}
              />
              <Route
                path="uniswap"
                lazy={() => import('../pages/uniswap/UniswapPage')}
              />
              <Route
                path="inventory"
                lazy={() => import('../pages/inventory/InventoryPage')}
              />
              <Route
                path="quests"
                lazy={() => import('../pages/quests/QuestsPage')}
              />
              <Route
                path="resources"
                lazy={() => import('../pages/resource/ResourcePage')}
              />
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NoMatch />} />
    </>
  )
)

export default router
