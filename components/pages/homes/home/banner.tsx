import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import banner1 from "../../../../public/assets/img/banner/banner-home-1.png";
import banner2 from "../../../../public/assets/img/banner/banner-home-2.png";
import banner3 from "../../../../public/assets/img/banner/banner-home-3.png";
import shape1 from "../../../../public/assets/img/shape/banner-two-shape-2.png";
import shape2 from "../../../../public/assets/img/shape/banner-two-shape-3.png";
import shape3 from "../../../../public/assets/img/shape/banner-two-shape-4.png";
import shapeContent from "../../../../public/assets/img/shape/content.png";

const BannerHome = () => {
  	return (
		<>
			<div className="banner__two">
				<Swiper
					effect= 'fade'
					speed={2000}
					loop={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
						reverseDirection: false,
					}}
					modules={[Autoplay, EffectFade]}
				>
					<SwiperSlide>
						<div className="banner__two-single-slider " style={{backgroundImage: `url(${banner1.src})`}}>
							{/* <div className="banner-two-shape">
								<div className="banner-two-shape-1 shape">
									<img src={shapeContent.src} alt="shape" className="animate-rotate" />
								</div>
								<div className="banner-two-shape-2 shape">
									<img src={shape1.src} alt="image" />
								</div>
								<div className="banner-two-shape-3 shape">
									<img src={shape2.src} alt="image" />
								</div>
								<div className="banner-two-shape-4 shape">
									<img src={shape3.src} alt="image" />
								</div>
							</div> */}
							<div className="container">
								<div className="row">
									<div className="col-xl-5 col-lg-10 col-md-8">
										<div className="banner__two-content">
											<h2>YIRI TECH AFRICA</h2>
											<p>L'Afrique technologiquement souveraine.<br/>Par sa jeunesse, pour son avenir.</p>
											<Link href="/contact" className="btn-two">Notre Vision<i className="fas fa-arrow-right"></i></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="banner__two-single-slider" style={{backgroundImage: `url(${banner2.src})`}}>
							{/* <div className="banner-two-shape">
								<div className="banner-two-shape-1 shape">
									<img src={shapeContent.src} alt="shape" className="animate-rotate" />
								</div>
								<div className="banner-two-shape-2 shape">
									<img src={shape1.src} alt="image" />
								</div>
								<div className="banner-two-shape-3 shape">
									<img src={shape2.src} alt="image" />
								</div>
								<div className="banner-two-shape-4 shape">
									<img src={shape3.src} alt="image" />
								</div>
							</div> */}
							<div className="container">
								<div className="row">
									<div className="col-xl-5 col-lg-10 col-md-8">
										<div className="banner__two-content">
											<h2>FORMER • DIGITALISER • INNOVER</h2>
											<p>Nous formons les talents.<br/>Digitalisons les PME.<br/>Créons l'avenir tech africain.</p>
											<Link href="/contact" className="btn-two">Rejoignez-nous<i className="fas fa-arrow-right"></i></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="banner__two-single-slider" style={{backgroundImage: `url(${banner3.src})`}}>
							{/* <div className="banner-two-shape">
								<div className="banner-two-shape-1 shape">
									<img src={shapeContent.src} alt="shape" className="animate-rotate" />
								</div>
								<div className="banner-two-shape-2 shape">
									<img src={shape1.src} alt="image" />
								</div>
								<div className="banner-two-shape-3 shape">
									<img src={shape2.src} alt="image" />
								</div>
								<div className="banner-two-shape-4 shape">
									<img src={shape3.src} alt="image" />
								</div>
							</div> */}
							<div className="container">
								<div className="row">
									<div className="col-xl-5 col-lg-10 col-md-12">
										<div className="banner__two-content">
											<h2>LA TECH AU SERVICE DE <span>L'AFRIQUE</span></h2>
											<p>Étudiants, entrepreneurs, institutions.<br/>Ensemble pour la renaissance numérique.</p>
											<Link href="/contact" className="btn-two">Découvrir<i className="fas fa-arrow-right"></i></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
            </div>
		</>
	);
};

export default BannerHome;