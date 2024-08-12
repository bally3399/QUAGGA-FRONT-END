import Layout from "../component/layout/Layout";
import RegisterPage from "../pages/homePage/registerPage";
import SignUpPage from "../pages/homePage/signupPage";
import RegisterSpecialistPage from "../pages/homePage/registerSpecialistPage";
import RegisterSupplierPage from "../pages/homePage/registerSupplierPage";
import LoginPage from "../pages/homePage/LoginPage";
import DashBoard from "../pages/homePage/dashBoard";
import Profile from "../pages/homePage/profile";
import AboutPage from "../pages/homePage/AboutPage";

export const ROUTE =[
    {
        path: "/",
        element: <Layout/>,
    },

    {
        path: "/registerClient/prof",
        element: <RegisterPage/>,
    },
    {
        path: "/signUp",
        element: <SignUpPage/>,
    },
    {
        path: "/registerSpecialist",
        element: <RegisterSpecialistPage/>,
    },
    {
        path: "/registerSupplier",
        element: <RegisterSupplierPage/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/dashBoard",
        element: <DashBoard/>,
    },
    {
        path: "/profile",
        element: <Profile/>,
    },

    {
        path: "/about",
        element: <AboutPage/>,
    }

]
