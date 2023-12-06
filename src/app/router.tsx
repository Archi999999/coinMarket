import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AllCoins } from '@/pages/allCoins/AllCoins'
import { OneCoin } from '@/pages/oneCoin/OneCoin'
import { Header } from '@/widgets/header/ui/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <div
        style={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center' }}
      >
        <Outlet />
      </div>
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
        path: '/coin/:id',
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
