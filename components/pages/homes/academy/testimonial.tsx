import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import testimonialBg from "../../../../public/assets/img/testimonial/testimonial.png";
import Link from "next/link";

const Testimonial = () => {
const slideControl = {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },			
    autoplay: {
        delay: 4000,
        reverseDirection: false,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
};

    return (
        <>        
        <div className="testimonial__one section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__one-left" style={{backgroundImage: `url(${testimonialBg.src})`}}>
                            <div className="testimonial__one-left-title">
                                <span className="subtitle-one">Témoignages</span>
                                <h2>YIRI Academy <span className="highlighted">transforme</span> les vies</h2>
                                <Link href="/contact" className="btn-one">Rejoindre l'Academy
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__one-right">
                        <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
                            <SwiperSlide>
                                <div className="single-slider">
                                    <div className="single-slider-user">
                                        <div className="single-slider-user-name">
                                            <h4>Fatoumata Diallo</h4>
                                            <span>Développeuse Full-Stack</span>
                                        </div>
                                        <div className="single-slider-user-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <p>Grâce à YIRI Academy, j'ai pu me reconvertir dans le développement web. La formation pratique et l'accompagnement m'ont permis de trouver un emploi dans une startup tech à Conakry. Une vraie transformation de ma carrière !</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slider">
                                    <div className="single-slider-user">
                                        <div className="single-slider-user-name">
                                            <h4>Mamadou Barry</h4>
                                            <span>Data Scientist</span>
                                        </div>
                                        <div className="single-slider-user-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <p>Formation exceptionnelle en Data Science ! Les projets concrets et l'approche pratique m'ont donné les compétences nécessaires pour travailler sur des projets d'IA en Afrique. YIRI Academy change vraiment la donne.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                            <div className="testimonial__one-right-bottom">
                                <div className="slider-arrow">
                                    <i className="swiper-button-prev fas fa-arrow-left"></i>
                                    <i className="swiper-button-next fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
        </>
    );
};

export default Testimonial;