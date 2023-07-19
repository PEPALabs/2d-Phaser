import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate
} from 'react-router-dom'

import AppLayout from '../layouts/AppLayout'
import LoginPage from '../pages/login/LoginPage'
import ShopPage from '../pages/shop/ShopPage'
import UniswapPage from '../pages/uniswap/UniswapPage'
import InventoryPage from '../pages/inventory/InventoryPage'
import GamePage from '../pages/game/GamePage'
import QuestsPage from '../pages/quests/QuestsPage'
import ResourcePage from '../pages/resource/ResourcePage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Navigate to="/login" />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="home" element={<GamePage />} />
      <Route path="uniswap" element={<UniswapPage />} />
      <Route path="inventory" element={<InventoryPage />} />
      <Route path="quests" element={<QuestsPage />} />
      <Route path="resources" element={<ResourcePage />} />
    </Route>
  )
)

export default router
