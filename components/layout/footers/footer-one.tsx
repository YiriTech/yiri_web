import Social from "@/components/data/social";
import Link from "next/link";
import logo from "../../../public/assets/img/logo-2.png";
import ctaBg from "../../../public/assets/img/subscribe/subscribe-one-shape-1.png";
import footerBg from "../../../public/assets/img/shape/footer-two-bg.png";
import servicesData from "@/components/data/services-data";

const FooterOne = () => {
    return (
        <>
        <div className="subscribe__one">
            <div className="container">
                <div className="row justify-content-center text-center subscribe__one-content" style={{backgroundImage: `url(${ctaBg.src})`}}>
                    <div className="col-xl-7 col-lg-8">
                        <div className="subscribe__one-title">
                            <h3>S'inscrire a notre newsLetters</h3>
                        </div>
                        <form action="#" className="subscribe__one-form">
                            <input type="email" placeholder="Votre Email" />
                            <button className="btn-two" type="submit">S'inscrire</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
		<div className="footer__two">
			<img className="footer__two-shape" src={footerBg.src} alt="image" />
			<div className="container">
				{/* <div className="row gy-4 justify-content-between">
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div className="footer__two-widget">
							<div className="footer__two-widget-about">
								<Link href="/"><img src={logo.src} alt="image" /></Link>
								<p>Yiri, l'arbre de la renaissance</p>
								<div className="footer__two-widget-about-location">
									<div className="footer__two-widget-about-location-item">
										<div className="footer__two-widget-about-location-item-icon">
											<i className="flaticon-telephone-call"></i>
										</div>
										<div className="footer__two-widget-about-location-item-info">
											<span>Phone Number</span>
											<Link href="tel:(307)555-0133">(06) 84499227</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div className="footer__two-widget ml-85">
							<h4>Quick Link</h4>
							<div className="footer__two-widget-solution">
								<ul>
									<li><Link href="services"><i className="far fa-chevron-double-right"></i>Service</Link></li>
									<li><Link href="faq"><i className="far fa-chevron-double-right"></i>FAQ</Link></li>
									<li><Link href="testimonial"><i className="far fa-chevron-double-right"></i>Testimonial</Link></li>
									<li><Link href="about"><i className="far fa-chevron-double-right"></i>About Us</Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div className="footer__two-widget">
							<h4>Our Services</h4>
							<div className="footer__two-widget-solution">
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
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div className="footer__two-widget">
							<h4>Follow Us</h4>
							<div className="footer__two-widget-subscribe">
								<p>The latest news, articles, sent to your inbox weekly.</p>
								<div className="footer__two-widget-social">	
									<Social />
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
			<div className="copyright__one">
				<div className="container">
					<div className="row justify-content-between copyright__one-container-area">
						<div className="col-xl-5 col-lg-6"> 
							<div className="copyright__one-left">
								<p>© Yiri 2025 | Tous Droit Reservés</p>
							</div>
						</div>
						<div className="col-xl-5 col-lg-6">
							<div className="copyright__one-right text-black">
								<Link href="/about">Politiques de confidentialités</Link>
								<Link href="/contact">Nous contactez</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </>
    );
};

export default FooterOne;