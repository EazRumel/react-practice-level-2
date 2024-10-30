import React, { useState } from 'react';
import Links from '../Links/Links';
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false)
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
      <div className='md:hidden' onClick={() => setOpen(!open)}>
        {
          open === true ? <AiOutlineClose className='text-2xl cursor-pointer' /> : <AiOutlineMenuUnfold className='text-2xl cursor-pointer ' />

        }

      </div>
      <ul className={`md:flex ${open ? 'top-16' : '-top-60'} bg-blue-700 absolute md:static px-6 duration-1000`}>
        {
          routes.map(route => <Links key={route.id} route={route}></Links>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;