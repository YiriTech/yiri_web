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

interface HeaderUnifiedProps {
  variant: 'one' | 'two' | 'three';
}

const Header = ({ variant }: HeaderUnifiedProps) => {
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

  // Top bar content by variant
  const renderTopBar = () => {
    if (variant === 'one') {
      return (
        <div className="top__bar">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-md-7">
                <div className="top__bar-left">
                  <Link href="tel:(629)555-0129"><i className="fas fa-phone-alt"></i>(629) 555-0129</Link>
                  <Link href="mailto:info@example.com"><i className="fas fa-envelope"></i>info@example.com</Link>
                </div>
              </div>
              <div className="col-xl-5 col-md-5">
                <div className="top__bar-right">
                  <Link href="https://www.google.com/maps"><i className="fas fa-map-marker-alt"></i>6391 Elgin St. Celina, 10299</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (variant === 'two') {
      return (
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
      );
    }
    return null;
  };

  // Header area class by variant
  const headerAreaClass = `header__area ${variant ? variant : ""} header__sticky${variant === 'two' ? ' two' : variant === 'three' ? ' three' : ''} ${isSticky ? "header__sticky-sticky-menu" : ""}`;
  const containerClass = variant === 'two' ? 'custom__container' : 'container';

  // Logo for mobile menu
  const popupLogo = variant === 'one' ? logo2 : logo2;

  return (
    <>
      {renderTopBar()}
      <div className={headerAreaClass}>
        <div className={containerClass}>
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
                {/* Search (not in three) */}
                {variant !== 'three' && (
                  <div className="header__area-menubar-right-box-search">
                    <div className="search">
                      <span className="header__area-menubar-right-box-search-icon open" onClick={() => setSearch(true)}>
                        <i className="flaticon-loupe"></i>
                      </span>
                    </div>
                  </div>
                )}
                {/* Sidebar (not in three) */}
                {variant !== 'three' && (
                  <div className="header__area-menubar-right-box-sidebar">
                    <div className="header__area-menubar-right-box-sidebar-popup-icon" onClick={() => setSidebarOpen(true)}>
                      <span className="bar-1"></span>
                      <span className="bar-2"></span>
                      <span className="bar-3"></span>
                    </div>
                  </div>
                )}
                {/* Button/help by variant */}
                {variant === 'one' && (
                  <div className="header__area-menubar-right-box-btn">
                    <Link className="btn-one" href="/request-quote">Get Quote<i className="fas fa-arrow-right"></i></Link>
                  </div>
                )}
                {variant === 'two' && (
                  <div className="header__area-menubar-right-box-help">
                    <i className="flaticon-phone-call"></i>
                    <div className="header__area-menubar-right-box-help-info">
                      <span>Faire Appel</span>
                      <Link href="tel:(307)555-0133">(06) 84499227</Link>
                    </div>
                  </div>
                )}
                {variant === 'three' && (
                  <div className="header__area-menubar-right-box-btn">
                    <Link className="btn-one" href="/request-quote">Nous contactez<i className="fas fa-arrow-right"></i></Link>
                  </div>
                )}
                {/* Responsive menu */}
                <div className="header__area-menubar-right-responsive-menu menu__bar">
                  <i className="flaticon-menu-1" onClick={() => setMenuSidebar(true)}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SideBar and Search only for one and two */}
      {variant !== 'three' && <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />}
      <MobileMenuPopup isOpen={menuSidebar} setIsOpen={setMenuSidebar} popupLogo={popupLogo} />
      {variant !== 'three' && <Search isOpen={search} setIsOpen={setSearch} addClass={""} />}
    </>
  );
};

export default Header; 