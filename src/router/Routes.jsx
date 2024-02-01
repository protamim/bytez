import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/Root/MainLayout";
import Homepage from "../pages/Home/Homepage";


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
        ]
    }
])

export default Routes;