"use client"
import SEO from "@/components/data/seo";
import FooterThree from "@/components/layout/footers/footer-three";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import BannerThinkTank from "./banner";
import ServicesThree from "./services";
import TextSlide from "./text-slide";
import AboutThinkTank from "./about";
import FaqThinTank from "./faq";
import ChooseUsThinkTank from "./choose-us";
import Header from "@/components/layout/headers/header/Header";

const ThinTank = () => {
    return (
        <>
            <SEO pageTitle="YIRI Think Tank - Recherche et Influence Politique" />
            <Header variant="two" />
            <BannerThinkTank />
            <ServicesThree />
            <TextSlide />
            <AboutThinkTank />
            <FaqThinTank />
            <ChooseUsThinkTank />
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default ThinTank;
