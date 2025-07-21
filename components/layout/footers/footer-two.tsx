"use client";
import Social from "@/components/data/social";
import Link from "next/link";
import ctaBg from "../../../public/assets/img/subscribe/subscribe-two-shape-2.png";
import footerBg from "../../../public/assets/img/shape/footer-bg.png";
import servicesData from "@/components/data/services-data";
import Logo from "../logo";
import { useState } from "react";

const FooterTwo = () => {

    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterStatus, setNewsletterStatus] = useState<{loading: boolean, success: boolean, error: string}>({loading: false, success: false, error: ""});



      // Ajout du handler newsletter
      const handleNewsletter = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNewsletterStatus({ loading: true, success: false, error: "" });
        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: newsletterEmail }),
            });
            const result = await response.json();
            if (response.ok) {
                setNewsletterStatus({ loading: false, success: true, error: "" });
                setNewsletterEmail("");
            } else {
                setNewsletterStatus({ loading: false, success: false, error: result.message || 'Erreur lors de l\'inscription' });
            }
        } catch {
            setNewsletterStatus({ loading: false, success: false, error: 'Erreur de connexion' });
        }
    };


    return (
        <>
        <div className="subscribe__one two">
            <div className="container">
                <div className="row justify-content-center text-center subscribe__one-content" style={{backgroundImage: `url(${ctaBg.src})`}}>
                    <div className="col-xl-7 col-lg-8">
                        <div className="subscribe__one-title">
                            <h3>Débloquez votre potentiel aujourd'hui</h3>
                        </div>
                        <div className="subscribe-bottom">
                            <Link href="/request-quote" className="btn-two">Demande de contact<i className="fas fa-arrow-right"></i></Link>
                            <div className="call-box">
                                <div className="call-box-item">
                                    <div className="call-box-item-icon">
                                        <i className="flaticon-telephone-call"></i>
                                    </div>
                                    <div className="call-box-item-info">
                                        <span>Faire Appel</span>
                                        <Link href="tel:(307)555-0133">(06) 84499227</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__one">
            <img className="footer__one-shape" src={footerBg.src} alt="image" />
            <div className="container">
                <div className="row gy-4 justify-content-between">
                    <div className="col-xl-3 col-md-6 col-sm-7 xl-mb-30">
                        <div className="footer__one-widget">
                            <div className="footer__one-widget-about">
                                <Logo isWhite />
                                <p>Les experts en informatique et en sciences des données</p>
                                <div className="footer__one-widget-about-social">
                                    <h4>Suivez-nous</h4>	
                                    <Social />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-5 sm-mb-30">
                        <div className="footer__one-widget border-one">
                            <h4>Services</h4>
                            <div className="footer__one-widget-solution">
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
                    <div className="col-xl-3 col-md-6 col-sm-6 sm-mb-30">
                        <div className="footer__one-widget border-one">
                            <h4>Contactez-nous</h4>
                            <div className="footer__one-widget-location">
                                <div className="footer__one-widget-location-item">
                                    <div className="footer__one-widget-location-item-icon">
                                        <i className="flaticon-mail"></i>
                                    </div>
                                    <div className="footer__one-widget-location-item-info email">
                                        <span>Email</span>
                                        <Link href="mailto:helpinfo@gmail.com">info@yiri.com</Link>
                                    </div>
                                </div>
                                <div className="footer__one-widget-location-item">
                                    <div className="footer__one-widget-location-item-icon">
                                        <i className="flaticon-location"></i>
                                    </div>
                                    <div className="footer__one-widget-location-item-info">
                                        <span>Adresse</span>
                                            <Link href="https://google.com/maps">123 Rue de la Paix, Paris, France</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6">
                        <div className="footer__one-widget border-one tow">
                            <h4>Newsletter</h4>
                            <div className="footer__one-widget-subscribe">
                                <p>Abonnez-vous à notre newsletter pour recevoir les dernières actualités</p>
                                <form onSubmit={handleNewsletter}>
                                            <input type="text"
                                             name="email"
                                              placeholder="Votre email"
                                              value={newsletterEmail}
                                                onChange={e => setNewsletterEmail(e.target.value)}
                                               required={true} 
                                               />
                                    <button type="submit" disabled={newsletterStatus.loading}>
                                        {newsletterStatus.loading ? (
                                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                            ) : (
                                            <i className="fas fa-paper-plane"></i>
                                            )}
                                 </button>
                                </form>
                                {newsletterStatus.success && <div className="alert alert-success mt-2">Inscription réussie !</div>}
                                {newsletterStatus.error && <div className="alert alert-danger mt-2">{newsletterStatus.error}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright__one">
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

export default FooterTwo;