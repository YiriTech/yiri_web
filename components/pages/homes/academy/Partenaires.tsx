import brand1 from "../../../../public/assets/img/brand/brand-1.png";
import brand2 from "../../../../public/assets/img/brand/brand-2.png";
import brand3 from "../../../../public/assets/img/brand/brand-3.png";
import brand4 from "../../../../public/assets/img/brand/brand-4.png";
import brand5 from "../../../../public/assets/img/brand/brand-5.png";

export default function PartnairesAcademy(){

    return <div className="brand__area pt-115">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="text__slider">
                        <div className="text-slide">
                            <div className="sliders scroll">
                                <div className="brand__area-item">
                                    <img src={brand1.src} alt="image" />
                                </div>
                                <div className="brand__area-item">
                                    <img src={brand2.src} alt="image" />
                                </div>
                                <div className="brand__area-item">
                                    <img src={brand3.src} alt="image" />
                                </div>
                                <div className="brand__area-item">
                                    <img src={brand4.src} alt="image" />
                                </div>
                                <div className="brand__area-item">
                                    <img src={brand5.src} alt="image" />
                                </div>
                            </div>
                            <div className="sliders scroll">
                                <div className="brand__area-item">
                                    <img src={brand1.src} alt="image" />
                                </div>
                                <div className="brand__area-item">
                                    <img src={brand2.src} alt="image" />
                                </div>
                                <div className="brand__area-item">
                                    <img src={brand3.src} alt="image" />
                                </div>
                                <div className="brand__area-item">
                                    <img src={brand4.src} alt="image" />
                                </div>
                                <div className="brand__area-item">
                                    <img src={brand5.src} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}