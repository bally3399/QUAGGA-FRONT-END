import Layout from "../component/layout/Layout";
import RegisterPage from "../pages/homePage/registerPage";
import RolePage from "../pages/homePage/rolePage";
import RegisterSpecialistPage from "../pages/homePage/registerSpecialistPage";
import RegisterSupplierPage from "../pages/homePage/registerSupplierPage";
import LoginPage from "../pages/homePage/LoginPage";
import DashBoard from "../pages/homePage/dashBoard";
import Profile from "../pages/homePage/profile";
import AboutPage from "../pages/homePage/AboutPage";
import ContactUs from "../pages/homePage/ContactUs";
import ProfileForm from "../pages/homePage/Profileform";
import SupplierDashBoard from "../pages/homePage/SupplierDashBoard";
import SupplierCard from "../component/supplierCard/supplierCard";
import LogoutPage from "../pages/homePage/LogoutPage";
import HeroPage from "../pages/homePage/Heropage";
import SpecialistDashboard from "../pages/homePage/specialistDashBoard";
import PaymentPage from "../pages/homePage/PaymentPage";


export const ROUTE =[
    {
        path: "/",
        element: <Layout/>,
    },

    {
        path: "/registerClient",
        element: <RegisterPage/>,
    },
    {
        path: "/signUp",
        element: <RolePage/>,
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
    },

    {
        path: "/profile-form",
        element: <ProfileForm/>,
    },

    {
        path: "/contact",
        element: <ContactUs/>,
    },

    {
        path: "/supplierDashboard",
        element: <SupplierDashBoard/>
    },

    {
        path: "/supplierCard",
        element: <SupplierCard/>

    },

    {
        path: "/logout",
        element: <LogoutPage/>
    },

    {
        path: "/hero-page",
        element: <HeroPage/>
    },

    {
        path: "/specialistDashboard",
        element: <SpecialistDashboard />
    },
    {
        path: "/payment",
        element: <PaymentPage />
    }
]
