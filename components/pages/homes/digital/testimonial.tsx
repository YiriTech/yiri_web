import image from "../../../../public/assets/img/testimonial/user-pic-2.png";

const TestimonialFive = () => {
    return (
        <>
            <div className="testimonial__four">
                <div className="testimonial__four-card">
                    <div className="testimonial__four-card-profile">
                        <img src={image.src} alt="image" />
                    </div>
                    <h3>Fatoumata Diallo</h3>
                    <p>Grâce à l’accompagnement de YIRI DIGITAL, notre entreprise a pu franchir un cap dans sa digitalisation. Les outils proposés sont simples, efficaces et adaptés à nos besoins quotidiens.</p>
                    <div className="testimonial__four-card-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default TestimonialFive;