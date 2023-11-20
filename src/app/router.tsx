import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Header} from "@/pages/header/Header";
import {AllCoins} from "@/pages/allCoins/AllCoins";
import {OneCoin} from "@/pages/oneCoin/OneCoin";


const Layout =()=>{
    return (
        <>
            <Header />
            <Outlet/>
        </>
    )
}

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <AllCoins/>
            },
            {
                path: '/coin',
                element: <OneCoin/>
            },
            {
                path: '*',
                element: <div>404</div>
            }
        ]
    }
])

export const Router =()=>{
    return <RouterProvider router={router}/>
}