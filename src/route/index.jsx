import Layout from "../component/layout";
import HomePage from "../pages/homePage";

export const ROUTE =[
    {
        path: "/",
        element:<Layout/>,
        children: [
            {
                path: "",
                element:<HomePage/>
            },
            {
                path: "homePage",
                element: <HomePage></HomePage>
            }
        ]
    }


]
