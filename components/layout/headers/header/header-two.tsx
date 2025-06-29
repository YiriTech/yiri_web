"use client";
import MainMenu from '../header-menu';
import Search from '../search';
import { useEffect, useState } from 'react';
import SideBar from '../offcanvas';
import logo1 from "../../../../public/assets/img/logo-1.png";
import logo2 from "../../../../public/assets/img/logo-2.png";
import MobileMenuPopup from '../mobile-menu/menu-area';
import Link from 'next/link';
import Logo from '../../logo';

const HeaderTwo = ({variant}:{variant:string}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [search, setSearch] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        });
    }, []);
    return (
        <>
        <div className="top__bar two">
            <div className="custom__container">
                <div className="row">
                    <div className="col-xl-5 col-md-5">
                        <div className="top__bar-right">
                        <Link href="https://www.google.com/maps"><i className="fas fa-map-marker-alt"></i>Rabat, Maroc</Link>
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-7">
                        <div className="top__bar-left">
                            <span><i className="fas fa-clock"></i>Heure: 10AM - 08PM</span>
                            <Link href="mailto:contact@yiri.com"><i className="fas fa-envelope"></i>contact@yiri.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`header__area ${ variant ? variant : "" } header__sticky two ${isSticky ? "header__sticky-sticky-menu" : ""}`}>
            <div className="custom__container">
                <div className="header__area-menubar">
                    <div className="header__area-menubar-left">
                        <div className="header__area-menubar-left-logo">
                         <Logo />
                        </div>
                    </div>
                    <div className="header__area-menubar-center">
                        <div className="header__area-menubar-center-menu">
                            <MainMenu />
                        </div>
                    </div>
                    <div className="header__area-menubar-right">
                        <div className="header__area-menubar-right-box">
                            <div className="header__area-menubar-right-box-search">
                                <div className="search">	
                                    <span className="header__area-menubar-right-box-search-icon open" onClick={() => setSearch(true)}>
                                        <i className="flaticon-loupe"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="header__area-menubar-right-box-sidebar">
                                <div className="header__area-menubar-right-box-sidebar-popup-icon" onClick={() => setSidebarOpen(true)}>
                                    <span className="bar-1"></span>
                                    <span className="bar-2"></span>
                                    <span className="bar-3"></span>
                                </div>
                            </div>
                            <div className="header__area-menubar-right-box-help">
                                <i className="flaticon-phone-call"></i>
                                <div className="header__area-menubar-right-box-help-info">
                                    <span>Faire Appel</span>
                                    <Link href="tel:(307)555-0133">(06) 84499227</Link>
                                </div>
                            </div>
                        <div className="header__area-menubar-right-responsive-menu menu__bar">
                            <i className="flaticon-menu-1" onClick={() => setMenuSidebar(true)}></i>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <MobileMenuPopup isOpen={menuSidebar} setIsOpen={setMenuSidebar} popupLogo={logo2} />
        <Search addClass={""} isOpen={search} setIsOpen={setSearch} />
        </>
    );
};

export default HeaderTwo;