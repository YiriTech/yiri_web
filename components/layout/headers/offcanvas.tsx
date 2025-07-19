import Link from 'next/link';
import Social from '@/components/data/social';
import Logo from '../logo';

const SideBar = ({ isOpen, setIsOpen }:{
	isOpen: boolean
	, setIsOpen:(isOpen:boolean)=>void
}) => {
    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}><i className="fal fa-times"></i></div>
				<div className="header__area-menubar-right-sidebar-popup-logo">
				<Logo isWhite />
				</div>
				<p>YIRI TECH AFRICA accompagne la transformation numérique en Afrique à travers l’innovation, la formation et le conseil. Rejoignez notre écosystème pour accélérer votre impact digital !</p>
				<div className="header__area-menubar-right-sidebar-popup-contact">
					<h4 className="mb-30">Contactez-nous</h4>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-phone-alt icon-animation"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Téléphone</span>
							<h6><Link href="tel:+212684499227">+212 6 84 49 92 27</Link></h6>
						</div>
					</div>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-envelope"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Email</span>
							<h6><Link href="mailto:contact@yiri.tech">contact@yiri.tech</Link></h6>
						</div>
					</div>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-map-marker-alt"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Adresse</span>
							<h6><Link href="https://maps.app.goo.gl/2Qw2k8k8k8k8k8k8A" target="_blank">Rabat, Maroc</Link></h6>
						</div>
					</div>
				</div>
				<div className="header__area-menubar-right-sidebar-popup-social social__icon">
					<Social />
				</div>
			</div>
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;