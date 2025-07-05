import Link from "next/link";
import bannerBg from "../../../../public/assets/img/banner/banner-four-bg.png";
import banner1 from "../../../../public/assets/img/banner/banner-four.png";

const BannerFour = () => {
    return (
        <>
            <div className="banner__four" style={{backgroundImage: `url(${bannerBg.src})`}}>
                <div className="container">
                    <div className="row align-items-center gy-4 justify-content-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="banner__four-content">
                                <span className="subtitle-two">YIRI Conférences</span>
                                <h2>Événements <span className="text-bordered text-primary">Tech</span> Accessibles Gratuitement</h2>
                                <p>Organisation d'événements, panels et journées tech avec des invités africains et internationaux, accessibles gratuitement aux jeunes et étudiants.</p>
                                <div className="banner__four-content-bottom">
                                    <Link href="/contact" className="btn-two">S'inscrire à un Événement<i className="fas fa-arrow-right"></i></Link>
                                    <div className="banner__four-content-call">
                                        <i className="flaticon-telephone-call"></i>
                                        <div className="banner__four-content-call-right">
                                            <span>Nous contacter</span>
                                            <Link href="tel:+212684499227">+212 6 84 49 92 27</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-9">
                            <div className="banner__four-image">
                                <div className="banner__four-image-wrapper">
                                <img src={banner1.src} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerFour;