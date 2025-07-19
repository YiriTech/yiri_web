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
                  
                <li className="menu-item-has-children"><Link href="/events">Evenements</Link></li>
                <li className="menu-item-has-children"><Link href="/blog">Blog  </Link>  </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;