import Link from 'next/link';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="/">Accueil<i className="fas fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        <li><Link href="/yiri/academy">Yiri Academey</Link></li>
                        <li><Link href="/yiri/thinktank">Yiri Think tank</Link></li>
                        <li><Link href="/yiri/conference">Yiri Conferences</Link></li>
                        <li><Link href="/yiri/digital">Yiri Digital</Link></li>
                    </ul>
                </li>
                    <li className="menu-item-has-children"><Link href="/about">A propos</Link></li>
                    <li className="menu-item-has-children"><Link href="/team">Equipe</Link></li>
                <li className="menu-item-has-children"><Link href="/services">Services</Link></li>
                    {/* <ul className="sub-menu">
                        <li><Link href="/services">Vision</Link></li>
                        <li><Link href="/services-two">Services 02</Link></li>
                        <li><Link href="/services/data-analytics">Services Details</Link></li>
                    </ul> */}
                
                <li className="menu-item-has-children"><Link href="/portfolio/2-columns">Evenements 
                {/* <i className="fas fa-angle-down"> </i> */}
                    </Link>
                    {/* <ul className="sub-menu">
                        <li><Link href="/portfolio/2-columns">2 Columns</Link></li>
                        <li><Link href="/portfolio/3-columns">3 Columns</Link></li>
                        <li><Link href="/portfolio/gateway-integration">Portfolio Details</Link></li>
                    </ul> */}
                </li>
                <li className="menu-item-has-children"><Link href="#">Blog <i className="fas fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog/ux-ui-designing-the-future-web-design">Blog Details</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;