import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Parallax } from 'swiper/modules';
import { useState, useEffect, useRef } from 'react';
import testimonialBg from "../../../../public/assets/img/testimonial/testimonial-2.png";
import quoteIcon from "../../../../public/assets/img/testimonial/testimonial-quote.png";
import Link from "next/link";

const PartnersSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState({ countries: 0, youth: 0, partners: 0 });
    const sectionRef = useRef(null);

    // Animation des compteurs
    const animateCounter = (target : number , duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(timer);
            }
            return Math.floor(start);
        }, 16);
        
        return timer;
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Animation des compteurs
                    setTimeout(() => {
                        const timer1 = animateCounter(15);
                        const timer2 = animateCounter(50);
                        const timer3 = animateCounter(100);
                        
                        const interval = setInterval(() => {
                            setCounters(prev => ({
                                countries: Math.min(prev.countries + 1, 15),
                                youth: Math.min(prev.youth + 3, 50),
                                partners: Math.min(prev.partners + 5, 100)
                            }));
                        }, 50);
                        
                        setTimeout(() => clearInterval(interval), 2000);
                    }, 500);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const slideControl = {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        parallax: true,
        navigation: {
            nextEl: '.partners-swiper-button-next',
            prevEl: '.partners-swiper-button-prev',
        },
        autoplay: {
            delay: 6000,
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
            description: "Partenaire stratégique pour l'intégration du numérique dans l'éducation et la transformation des systèmes éducatifs africains.",
            benefits: "Visibilité nationale et accès aux politiques éducatives",
            icon: "fas fa-university",
            color: "from-blue-600 to-indigo-700"
        },
        {
            category: "Enseignement Supérieur",
            name: "Universités et Écoles d'Ingénieurs",
            description: "Collaboration avec les institutions de Guinée, Maroc et zone UEMOA pour former la nouvelle génération de talents tech.",
            benefits: "Accès aux talents et recherche collaborative",
            icon: "fas fa-graduation-cap",
            color: "from-emerald-600 to-teal-700"
        },
        {
            category: "Écosystème Innovation",
            name: "Jokkolabs & Impact Hub",
            description: "Hubs et incubateurs de référence en Afrique pour l'accompagnement des startups et l'innovation technologique.",
            benefits: "Réseau d'entrepreneurs et startups africaines",
            icon: "fas fa-lightbulb",
            color: "from-orange-600 to-red-700"
        },
        {
            category: "Bailleurs Internationaux",
            name: "AFD, GIZ, PNUD, OIF",
            description: "Fondations et organismes de développement pour financer l'innovation et l'impact social en Afrique.",
            benefits: "Financement et expertise en développement",
            icon: "fas fa-globe-africa",
            color: "from-purple-600 to-pink-700"
        },
        {
            category: "Tech Companies",
            name: "Orange Digital Center",
            description: "Leaders technologiques : Google Afrique, MTN, Inwi pour accélérer la transformation digitale du continent.",
            benefits: "Innovation technologique et reach continental",
            icon: "fas fa-rocket",
            color: "from-cyan-600 to-blue-700"
        },
        {
            category: "Médias Spécialisés",
            name: "Médias Jeunes & Tech",
            description: "Blogs, radios, TV locales, magazines spécialisés pour amplifier notre message auprès des jeunes africains.",
            benefits: "Amplification du message et visibilité ciblée",
            icon: "fas fa-broadcast-tower",
            color: "from-pink-600 to-rose-700"
        }
    ];

    const benefits = [
        {
            icon: "fas fa-eye",
            title: "Visibilité Maximale",
            description: "Présence sur tous nos supports : site, événements, rapports, réseaux sociaux avec un reach continental.",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: "fas fa-heart",
            title: "Impact Porteur de Sens",
            description: "Alignement avec une initiative engagée pour la jeunesse et l'innovation africaine qui transforme des vies.",
            color: "from-rose-500 to-rose-600"
        },
        {
            icon: "fas fa-chart-line",
            title: "Data & Insights",
            description: "Accès privilégié à nos rapports et données terrain (Think Tank) pour éclairer vos décisions stratégiques.",
            color: "from-emerald-500 to-emerald-600"
        },
        {
            icon: "fas fa-rocket",
            title: "Transformation Concrète",
            description: "Participation à une dynamique de changement mesurable avec des KPI clairs et un impact quantifiable.",
            color: "from-purple-500 to-purple-600"
        }
    ];

    return (
        <>
            <style jsx>{`
                @keyframes slideInUp {
                    from { transform: translateY(50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes slideInLeft {
                    from { transform: translateX(-50px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }

                @keyframes slideInRight {
                    from { transform: translateX(50px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes scaleIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }

                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }

                .animate-slideInUp {
                    animation: slideInUp 0.8s ease-out forwards;
                }

                .animate-slideInLeft {
                    animation: slideInLeft 0.8s ease-out forwards;
                }

                .animate-slideInRight {
                    animation: slideInRight 0.8s ease-out forwards;
                }

                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out forwards;
                }

                .animate-scaleIn {
                    animation: scaleIn 0.6s ease-out forwards;
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                .animate-pulse-custom {
                    animation: pulse 2s ease-in-out infinite;
                }

                .glass-morphism {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .gradient-border {
                    position: relative;
                    background: white;
                    border-radius: 1rem;
                }

                .gradient-border::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    padding: 2px;
                    background: linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899, #F59E0B);
                    border-radius: inherit;
                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    mask-composite: exclude;
                }

                .partner-card {
                    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    transform-style: preserve-3d;
                }

                .partner-card:hover {
                    transform: translateY(-10px) rotateY(5deg);
                }

                .counter-number {
                    font-variant-numeric: tabular-nums;
                    font-feature-settings: "tnum";
                }

                .swiper-slide-active .partner-card {
                    animation: scaleIn 0.6s ease-out forwards;
                }

                .benefit-icon {
                    transition: all 0.3s ease;
                }

                .benefit-card:hover .benefit-icon {
                    transform: scale(1.2) rotate(10deg);
                }

                .cta-button {
                    position: relative;
                    overflow: hidden;
                }

                .cta-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    transition: left 0.5s;
                }

                .cta-button:hover::before {
                    left: 100%;
                }
            `}</style>

            <div className="testimonial__two section-padding overflow-hidden" ref={sectionRef}>
                <div className="container">
                    {/* En-tête amélioré */}
                    <div className="row justify-content-center text-center mb-60">
                        <div className="col-xl-8 col-lg-8 col-md-9">
                            <div className={`testimonial__two-title ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
                                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
                                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse-custom"></div>
                                    <span className="subtitle-one bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                                        Écosystème Partenarial
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    Nos Partenaires Stratégiques
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                    Nous collaborons avec les acteurs clés de l'innovation africaine pour 
                                    <span className="font-semibold text-blue-600"> maximiser notre impact</span> et 
                                    créer un écosystème technologique durable sur le continent.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mb-80">
                        {/* Section statistiques améliorée */}
                        <div className="col-xl-6 col-lg-6">
                            <div 
                                className={`testimonial__two-left relative overflow-hidden rounded-3xl ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}
                                style={{
                                    backgroundImage: `url(${testimonialBg.src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    minHeight: '400px'
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/60 to-purple-900/80"></div>
                                
                                {/* Effets décoratifs */}
                                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full animate-float"></div>
                                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                                
                                <div className="relative z-10 flex items-center justify-center h-full text-white p-8">
                                    <div className="text-center">
                                        <div className="grid gap-8">
                                            <div className="glass-morphism rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                                                <h3 className="counter-number text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                                    {counters.countries}+
                                                </h3>
                                                <span className="text-lg opacity-90 font-medium">Pays Ciblés</span>
                                                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mt-3"></div>
                                            </div>
                                            
                                            <div className="glass-morphism rounded-2xl p-6 transform hover:scale-105 transition-all duration-300" style={{animationDelay: '0.2s'}}>
                                                <h3 className="counter-number text-5xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                                    {counters.youth}K+
                                                </h3>
                                                <span className="text-lg opacity-90 font-medium">Jeunes Touchés</span>
                                                <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-3"></div>
                                            </div>
                                            
                                            <div className="glass-morphism rounded-2xl p-6 transform hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
                                                <h3 className="counter-number text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                    {counters.partners}+
                                                </h3>
                                                <span className="text-lg opacity-90 font-medium">Partenaires Potentiels</span>
                                                <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Carousel des partenaires amélioré */}
                        <div className="col-xl-6 col-lg-6">
                            <div className={`testimonial__two-right ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
                                <Swiper 
                                    modules={[EffectFade, Autoplay, Navigation, Parallax]} 
                                    {...slideControl}
                                    onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                                >
                                    {partners.map((partner, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="single-slider">
                                                <div className="partner-card bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                                                    {/* Gradient d'arrière-plan */}
                                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${partner.color} opacity-10 rounded-full transform translate-x-8 -translate-y-8`}></div>
                                                    
                                                    <div className="relative z-10">
                                                        <div className="flex items-start mb-6">
                                                            <div className={`w-16 h-16 bg-gradient-to-br ${partner.color} rounded-2xl flex items-center justify-center text-white text-2xl mr-4 shadow-lg`}>
                                                                <i className={partner.icon}></i>
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h4>
                                                                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold text-sm rounded-full">
                                                                    {partner.category}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        
                                                        <p className="text-gray-700 text-lg leading-relaxed mb-6" data-swiper-parallax="-100">
                                                            {partner.description}
                                                        </p>
                                                        
                                                        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl">
                                                            <div className="flex items-center mb-2">
                                                                <i className="fas fa-handshake text-blue-600 mr-3"></i>
                                                                <strong className="text-gray-800 font-semibold">Bénéfices mutuels :</strong>
                                                            </div>
                                                            <p className="text-blue-700 font-medium">{partner.benefits}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Navigation personnalisée */}
                                <div className="testimonial__two-right-bottom flex justify-between items-center mt-8">
                                    <div className="slider-arrow flex gap-4">
                                        <button className="partners-swiper-button-prev w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                                            <i className="fas fa-arrow-left"></i>
                                        </button>
                                        <button className="partners-swiper-button-next w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                                            <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                    
                                    {/* Indicateurs de slide */}
                                    <div className="flex gap-2">
                                        {partners.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                    activeSlide === index 
                                                        ? 'bg-blue-600 scale-125' 
                                                        : 'bg-gray-300 hover:bg-gray-400'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    
                                    <div className="slider-quote opacity-60">
                                        <img src={quoteIcon.src} alt="Partnership" className="w-12 h-12" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* CTA Section améliorée */}
                    <div className={`row mb-80 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
                        <div className="col-12">
                            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-16 px-8 rounded-3xl">
                                {/* Effets décoratifs */}
                                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                                    <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
                                    <div className="absolute top-1/2 right-10 w-16 h-16 bg-white rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                                    <div className="absolute bottom-10 left-1/3 w-12 h-12 bg-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                                </div>

                                <div className="relative z-10 text-center max-w-4xl mx-auto">
                                    <div className="mb-8">
                                        <i className="fas fa-handshake text-6xl text-white/20 mb-4"></i>
                                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
                                            Une idée ? Une envie de collaborer ?
                                        </h3>
                                        <p className="text-xl md:text-2xl opacity-95 mb-4 leading-relaxed">
                                            Nous sommes ouverts à toutes les formes de collaboration intelligente et adaptée au terrain.
                                        </p>
                                        <p className="text-lg opacity-90 leading-relaxed max-w-3xl mx-auto">
                                            <strong>Faisons équipe pour que la technologie devienne un levier de souveraineté, 
                                            de création d'emplois et d'espoir pour des milliers de jeunes africains.</strong>
                                        </p>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                                        <Link 
                                            href="/request-quote" 
                                            className="cta-button group bg-white text-blue-600 font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                                        >
                                            <i className="fas fa-paper-plane mr-3 group-hover:rotate-12 transition-transform duration-300"></i>
                                            <span>Demande de Contact</span>
                                        </Link>
                                        
                                        <Link 
                                            href="/partenariats" 
                                            className="group glass-morphism text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center border-2 border-white/30 hover:border-white/50"
                                        >
                                            <i className="fas fa-search mr-3 group-hover:scale-110 transition-transform duration-300"></i>
                                            <span>Découvrir les Opportunités</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section bénéfices améliorée */}
                    <div className={`row ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
                        <div className="col-12">
                            <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-8 rounded-3xl">
                                <div className="row justify-content-center">
                                    <div className="col-xl-10">
                                        <div className="text-center mb-12">
                                            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                                Ce que nous offrons à nos partenaires
                                            </h3>
                                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                                Un partenariat avec YIRI TECH AFRICA, c'est bien plus qu'une collaboration : 
                                                c'est un investissement dans l'avenir technologique de l'Afrique.
                                            </p>
                                        </div>
                                        
                                        <div className="row">
                                            {benefits.map((benefit, index) => (
                                                <div key={index} className="col-md-6 col-lg-3 mb-8">
                                                    <div className="benefit-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full transform hover:-translate-y-2 group">
                                                        <div className={`benefit-icon w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl group-hover:shadow-lg`}>
                                                            <i className={benefit.icon}></i>
                                                        </div>
                                                        <h5 className="text-xl font-bold mb-4 text-gray-800 text-center">{benefit.title}</h5>
                                                        <p className="text-gray-600 leading-relaxed text-center">{benefit.description}</p>
                                                        
                                                        {/* Barre de progression décorative */}
                                                        <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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

export default PartnersSection;