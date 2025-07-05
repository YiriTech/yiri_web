import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import testimonialBg from "../../../../public/assets/img/testimonial/testimonial-2.png";
import quoteIcon from "../../../../public/assets/img/testimonial/testimonial-quote.png";
import Link from "next/link";

const PartnersSection = () => {
const slideControl = {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },			
    autoplay: {
        delay: 5000,
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

    const partners = [
        {
            category: "Institutions Publiques",
            name: "Ministère de l'Éducation Nationale",
            description: "Partenaire stratégique pour l'intégration du numérique dans l'éducation",
            benefits: "Visibilité nationale et accès aux politiques éducatives"
        },
        {
            category: "Enseignement Supérieur",
            name: "Universités et Écoles d'Ingénieurs",
            description: "Collaboration avec les institutions de Guinée, Maroc et zone UEMOA",
            benefits: "Accès aux talents et recherche collaborative"
        },
        {
            category: "Écosystème Innovation",
            name: "Jokkolabs & Impact Hub",
            description: "Hubs et incubateurs de référence en Afrique",
            benefits: "Réseau d'entrepreneurs et startups africaines"
        },
        {
            category: "Bailleurs Internationaux",
            name: "AFD, GIZ, PNUD, OIF",
            description: "Fondations et organismes de développement",
            benefits: "Financement et expertise en développement"
        },
        {
            category: "Tech Companies",
            name: "Orange Digital Center",
            description: "Leaders technologiques : Google Afrique, MTN, Inwi",
            benefits: "Innovation technologique et reach continental"
        },
        {
            category: "Médias Spécialisés",
            name: "Médias Jeunes & Tech",
            description: "Blogs, radios, TV locales, magazines spécialisés",
            benefits: "Amplification du message et visibilité ciblée"
        }
    ];

    return (
        <>        
        <div className="testimonial__two section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-8 col-lg-8 col-md-9">
                        <div className="testimonial__two-title">
                            <span className="subtitle-one">Écosystème</span>
                            <h2>Nos Partenaires Stratégiques</h2>
                            <p className="mt-20">
                                Nous collaborons avec les acteurs clés de l'innovation africaine pour maximiser notre impact
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__two-left relative" style={{backgroundImage: `url(${testimonialBg.src})`}}>
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white">
                                <div className="text-center">
                                    <div className="mb-5">
                                        <h3 className="text-4xl font-bold mb-1 text-white">15+</h3>
                                        <span className="text-sm opacity-90">Pays Ciblés</span>
                                    </div>
                                    <div className="mb-5">
                                        <h3 className="text-4xl font-bold mb-1 text-white">50K+</h3>
                                        <span className="text-sm opacity-90">Jeunes Touchés</span>
                                    </div>
                                    <div className="mb-5">
                                        <h3 className="text-4xl font-bold mb-1 text-white">100+</h3>
                                        <span className="text-sm opacity-90">Partenaires Potentiels</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__two-right">
                            <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
                                {partners.map((partner, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="single-slider">
                                            <div className="single-slider-user">
                                                <div className="single-slider-user-name">
                                                    <h4>{partner.name}</h4>
                                                    <span className="text-[#2D8BBA] font-semibold text-sm">{partner.category}</span>
                                                </div>
                                            </div>
                                            <p className="text-base leading-relaxed mb-4">{partner.description}</p>
                                            <div className="mt-5">
                                                <strong className="text-gray-800 text-sm">Bénéfices mutuels :</strong>
                                                <p className="text-sm text-[#2D8BBA] mt-1">{partner.benefits}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="testimonial__two-right-bottom">
                                <div className="slider-arrow">
                                    <i className="swiper-button-prev fas fa-arrow-left"></i>
                                    <i className="swiper-button-next fas fa-arrow-right"></i>
                                </div>
                                <div className="slider-quote">
                                    <img src={quoteIcon.src} alt="Partnership" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row mt-50">
                    <div className="col-12">
                        <div className="bg-gradient-to-br from-[#2D8BBA] to-blue-700 text-white py-12 px-8 rounded-2xl text-center">
                            <h3 className="text-3xl mb-5">Une idée ? Une envie de collaborer ?</h3>
                            <p className="text-xl opacity-90 mb-4">
                                Nous sommes ouverts à toutes les formes de collaboration intelligente et adaptée au terrain.
                            </p>
                            <p className="text-base opacity-95 mb-8">
                                <strong>Faisons équipe pour que la technologie devienne un levier de souveraineté, 
                                de création d'emplois et d'espoir pour des milliers de jeunes africaines.</strong>
                            </p>
                                <div className="subscribe-bottom flex justify-center gap-4">
                                    <Link href="/request-quote" className="btn-two">Demande de contact<i className="fas fa-arrow-right"></i></Link>
                                    <Link 
                                    href="/partenariats" 
                                    className="group relative border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2D8BBA] transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <span className="relative z-10 flex items-center gap-2 group-hover:text-[#2D8BBA] transition-colors duration-500">
                                        <i className="fas fa-search text-lg"></i>
                                        Découvrir les Opportunités
                                    </span>
                                </Link>
                                </div>
                        </div>
                    </div>
                </div>


                {/* Section des bénéfices pour les partenaires */}
                <div className="row mt-60">
                    <div className="col-12">
                        <div className="bg-gray-50 py-12 px-8 rounded-lg">
                            <div className="row justify-content-center">
                                <div className="col-xl-10">
                                    <h3 className="text-center mb-10">Ce que nous offrons à nos partenaires</h3>
                                    <div className="row">
                                        <div className="col-md-6 col-lg-3 mb-30">
                                            <div className="text-center p-5 h-full">
                                                <div className="w-15 h-15 bg-gradient-to-br from-[#2D8BBA] to-[#2D8BBA] rounded-full flex items-center justify-center mx-auto mb-5 text-white text-2xl">
                                                    <i className="fas fa-eye"></i>
                                                </div>
                                                <h5 className="text-lg font-semibold mb-4 text-gray-800">Visibilité Maximale</h5>
                                                <p className="text-sm text-gray-600 leading-6">Présence sur tous nos supports : site, événements, rapports, réseaux sociaux</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 mb-30">
                                            <div className="text-center p-5 h-full">
                                                <div className="w-15 h-15 bg-gradient-to-br from-[#2D8BBA] to-[#2D8BBA] rounded-full flex items-center justify-center mx-auto mb-5 text-white text-2xl">
                                                    <i className="fas fa-heart"></i>
                                                </div>
                                                <h5 className="text-lg font-semibold mb-4 text-gray-800">Impact Porteur de Sens</h5>
                                                <p className="text-sm text-gray-600 leading-6">Alignement avec une initiative engagée pour la jeunesse et l'innovation africaine</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 mb-30">
                                            <div className="text-center p-5 h-full">
                                                <div className="w-15 h-15 bg-gradient-to-br from-[#2D8BBA] to-[#2D8BBA] rounded-full flex items-center justify-center mx-auto mb-5 text-white text-2xl">
                                                    <i className="fas fa-chart-line"></i>
                                                </div>
                                                <h5 className="text-lg font-semibold mb-4 text-gray-800">Data & Insights</h5>
                                                <p className="text-sm text-gray-600 leading-6">Accès privilégié à nos rapports et données terrain (Think Tank)</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 mb-30">
                                            <div className="text-center p-5 h-full">
                                                <div className="w-15 h-15 bg-gradient-to-br from-[#2D8BBA] to-[#2D8BBA] rounded-full flex items-center justify-center mx-auto mb-5 text-white text-2xl">
                                                    <i className="fas fa-rocket"></i>
                                                </div>
                                                <h5 className="text-lg font-semibold mb-4 text-gray-800">Transformation Concrète</h5>
                                                <p className="text-sm text-gray-600 leading-6">Participation à une dynamique de changement mesurable</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
              
            </div>
        </div>
        </>
    );
};

export default PartnersSection;