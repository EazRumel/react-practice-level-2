import React from 'react';
import Links from '../Links/Links';
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Services", url: "/services" },
    { id: 4, name: "Portfolio", url: "/portfolio" },
    { id: 5, name: "Contact", url: "/contact" },
    { id: 6, name: "Blog", url: "/blog" }
  ];
  
  return (
    <nav>
<div>
<AiOutlineMenuUnfold className='text-2xl cursor-pointer md:hidden' />
</div>
      <ul className="md:flex">
        {
          routes.map(route => <Links key={route.id}  route={route}></Links>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;