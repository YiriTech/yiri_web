import { useState } from "react";
// import ModalVideo from "react-modal-video";
import Link from "next/link";
import bannerBg from "../../../../public/assets/img/banner/banner-five-bg.png";
import banner1 from "../../../../public/assets/img/banner/banner-five.png";
import banner2 from "../../../../public/assets/img/banner/banner-five-2.png";

const BannerFive = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
        setOpenVideo(true);
    };
    return (
        <>
            <div className="banner__five" style={{backgroundImage: `url(${bannerBg.src})`}}>
                <div className="container">
                    <div className="row align-items-center gy-4 justify-content-center">
                        <div className="col-xl-7 col-lg-6">
                            <div className="banner__five-content">
                                <span className="subtitle-one">Yiri Digital</span>
                                <h2>Avec <span className="text-bordered text-primary">Yiri Digital</span> on crée des solutions digitales pour votre entreprise</h2>
                                <p>Des solutions digitales pour votre entreprise</p>
                                <div className="banner__five-content-bottom">
                                    <Link href="/contact" className="btn-two">S'inscrire<i className="fas fa-arrow-right"></i></Link>
                                    {/* <span className="banner__five-content-video-btn video-popup" onClick={openVideoModal}><i className="fas fa-play"></i></span> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-9">
                            <div className="banner__five-image">
                                <div className="banner__five-image-wrapper">
                                    <img src={banner1.src} alt="image" />
                                    <img src={banner2.src} className="img-2 animate-y-axis" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="SZEflIVnhH8" onClose={() => setOpenVideo(false)} /> */}
        </>
    );
};

export default BannerFive;