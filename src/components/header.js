import { Outlet, Link, useLocation } from "react-router-dom"
import { useState } from "react";

const Header = () => {
    const [menuToggle , setMenu]=useState(false)

const changeMenu = () => {    
    setMenu(() => !menuToggle);
}




  return (
      /*<div className="header">
        <nav className="navbar">
            <Link to="/" className="navLogo">
                <img alt="Aconcagua logo" src={"/images/branding/aconcagua.svg"}/>
            </Link>
        </nav>
      </div>*/
      true
    );
  };
  
export default Header;