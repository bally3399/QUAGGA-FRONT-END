import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import {Outlet} from "react-router-dom";

const Layout = () =>{
    return(
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
export default Layout