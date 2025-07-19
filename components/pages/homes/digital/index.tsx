"use client";
import SEO from "@/components/data/seo";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import BannerDigital from "./banner";
import AboutDigital from "./about";
import Choose from "./choose";
import Solution from "./solution";
import WorkArea from "./work";
import FooterOne from "@/components/layout/footers/footer-one";
import Header from "@/components/layout/headers/header/Header";

const Digital = () => {
    return (
        <div>
            <SEO pageTitle='YIRI Digital - Transformation Digitale des PME' />
            <Header variant="two" />
            <BannerDigital />
            <AboutDigital />
            <WorkArea />
            <Choose />
            <Solution />
            <FooterOne />
            <ScrollToTop />
        </div>
    );
};

export default Digital;