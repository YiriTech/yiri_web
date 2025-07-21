"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const ResponsiveMenu = () => {
    const [activeMenu, setActiveMenu] = useState<string |null>(null);
    const active = (value:string) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value:string) => (activeMenu == value ? "mean-clicked" : ""),
    activeSubMenu = (value:string) => value == activeMenu ? { display: "block" } : { display: "none" };

  return (
        <>
            <ul>
                <li className='menu-item-has-children'>
                    <Link href='/'>Accueil</Link>
                    <ul className='sub-menu' style={activeSubMenu("home")}> 
                        <li><Link href="/yiri/academy">Yiri Academey</Link></li>
                        <li><Link href="/yiri/thinktank">Yiri Think tank</Link></li>
                        <li><Link href="/yiri/conference">Yiri Conferences</Link></li>
                        <li><Link href="/yiri/digital">Yiri Digital</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("home")}`} onClick={() => active("home")}></a>
                </li>  
                <li><Link href="/about">A propos</Link></li>
                {/* <li><Link href="/team">Equipe</Link></li> */}
                <li><Link href="/services">Services</Link></li>
                {/* <li><Link href="/events">Evenements</Link></li> */}
                {/* <li><Link href="/blog">Blog</Link></li> */}
                <li><Link href="/contact">Contact</Link></li>   
            </ul>  
        </>
    );
};

export default ResponsiveMenu;