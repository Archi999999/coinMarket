import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AllCoins } from '@/pages/allCoins/AllCoins'
import { OneCoin } from '@/pages/oneCoin/OneCoin'
import { Header } from '@/widgets/header/ui/Header'

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
        element: <div>Hello</div>,
        path: `/coin/:coinId`,
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
