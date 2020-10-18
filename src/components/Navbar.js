// rfce -> generación automática de componente
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../components/SidebarData";
import { IconContext } from "react-icons";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    console.log(sidebar);
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        {!sidebar ?
                            <FaIcons.FaBars onClick={showSidebar} /> :
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        }
                    </Link>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    < ul className="nav-menu-items" onClick={showSidebar}>
                        {SidebarData.map((item, index) => {
                            return (<li key={index} className=
                                {sidebar ?
                                    `${item.cName}`
                                    :
                                    `${item.cNameClosed}`
                                }>
                                <Link to={item.path}>
                                    {sidebar ?
                                        <div>{item.icon}
                                            <span>{item.title}</span></div>
                                        :
                                        <div>{item.icon}</div>
                                    }
                                </Link>
                            </li>)
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
