import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route
} from 'react-router-dom'

import AppLayout from '../layouts/AppLayout'
import ErrorPage from '../pages/error/ErrorPage'
import LoginPage from '../pages/login/LoginPage'
import ShopPage from '../pages/shop/ShopPage'
import UniswapPage from '../pages/uniswap/UniswapPage'
import InventoryPage from '../pages/inventory/InventoryPage'
import GamePage from '../pages/game/GamePage'
import QuestsPage from '../pages/quests/QuestsPage'
import ResourcePage from '../pages/resource/ResourcePage'
import GameLayout from '../layouts/GameLayout'
import RequireAuthLayout from '../layouts/RequireAuthLayout'
import SignupPage from '../pages/signup/SignupPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Navigate to="/home" replace />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route element={<RequireAuthLayout />}>
        <Route element={<GameLayout />}>
          <Route path="shop" element={<ShopPage />} />
          <Route path="home" element={<GamePage />} />
          <Route path="uniswap" element={<UniswapPage />} />
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="quests" element={<QuestsPage />} />
          <Route path="resources" element={<ResourcePage />} />
        </Route>
      </Route>
    </Route>
  )
)

export default router
