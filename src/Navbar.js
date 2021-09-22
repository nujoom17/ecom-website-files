import React from "react";
import logo from "./media/logo.png";
import {FaBars} from "react-icons/fa";
import { useGlobalContext } from "./context";


const Navbar=()=>
{
    const {openSidebar,openSubmenu,closeSubmenu}=useGlobalContext();
    const displaySubmenu=(e)=>{
      const page=e.target.textContent;
      const tempBtn=e.target.getBoundingClientRect();
      const center=(tempBtn.left+tempBtn.right)/2;
      const bottom=tempBtn.bottom+10;

      openSubmenu(page,{center,bottom});
    }
    const handleSubmenu=(e)=>{
      if(!e.target.classList.contains("link-btn")){
       closeSubmenu() 
      }
    }

    
    return(
    <div className="nav" onMouseOver={handleSubmenu}>
       <div className="nav-center">
        <div className="nav-header">

        <img src={logo} className="nav-logo"></img>
        
        
        
        <button className="btn-toggle" onClick={openSidebar}>
          <FaBars/>
        </button>
      </div>
      <ul className="nav-links">
        
              <button className="link-btn" onMouseOver={displaySubmenu}>Products</button>
          
        
              <button className="link-btn"  onMouseOver={displaySubmenu}>Services</button>
          
        
              <button className="link-btn "  onMouseOver={displaySubmenu}>About us</button>
          
      </ul>
    </div>
    </div>
    
   
    )
}

export default Navbar
