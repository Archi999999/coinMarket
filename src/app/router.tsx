import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AllCoins } from '@/pages/allCoins/AllCoins'
import { Header } from '@/pages/header/Header'
import { OneCoin } from '@/pages/oneCoin/OneCoin'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    children: [
      {
        element: <AllCoins />,
        path: '/',
      },
      {
        element: <OneCoin />,
        path: '/coin',
      },
      {
        element: <div>404</div>,
        path: '*',
      },
    ],
    element: <Layout />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
