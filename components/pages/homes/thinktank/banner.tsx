import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import banner1 from "../../../../public/assets/img/banner/banner-three.png";
import banner2 from "../../../../public/assets/img/banner/banner-three-2.png";
import shape from "../../../../public/assets/img/banner/banner-three-shape-overlay.png";

const BannerThinkTank = () => {
  	return (
		<>
        <div className="banner__three">
            <Swiper
                effect= 'fade'
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                    reverseDirection: false,
                }}
                modules={[Autoplay, EffectFade]}
            >
                <SwiperSlide>
                    <div className="banner__three-single-slide" style={{backgroundImage: `url(${banner1.src})`}}>
                        <div className="banner__three-bg-shape-overlay" style={{backgroundImage: `url(${shape.src})`}}></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-10">
                                    <div className="banner__three-content">
                                        <span className="subtitle-one">YIRI Think Tank</span>
                                        <h2>Influencer les <span className="text-bordered">Politiques Publiques</span> par la Recherche</h2>
                                            <p>Production de notes de réflexion, rapports stratégiques et veille technologique africaine pour influencer les politiques publiques et les décideurs locaux.</p>
                                        <Link href="/contact" className="btn-two">Consulter nos Rapports<i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner__three-single-slide" style={{backgroundImage: `url(${banner2.src})`}}>
                        <div className="banner__three-bg-shape-overlay" style={{backgroundImage: `url(${shape.src})`}}></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-10">
                                    <div className="banner__three-content">
                                        <span className="subtitle-one">YIRI Think Tank</span>
                                        <h2>Veille <span className="text-bordered">Technologique</span> Africaine</h2>
                                        <p>Dialogue avec les décideurs locaux et production de contenus stratégiques pour le développement numérique de l'Afrique.</p>
                                        <Link href="/contact" className="btn-two">Rejoindre le Think Tank<i className="fas fa-arrow-right"></i></Link>
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

export default BannerThinkTank;