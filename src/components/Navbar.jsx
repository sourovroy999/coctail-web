import { useGSAP } from '@gsap/react';
import React from 'react';
import { navLinks } from '../../constants';

const Navbar = () => {

    useGSAP(()=>{

    })

    
    return (
        <nav className='fixed z-50 w-full'>
            <div className='flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5  container  mx-auto'>
                <a href="http://" className='flex items-center gap-2'>
                <img src="/public/images/logo.png" alt="" srcset="" />
                <p className='font-modern-negra text-3xl'>Velvet Pour</p>
                </a>

                <ul className='flex-center flex lg:gap-12 gap-7'>
                   
              {navLinks.map((link) => (
			<li key={link.id}>
			 <a href={`#${link.id}`}>{link.title}</a>
			</li>
		 ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;