"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const ResponsiveMenu = () => {
    const [activeMenu, setActiveMenu] = useState<string |null>(null);
    const active = (value:string) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value:string) => (activeMenu == value ? "mean-clicked" : ""),
    activeSubMenu = (value:string) => value == activeMenu ? { display: "block" } : { display: "none" };

    const [activeMenus, setActiveMenus] = useState<string | null>(null);
    const actives = (value:string) => setActiveMenus(value === activeMenus ? null : value),
    activeIcons = (value:string) => (activeMenus == value ? "mean-clicked" : ""),
    activeSubMenus = (value:string) => value == activeMenus ? { display: "block" } : { display: "none" };
  return (
        <>
            <ul>
                <li className='menu-item-has-children'>
                    <Link href='#'>Accueil</Link>
                    <ul className='sub-menu' style={activeSubMenu("home")}>
                        <li><Link href="/">Accueil</Link></li>
                        <li><Link href="/home-two">Yiri Academey</Link></li>
                        <li><Link href="/home-three">Yiri Think tank</Link></li>
                        <li><Link href="/home-four">Yiri Conferences</Link></li>
                        <li><Link href="/home-five">Yiri Digital</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("home")}`} onClick={() => active("home")}></a>
                </li>  
                <li className='menu-item-has-children'>
                    <Link href='#'>Pages</Link>
                    <ul className='sub-menu' style={activeSubMenu("pages")}>
                        <li><Link href="/about">A propos</Link></li>
                        <li><Link href="/testimonial">Testimonials</Link></li>
                        {/* <li><Link href="/pricing-plan">Pricing Plan</Link></li> */}
                        <li className='menu-item-has-children'><Link href='#'>Equipe</Link>
                            <ul className='sub-menu' style={activeSubMenus("team")}>
                                <li><Link href="/team">Team Style 01</Link></li>
                                <li><Link href="/team-two">Team Style 02</Link></li>
                            </ul>
                            <a className={`mean-expand ${activeIcons("team")}`} onClick={() => actives("team")}></a>
                        </li>
                            <li><Link href="/request-quote">Request Quote</Link></li>
                            <li><Link href="/404">404</Link></li>
                        </ul>
                    <a className={`mean-expand ${activeIcon("pages")}`} onClick={() => active("pages")}></a>
                </li>
                <li className='menu-item-has-children'><Link href='#'>Services</Link>
                    <ul className='sub-menu' style={activeSubMenu("services")}>
                        <li><Link href="/services">Services 01</Link></li>
                        <li><Link href="/services-two">Services 02</Link></li>
                        <li><Link href="/services/data-analytics">Services Details</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("services")}`} onClick={() => active("services")}></a>
                </li>
                <li className='menu-item-has-children'><Link href='#'>Project</Link>
                    <ul className='sub-menu' style={activeSubMenu("project")}>
                        <li><Link href="/portfolio/2-columns">2 Columns</Link></li>
                        <li><Link href="/portfolio/3-columns">3 Columns</Link></li>
                        <li><Link href="/portfolio/gateway-integration">Portfolio Details</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("project")}`} onClick={() => active("project")}></a>
                </li>
                <li className='menu-item-has-children'><Link href='#'>Blog</Link>
                    <ul className='sub-menu' style={activeSubMenu("blog")}>
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog/ux-ui-designing-the-future-web-design">Blog Details</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("blog")}`} onClick={() => active("blog")}></a>
                </li>
                <li><Link href="/contact">Contact</Link></li>   
            </ul>  
        </>
    );
};

export default ResponsiveMenu;