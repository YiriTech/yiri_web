import { useState } from "react";
import ModalVideo from "react-modal-video";
import image1 from "../../../../public/assets/img/skill/skill.png";
import image2 from "../../../../public/assets/img/skill/skill-video-thumb.png";

const SkillArea = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const openVideoModal = () => {
    setOpenVideo(true);
  };

  return (
    <>
      <div className="skill-area__one section-padding">
        <div className="container">
          <div className="row flex-wrap-reverse">
            <div className="col-xl-6 col-lg-6 col-md-11">
              <div className="skill-area__one-left">
                <div className="skill-area__one-left-image">
                  <img src={image1.src} alt="image" />
                </div>
                <div className="skill-area__one-left-video">
                  <img src={image2.src} alt="image" />
                  <div onClick={openVideoModal} className="video-popup skill-area__one-left-video-play-btn">
                    <i className="fas fa-play"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-11">
              <div className="skill-area__one-right">
                <span className="subtitle-one">Nos Expertises</span>
                <h2>Jeunes Ingénieurs, Solutions Concrètes</h2>
                <p>Formés au Maroc, engagés pour l'Afrique. Nous combinons expertise technique et connaissance du terrain pour créer des solutions adaptées aux réalités africaines.</p>
                
                <div className="skill-area__one-right-skill-item">
                  <div className="skill-area__one-right-skill-item-content">
                    <div className="skill-area__one-right-skill-item-content-title">
                      <span>Formation Tech</span>
                    </div>
                    <div className="skill-area__one-right-skill-item-content-count">
                      <span className="counter">90</span>%
                    </div>
                  </div>
                  <div className="skill-area__one-right-skill-item-inner">
                    <div className="skill-area__one-right-skill-item-bar" data-width="90"></div>
                  </div>
                </div>

                <div className="skill-area__one-right-skill-item">
                  <div className="skill-area__one-right-skill-item-content">
                    <div className="skill-area__one-right-skill-item-content-title">
                      <span>Transformation Digitale</span>
                    </div>
                    <div className="skill-area__one-right-skill-item-content-count">
                      <span className="counter">85</span>%
                    </div>
                  </div>
                  <div className="skill-area__one-right-skill-item-inner">
                    <div className="skill-area__one-right-skill-item-bar" data-width="85"></div>
                  </div>
                </div>

                <div className="skill-area__one-right-skill-item">
                  <div className="skill-area__one-right-skill-item-content">
                    <div className="skill-area__one-right-skill-item-content-title">
                      <span>Innovation Locale</span>
                    </div>
                    <div className="skill-area__one-right-skill-item-content-count">
                      <span className="counter">95</span>%
                    </div>
                  </div>
                  <div className="skill-area__one-right-skill-item-inner">
                    <div className="skill-area__one-right-skill-item-bar" data-width="95"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo 
        className='video-modal' 
        channel="youtube" 
        autoplay 
        isOpen={openVideo} 
        videoId="SZEflIVnhH8" 
        onClose={() => setOpenVideo(false)} 
      />
    </>
  );
};

export default SkillArea;