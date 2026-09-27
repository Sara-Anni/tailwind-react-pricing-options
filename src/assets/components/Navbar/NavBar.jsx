import React from 'react';
import Link from './Link';

const navItems = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Universities",
        path: "/universities"
    },
    {
        id: 4,
        name: "Scholarships",
        path: "/scholarships"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];

const NavBar = () => {
    return (
        <nav>

            <ul className="flex">
                {
                    navItems.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

            {/* <ul className="flex">
                {
                navItems.map(route => 
                <li className="mr-10">
                    <a href={route.path}>{route.name}</a>
                </li>)
                
                }
            </ul> */}

            {/* <ul className="flex">
            <li className="mr-10"><a href="/">Home</a></li>
            <li className="mr-10"><a href="/about">About</a></li>
            <li className="mr-10"><a href="/contact">Contact</a></li>
         </ul> */}
        </nav>
    );
};

export default NavBar;