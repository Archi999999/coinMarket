import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ErrorPage } from '@/pages/404/ErrorPage'
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
        path: '/coin/:id',
      },
      {
        element: <ErrorPage />,
        path: '*',
      },
    ],
    element: <Layout />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
