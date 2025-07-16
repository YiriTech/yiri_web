"use client"
import SEO from "@/components/data/seo";
import FooterThree from "@/components/layout/footers/footer-three";
import HeaderThree from "@/components/layout/headers/header/header-three";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import BannerThinkTank from "./banner";
import ServicesThree from "./services";
import TextSlide from "./text-slide";
import AboutThinkTank from "./about";
import PortfolioThree from "./portfolio";
import FaqThinTank from "./faq";
import ChooseUsThinkTank from "./choose-us";
import TestimonialThree from "./testimonial";
import Work from "./work";
import BlogThree from "./blog";

const ThinTank = () => {
    return (
        <>
            <SEO pageTitle="YIRI Think Tank - Recherche et Influence Politique" />
            <HeaderThree variant={""}  />
            <BannerThinkTank />
            <ServicesThree />
            <TextSlide />
            <AboutThinkTank />
            {/* <PortfolioThree /> */}
            <FaqThinTank />
            <ChooseUsThinkTank />
            {/* <TestimonialThree /> */}
            {/* <Work /> */}
            {/* <BlogThree /> */}
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default ThinTank;
