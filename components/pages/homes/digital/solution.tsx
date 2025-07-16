import image from "../../../../public/assets/img/technology-solution/tech-solution-one.png";
import Count from "../../common/count";

const Solution = () => {
    return (
        <>
            <div className="technology-solution__one section-padding">
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-xl-6 col-lg-6 col-md-9">
                            <div className="technology-solution__one-content">
                                <span className="subtitle-one">Pourquoi la digitalisation ?</span>
                                <h2>Un levier pour l’économie locale</h2>
                                <p>Pourtant, ces entreprises sont le cœur économique du tissu local, employant des milliers de jeunes et soutenant des familles entières. Leur digitalisation représente un levier majeur pour :<br/>
- Améliorer leur productivité<br/>
- Étendre leur marché au-delà des frontières locales<br/>
- Créer des emplois liés aux services numériques.<br/><br/>
YIRI DIGITAL se donne pour mission d’être le catalyseur de cette transformation.</p>
<div className="satisfied-customer-counter">
    <div className="counter-wrapper">
        <h3 className="counter"><Count number={100}/></h3>
        <h3>+</h3>
    </div>
    <span>TPE/PME sensibilisées</span>
</div>
                            </div> 
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="technology-solution__one-image">
                                <div className="technology-solution__one-image-wrapper">
                                    <img src={image.src} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Solution;