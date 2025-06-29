import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import banner1 from "../../../../public/assets/img/banner/banner-three.png";
import banner2 from "../../../../public/assets/img/banner/banner-three-2.png";
import shape from "../../../../public/assets/img/banner/banner-three-shape-overlay.png";

const BannerThree = () => {
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
                                        <span className="subtitle-one">Yiri Think Tank</span>
                                        <h2>Avec <span className="text-bordered">Yiri Think Tank</span> on réfléchit sur la tech et la renaissance africaine</h2>
                                            <p>Parceque la tech est un facteur de changement, on a besoin de la tech pour la renaissance africaine</p>
                                        <Link href="/about" className="btn-two">Lire plus<i className="fas fa-arrow-right"></i></Link>
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
                                        <span className="subtitle-one">Yiri Think Tank</span>
                                        <h2>Un <span className="text-bordered">think tank</span> pour la tech et la renaissance africaine</h2>
                                        <p>Renforcer la capacité de la jeunesse</p>
                                        <Link href="/about" className="btn-two">Lire plus<i className="fas fa-arrow-right"></i></Link>
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

export default BannerThree;