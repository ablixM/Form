import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Land from "./pages/Land.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                path: "/",
                element: <Land/>
            },
        ]
    }
])