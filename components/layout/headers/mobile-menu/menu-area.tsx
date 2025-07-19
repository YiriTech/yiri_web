import Link from 'next/link';
import ResponsiveMenu from "./responsive-menu";
import Logo from '../../logo';

const MobileMenuPopup = ({ isOpen, setIsOpen, popupLogo }:{
    isOpen:boolean,
    setIsOpen:(isOpen:boolean)=>void,
    popupLogo:{src:string}
}) => {
    return (
        <div className={`menu__bar-popup ${isOpen ? "show" : ""}`}>
            <div className="menu__bar-popup-top">
                <div className="logo">
                    <Link href="/">
                    <Logo isWhite />
                    </Link>
                </div>
                <div className="close" onClick={() => setIsOpen(false)}>
                    <i className="fal fa-times"></i>
                </div>
            </div>
            <div className="responsive-menu mean-container">
                <div className="mean-bar">
                    <div className="mean-nav">
                        <ResponsiveMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenuPopup;