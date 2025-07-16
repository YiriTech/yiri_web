import Link from "next/link";
import logo from "../../../public/assets/img/logo-2.png";
import servicesData from "@/components/data/services-data";
import Social from "@/components/data/social";
import Logo from "../logo";

const FooterThree = () => {
    return (
        <>
        <div className="footer__three">
            <div className="container pt-80">
                <div className="footer__three-top">
                    <h3>Rejoignez notre communauté sociale!</h3>
                    <div className="footer__three-top-social">
                        <Social />
                    </div>
                </div>
                {/* <div className="row gy-4 justify-content-between">
                    <div className="col-xl-3 col-md-6 col-sm-7 xl-mb-30">
                        <div className="footer__three-widget">
                            <div className="footer__three-widget-about">
                                <Logo />
                                <p>Les experts en informatique et en sciences des données</p>
                                <form action="#">
                                    <input type="text" name="email" placeholder="Votre email"  />
                                    <button type="submit"><i className="fas fa-paper-plane"></i></button>
                                 </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-5 sm-mb-30">
                        <div className="footer__three-widget border-one">
                            <h4 className="ml-60">Nos Services</h4>
                            <div className="footer__three-widget-solution">
                                <ul>
									{servicesData.slice(0, 4).map((data, id) => {
										const words = data.title.split(' ');
										const firstAndSecondWord = words.slice(0, 2).join(' ');
										return (
											<li key={id}><Link href={`/services/${data.id}`}><i className="far fa-chevron-double-right"></i>{firstAndSecondWord}</Link></li>
										);
									})}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-5 sm-mb-30">
                        <div className="footer__three-widget border-one">
                            <h4 className="ml-60">Ressources​</h4>
                            <div className="footer__three-widget-solution">
                                <ul>
									<li><Link href="services"><i className="far fa-chevron-double-right"></i>Service</Link></li>
									<li><Link href="faq"><i className="far fa-chevron-double-right"></i>FAQ</Link></li>
									<li><Link href="testimonial"><i className="far fa-chevron-double-right"></i>Testimonial</Link></li>
									<li><Link href="about"><i className="far fa-chevron-double-right"></i>About Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 sm-mb-30">
                        <div className="footer__three-widget border-one">
                            <h4>Contactez-nous</h4>
                            <div className="footer__three-widget-location">
                                <div className="footer__three-widget-location-item">
                                    <div className="footer__three-widget-location-item-icon">
                                        <i className="flaticon-mail"></i>
                                    </div>
                                    <div className="footer__three-widget-location-item-info email">
                                        <span>Email</span>
                                        <Link href="mailto:helpinfo@gmail.com">info@yiri.com</Link>
                                    </div>
                                </div>
                                <div className="footer__three-widget-location-item">
                                    <div className="footer__three-widget-location-item-icon">
                                        <i className="flaticon-location"></i>
                                    </div>
                                    <div className="footer__three-widget-location-item-info">
                                        <span>Adresse</span>
                                        <Link href="https://google.com/maps">123 Rue de la Paix, Paris, France</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="copyright__one two">
                <div className="container">
                    <div className="row justify-content-between copyright__one-container-area">
                        <div className="col-xl-5 col-lg-6"> 
                            <div className="copyright__one-left">
                                <p>© Yiri  2025 | Tous droits réservés</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="copyright__one-right">
                                <Link href="/about">Politique de confidentialité</Link>
                                <Link href="/contact">Contactez-nous</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default FooterThree;