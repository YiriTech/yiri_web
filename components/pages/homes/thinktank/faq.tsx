import React, { useState } from 'react';
import Count from '../../common/count';

const FaqThinkTank = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(1);
    const faqs = [
        {
            question: "Pourquoi un Think Tank africain sur le numérique ?",
            answer: "L’Afrique a besoin d’un leadership intellectuel fort pour accompagner sa transformation numérique. Trop peu de réflexions et d’études locales nourrissent les politiques publiques et les stratégies des acteurs économiques. YIRI THINK TANK se positionne comme un laboratoire d’idées africain pour produire des analyses et recommandations adaptées aux réalités locales, donner une voix aux jeunes, aux femmes et aux entrepreneurs de terrain, et influencer positivement les décideurs publics et privés."
        },
        {
            question: "Quelles sont les ambitions de YIRI THINK TANK pour 2025-2026 ?",
            answer: (
                <ul style={{marginLeft: '1rem'}}>
                    <li>Réaliser 2 rapports stratégiques sur le numérique en Afrique de l’Ouest</li>
                    <li>Organiser des tables rondes thématiques avec décideurs et acteurs terrain</li>
                    <li>Créer un réseau d’experts africains et de la diaspora</li>
                </ul>
            )
        },
        {
            question: "Quels sont les axes d’action prioritaires ?",
            answer: (
                <ul style={{marginLeft: '1rem'}}>
                    <li>Notes de veille et rapports d’analyse</li>
                    <li>Recommandations pour politiques publiques (éducation, inclusion numérique, data)</li>
                    <li>Événements de réflexion (webinaires, panels, cafés tech)</li>
                    <li>Plateforme en ligne pour partager nos publications</li>
                </ul>
            )
        },
        {
            question: "Quels sont les indicateurs de succès (KPIs) ?",
            answer: (
                <ul style={{marginLeft: '1rem'}}>
                    <li>2 publications majeures diffusées en Afrique francophone</li>
                    <li>1000 téléchargements de nos rapports sur la plateforme</li>
                    <li>5 recommandations adoptées ou discutées par des institutions locales</li>
                </ul>
            )
        },
        {
            question: "Pourquoi rejoindre YIRI THINK TANK ?",
            answer: (
                <ul style={{marginLeft: '1rem'}}>
                    <li>Amplifiez votre voix sur des sujets tech en Afrique</li>
                    <li>Participez à la construction de politiques plus inclusives et innovantes</li>
                    <li>Appuyez une structure jeune qui relie terrain et décisionnaires</li>
                </ul>
            )
        },
        {
            question: "Comment contacter YIRI THINK TANK ?",
            answer: (
                <div>
                    <div>YIRI TECH AFRICA</div>
                    <div>📧 Email : <a href="mailto:contact@yiri.tech">contact@yiri.tech</a></div>
                    <div>🌐 Site web : <a href="https://www.yiri.tech" target="_blank" rel="noopener noreferrer">www.yiri.tech</a></div>
                </div>
            )
        },
    ];
    const toggleFaq = (index:number | null) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
        <div className="faq__two section-padding">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-xl-6">
                        <div className="faq__two-title">
                            <span className="subtitle-one">Questions fréquentes</span>
                            <h2>YIRI THINK TANK : <span className="highlighted-two">FAQThinkTank</span></h2>
                            <p>Découvrez notre mission, nos ambitions et comment rejoindre notre laboratoire d’idées pour la transformation numérique africaine.</p>
                        </div>
                        {/* <div className="award">
                            <div className="award-wrapper">
                                <div className="award-icon">
                                    <i className="fas fa-award"></i>
                                </div>
                                <div className="award-count">
                                    <h3 className="counter"><Count number={20}/></h3>
                                    <h3>+</h3>
                                </div>
                                <span>Winning award</span>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-xl-6">
                        <div className="faqThinkTank-collapse">
                            {faqs.map((faqThinkTank, index) => (
                                <div className="faqThinkTank-collapse-item" key={index}>
                                    <div className={`faqThinkTank-collapse-item-card ${activeIndex === index ? 'active' : ''}`}>
                                        <div className="faqThinkTank-collapse-item-card-header" onClick={() => toggleFaq(index)}>
                                            <h6>{faqThinkTank.question}</h6>
                                            <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                                        </div>
                                        <div className={`faqThinkTank-collapse-item-card-header-content ${activeIndex === index ? 'active' : 'display-none'}`}>
                                            <p>{faqThinkTank.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>	
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
};

export default FaqThinkTank;