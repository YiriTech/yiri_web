import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Parallax } from 'swiper/modules';
import { useState, useEffect } from 'react';
import banner1 from "../../../../public/assets/img/banner/banner-home-1.png";
import banner2 from "../../../../public/assets/img/banner/banner-home-2.png";
import banner3 from "../../../../public/assets/img/banner/banner-home-3.png";
import shape1 from "../../../../public/assets/img/shape/banner-two-shape-2.png";
import shape2 from "../../../../public/assets/img/shape/banner-two-shape-3.png";
import shape3 from "../../../../public/assets/img/shape/banner-two-shape-4.png";
import shapeContent from "../../../../public/assets/img/shape/content.png";

const BannerHome = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const slides = [
        {
            title: "YIRI TECH AFRICA",
            subtitle: "L'Afrique technologiquement souveraine.",
            highlight: "Par sa jeunesse, pour son avenir.",
            buttonText: "Notre Vision",
            buttonLink: "/contact",
            background: banner1,
            gradient: "from-purple-900/90 via-blue-900/80 to-transparent"
        },
        {
            title: "FORMER • DIGITALISER • INNOVER",
            subtitle: "Nous formons les talents.",
            highlight: "Digitalisons les PME. Créons l'avenir tech africain.",
            buttonText: "Rejoignez-nous",
            buttonLink: "/contact",
            background: banner2,
            gradient: "from-emerald-900/90 via-teal-900/80 to-transparent"
        },
        {
            title: "LA TECH AU SERVICE DE L'AFRIQUE",
            subtitle: "Étudiants, entrepreneurs, institutions.",
            highlight: "Ensemble pour la renaissance numérique.",
            buttonText: "Découvrir",
            buttonLink: "/contact",
            background: banner3,
            gradient: "from-orange-900/90 via-red-900/80 to-transparent"
        }
    ];

    return (
        <>
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
                    50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
                }
                
                @keyframes slide-up {
                    from { transform: translateY(50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes slide-right {
                    from { transform: translateX(-50px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }

                @keyframes scale-in {
                    from { transform: scale(0.9); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float 8s ease-in-out infinite;
                    animation-delay: -2s;
                }

                .animate-pulse-glow {
                    animation: pulse-glow 3s ease-in-out infinite;
                }

                .slide-up {
                    animation: slide-up 0.8s ease-out forwards;
                }

                .slide-right {
                    animation: slide-right 0.8s ease-out 0.2s forwards;
                    opacity: 0;
                }

                .scale-in {
                    animation: scale-in 0.6s ease-out 0.4s forwards;
                    opacity: 0;
                }

                .text-gradient {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .glass-effect {
                    backdrop-filter: blur(20px);
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .hero-particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 50%;
                    animation: float 10s linear infinite;
                }

                .enhanced-button {
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
                }

                .enhanced-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.5s;
                }

                .enhanced-button:hover::before {
                    left: 100%;
                }

                .morphing-blob {
                    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                    animation: morph 8s ease-in-out infinite;
                }

                @keyframes morph {
                    0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
                    100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                }

                .swiper-slide-active .slide-content > * {
                    animation-delay: 0.1s;
                    animation-duration: 0.8s;
                    animation-fill-mode: both;
                }
            `}</style>

            <div className="banner__two relative overflow-hidden">
                {/* Particles d'arrière-plan */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="hero-particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 10}s`,
                                animationDuration: `${8 + Math.random() * 4}s`
                            }}
                        />
                    ))}
                </div>

                <Swiper
                    effect="fade"
                    speed={1500}
                    loop={true}
                    parallax={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                        reverseDirection: false,
                    }}
                    modules={[Autoplay, EffectFade, Parallax]}
                    onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                    className="h-screen"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div 
                                className="banner__two-single-slider relative h-screen flex items-center"
                                style={{
                                    backgroundImage: `url(${slide.background.src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                {/* Overlay gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
                                
                                {/* Blob morphing shapes */}
                                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-600/20 morphing-blob animate-pulse" />
                                <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-emerald-400/20 to-blue-600/20 morphing-blob animate-pulse" style={{animationDelay: '4s'}} />

                                {/* Formes décoratives améliorées */}
                                <div className="banner-two-shape absolute inset-0 pointer-events-none">
                                    <div className="banner-two-shape-1 shape absolute top-1/4 right-1/4 animate-float opacity-20">
                                        <img src={shapeContent.src} alt="shape" className="w-24 h-24 filter brightness-200" />
                                    </div>
                                    <div className="banner-two-shape-2 shape absolute top-1/3 right-1/2 animate-float-delayed opacity-30">
                                        <img src={shape1.src} alt="image" className="w-16 h-16 filter brightness-150" />
                                    </div>
                                    <div className="banner-two-shape-3 shape absolute bottom-1/3 right-1/3 animate-float opacity-25">
                                        <img src={shape2.src} alt="image" className="w-20 h-20 filter brightness-200" />
                                    </div>
                                    <div className="banner-two-shape-4 shape absolute top-1/2 right-1/4 animate-float-delayed opacity-20">
                                        <img src={shape3.src} alt="image" className="w-12 h-12 filter brightness-150" />
                                    </div>
                                </div>

                                <div className="container relative z-10" data-swiper-parallax="-300">
                                    <div className="row">
                                        <div className="col-xl-7 col-lg-10 col-md-12">
                                            <div className={`banner__two-content slide-content ${isVisible ? 'animate' : ''}`}>
                                                {/* Badge */}
                                                <div className="inline-flex items-center px-6 py-3 mb-6 glass-effect rounded-full slide-up">
                                                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                                                    <span className="text-white/90 text-sm font-medium tracking-wide">
                                                        Tech Innovation • Africa
                                                    </span>
                                                </div>

                                                {/* Titre principal avec effet de gradient */}
                                                <h2 
                                                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 slide-right"
                                                    data-swiper-parallax="-200"
                                                >
                                                    <span className="text-white leading-tight">
                                                        {slide.title.includes('AFRIQUE') ? (
                                                            <>
                                                                {slide.title.replace(' L\'AFRIQUE', '')}
                                                                <span className="text-gradient"> L'AFRIQUE</span>
                                                            </>
                                                        ) : (
                                                            slide.title
                                                        )}
                                                    </span>
                                                </h2>

                                                {/* Sous-titre avec animation */}
                                                <div className="mb-8 slide-up" style={{animationDelay: '0.3s'}} data-swiper-parallax="-100">
                                                    <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-2">
                                                        {slide.subtitle}
                                                    </p>
                                                    <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
                                                        {slide.highlight}
                                                    </p>
                                                </div>

                                                {/* Statistiques */}
                                                <div className="flex flex-wrap gap-8 mb-10 scale-in">
                                                    <div className="text-center">
                                                        <div className="text-3xl font-bold text-white mb-1">500+</div>
                                                        <div className="text-white/70 text-sm uppercase tracking-wider">Talents Formés</div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-3xl font-bold text-white mb-1">50+</div>
                                                        <div className="text-white/70 text-sm uppercase tracking-wider">PME Digitalisées</div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-3xl font-bold text-white mb-1">15</div>
                                                        <div className="text-white/70 text-sm uppercase tracking-wider">Pays Africains</div>
                                                    </div>
                                                </div>

                                                {/* Boutons d'action améliorés */}
                                                <div className="flex flex-col sm:flex-row gap-4 scale-in" style={{animationDelay: '0.5s'}}>
                                                    <Link 
                                                        href={slide.buttonLink} 
                                                        className="enhanced-button group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow inline-flex items-center justify-center"
                                                    >
                                                        <span className="mr-3">{slide.buttonText}</span>
                                                        <i className="fas fa-arrow-right transition-transform group-hover:translate-x-2"></i>
                                                    </Link>
                                                    
                                                    <Link 
                                                        href="/about" 
                                                        className="group glass-effect text-white font-semibold py-4 px-8 rounded-full hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center border-2 border-white/30 hover:border-white/50"
                                                    >
                                                        <i className="fas fa-play-circle mr-3 transition-transform group-hover:scale-110"></i>
                                                        <span>Voir la Démo</span>
                                                    </Link>
                                                </div>

                                                {/* Indicateurs sociaux */}
                                                <div className="flex items-center mt-12 gap-6 slide-up" style={{animationDelay: '0.7s'}}>
                                                    <span className="text-white/70 text-sm">Suivez-nous:</span>
                                                    <div className="flex gap-4">
                                                        {['linkedin', 'twitter', 'instagram', 'youtube'].map((social) => (
                                                            <a 
                                                                key={social}
                                                                href={`#${social}`} 
                                                                className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                                                            >
                                                                <i className={`fab fa-${social}`}></i>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Scroll indicator */}
                                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="flex flex-col items-center text-white/70 animate-bounce">
                                        <span className="text-xs uppercase tracking-wider mb-2">Scroll</span>
                                        <i className="fas fa-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation dots personnalisée */}
                <div className="absolute bottom-8 right-8 z-20 flex gap-3">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                activeSlide === index 
                                    ? 'bg-white scale-125' 
                                    : 'bg-white/50 hover:bg-white/70'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default BannerHome;