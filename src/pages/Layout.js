import { Outlet, Link } from "react-router-dom";
import '../assets/css/App.css';
import Footer from "../components/footer";
import Header from "../components/header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;