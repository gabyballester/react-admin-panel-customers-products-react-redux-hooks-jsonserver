import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        iconClosed: "icon-closed",
        cName: 'nav-text',
        cNameClosed: 'nav-text nav-text-closed'
    },
    {
        title: 'Customers',
        path: '/customers',
        icon: <IoIcons.IoIosPeople />,
        cName: 'nav-text',
        cNameClosed: 'nav-text nav-text-closed'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text',
        cNameClosed: 'nav-text nav-text-closed'
    },
]