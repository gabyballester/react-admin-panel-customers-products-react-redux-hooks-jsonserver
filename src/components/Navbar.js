// rfce -> generación automática de componente
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../components/SidebarData";
import './Navbar.sass';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showOrHideSidebar = () => setSidebar(!sidebar);


  console.log(sidebar);
  return (
    <>
      <div className="navbar-div">
        <div>
          <Link to="#" className="menu-bars">
            {!sidebar ? (
              <FaIcons.FaBars onClick={showOrHideSidebar} />
            ) : (
                <AiIcons.AiOutlineClose onClick={showOrHideSidebar} />
              )}
          </Link>
        </div>
        <div className="title-div">
          <h1 className="title">Panel de usuario</h1>
        </div>
        <div></div>
      </div>
      <nav
        className={sidebar ? "nav-menu active" : "nav-menu"}
      >
        <ul
        className="nav-menu-items"
        onMouseEnter={()=>setSidebar(true)}
        onMouseLeave={()=>setSidebar(false)}
        >
          {SidebarData.map((item, index) => {
            return (
              <li
                key={index}
                className={sidebar ? `${item.cName}` : `${item.cNameClosed}`}
              >
                <Link to={item.path}>
                  {sidebar ? (
                    <div>
                      {item.icon}
                      <span className="ml-3">{item.title}</span>
                    </div>
                  ) : (
                      <div>{item.icon}</div>
                    )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
