import Link from 'next/link';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="/">Accueil<i className="fas fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        <li><Link href="/home-two">Yiri Academey</Link></li>
                        <li><Link href="/home-three">Yiri Think tank</Link></li>
                        <li><Link href="/home-four">Yiri Conferences</Link></li>
                        <li><Link href="/home-five">Yiri Digital</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link href="#">Pages <i className="fas fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        <li><Link href="/about">A propos</Link></li>
                        <li><Link href="/testimonial">Testimonials</Link></li>
                        {/* <li><Link href="/pricing-plan">Pricing Plan</Link></li> */}
                        <li><Link href="/faq">Faq</Link></li>
                        <li className="menu-item-has-children"><Link href="#">Equipe<i className="fas fa-angle-right"></i></Link>
                            <ul className="sub-menu">
                                <li><Link href="/team">Team Style 01</Link></li>
                                <li><Link href="/team-two">Team Style 02</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/request-quote">Request Quote</Link></li>
                        <li><Link href="/404">404</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link href="/services">Visions
                 {/* <i className="fas fa-angle-down"></i> */}
                 </Link>
                    {/* <ul className="sub-menu">
                        <li><Link href="/services">Vision</Link></li>
                        <li><Link href="/services-two">Services 02</Link></li>
                        <li><Link href="/services/data-analytics">Services Details</Link></li>
                    </ul> */}
                </li>
                <li className="menu-item-has-children"><Link href="/portfolio/2-columns">Evenements en Image 
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