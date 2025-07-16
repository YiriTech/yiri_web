import image1 from "../../../../public/assets/img/why-choose-us/academy/academy-why-choose.png";
import image2 from "../../../../public/assets/img/shape/why-choose-shape.png";
import Count from "../../common/count";

const ChooseUs = () => {
    return (
        <>
        <div className="why-choose-us__one section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <div className="container">
                {/* Header Section */}
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-xl-8 col-lg-10">
                        <div className="section-header">
                            <span className="subtitle-one bg-blue-100 text-primary px-4 py-2 rounded-full inline-flex items-center">
                                <i className="fas fa-star mr-2"></i>
                                Pourquoi Choisir YIRI Academy
                            </span>
                            <h2 className="mt-4 font-bold text-4xl lg:text-5xl">
                                <span className="text-primary">Formations pratiques</span>
                                <br />
                                <span className="text-gray-800">et inclusives</span>
                            </h2>
                            <p className="text-xl text-gray-600 mt-3 leading-relaxed">
                                Ateliers, bootcamps et programmes hybrides (présentiel / en ligne) ciblés sur les jeunes, 
                                notamment les femmes et les non-diplômés
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row gy-5 flex  justify-center items-center  w-full">
                    {/* Content Section */}
                    <div className=" col-md-9  flex-1">
                        <div className="why-choose-us__one-left ">
                            {/* Features Grid */}
                            <div className="features-grid">
                                <div className="row g-4  w-full">
                                    {/* Feature 1 */}
                                    <div className="col-md-6">
                                        <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-blue-300 hover:-translate-y-1">
                                            <div className="mb-4">
                                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <i className="flaticon-machine-repair text-primary text-2xl"></i>
                                                </div>
                                            </div>
                                            <div className="feature-content">
                                                <h4 className="font-bold mb-3 text-gray-800 text-lg">Approche Pratique</h4>
                                                <p className="text-gray-600 mb-0 leading-relaxed">
                                                    Formations basées sur des projets concrets et des cas d'usage réels 
                                                    pour une meilleure employabilité
                                                </p>
                                            </div>
                                            <div className="mt-4">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                                                    <i className="fas fa-check-circle mr-1"></i>
                                                    Projets Réels
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Feature 2 */}
                                    <div className="col-md-6">
                                        <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-orange-300 hover:-translate-y-1">
                                            <div className="mb-4">
                                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                                    <i className="flaticon-web-research text-orange-600 text-2xl"></i>
                                                </div>
                                            </div>
                                            <div className="feature-content">
                                                <h4 className="font-bold mb-3 text-gray-800 text-lg">Inclusion & Diversité</h4>
                                                <p className="text-gray-600 mb-0 leading-relaxed">
                                                    Programmes spécialement conçus pour les femmes et les non-diplômés, 
                                                    favorisant l'égalité des chances
                                                </p>
                                            </div>
                                            <div className="mt-4">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                                                    <i className="fas fa-heart mr-1"></i>
                                                    Égalité
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Feature 3 */}
                                    <div className="col-md-6">
                                        <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-green-300 hover:-translate-y-1">
                                            <div className="mb-4">
                                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                                    <i className="fas fa-graduation-cap text-green-600 text-2xl"></i>
                                                </div>
                                            </div>
                                            <div className="feature-content">
                                                <h4 className="font-bold mb-3 text-gray-800 text-lg">Formation Hybride</h4>
                                                <p className="text-gray-600 mb-0 leading-relaxed">
                                                    Combinaison parfaite entre présentiel et en ligne pour une 
                                                    flexibilité maximale
                                                </p>
                                            </div>
                                            <div className="mt-4">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                                                    <i className="fas fa-laptop mr-1"></i>
                                                    Flexible
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Feature 4 */}
                                    <div className="col-md-6">
                                        <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-red-300 hover:-translate-y-1">
                                            <div className="mb-4">
                                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                                                    <i className="fas fa-users text-red-600 text-2xl"></i>
                                                </div>
                                            </div>
                                            <div className="feature-content">
                                                <h4 className="font-bold mb-3 text-gray-800 text-lg">Accompagnement Personnalisé</h4>
                                                <p className="text-gray-600 mb-0 leading-relaxed">
                                                    Suivi individuel et mentorat pour chaque apprenant 
                                                    jusqu'à l'insertion professionnelle
                                                </p>
                                            </div>
                                            <div className="mt-4">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700">
                                                    <i className="fas fa-user-graduate mr-1"></i>
                                                    Mentorat
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div className="mt-8">
                                <div className="row g-3 text-center">
                                    <div className="col-6">
                                        <div className="p-4 bg-blue-100 rounded-2xl border border-blue-200 hover:scale-105 transition-transform duration-300">
                                            <div className="text-blue-600 font-bold text-2xl mb-1">
                                                <Count number={95}/>%
                                            </div>
                                            <div className="text-gray-600 text-sm">Taux de Réussite</div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="p-4 bg-green-100 rounded-2xl border border-green-200 hover:scale-105 transition-transform duration-300">
                                            <div className="text-green-600 font-bold text-2xl mb-1">
                                                <Count number={80}/>%
                                            </div>
                                            <div className="text-gray-600 text-sm">Insertion Pro</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-10">
                        <div className="why-choose-us__one-image relative">
                            {/* Floating Elements */}
                            <div className="floating-elements">
                                <div className="absolute top-10 right-10 bg-white rounded-2xl shadow-lg p-4 animate-bounce z-10">
                                    <div className="flex items-center">
                                        <i className="fas fa-award text-yellow-500 text-xl mr-3"></i>
                                        <div>
                                            <div className="font-bold text-gray-800">Excellence</div>
                                            <div className="text-gray-500 text-sm">Certifiée</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-20 left-5 bg-primary text-white rounded-2xl shadow-lg p-4 animate-bounce z-10" style={{animationDelay: '1s'}}>
                                    <div className="flex items-center">
                                        <i className="fas fa-clock text-xl mr-3"></i>
                                        <div>
                                            <div className="font-bold">Flexible</div>
                                            <div className="opacity-75 text-sm">Horaires</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Image */}
                            <div className="main-image-wrapper relative">
                                <div className="why-choose-us__one-image-shape">
                                    <div className="shape shape-1 animate-x-axis"></div>
                                    <div className="shape shape-2 animate-x-axis"></div>
                                    <img src={image2.src} alt="decoration" className="shape shape-3 animate-y-axis" />
                                </div>
                                <img src={image1.src} alt="YIRI Academy Formation" 
                                     className="w-full h-auto rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" />
                                
                                {/* Success Badge */}
                                <div className="absolute bottom-5 right-5 bg-green-500 text-white rounded-full px-4 py-2 shadow-lg">
                                    <i className="fas fa-check-circle mr-2"></i>
                                    <span className="font-bold">500+ Réussites</span>
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

export default ChooseUs;