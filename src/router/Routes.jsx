import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/Root/MainLayout";
import Homepage from "../pages/Home/Homepage";
import ShopPage from "@/pages/ShopPage/ShopPage";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        // errorElement: <h3>404 Not found page is under construction!</h3>,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/shop",
                element: <ShopPage />
            }
        ]
    }
])

export default Routes;