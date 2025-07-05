"use client";
import SEO from "@/components/data/seo";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BannerFive from "./banner";
import About from "./about";
import Choose from "./choose";
import Services from "./services";
import Solution from "./solution";
import WorkArea from "./work";
import FooterOne from "@/components/layout/footers/footer-one";
import Blog from "./blog";
import Testimonial from "./testimonial";

const Digital = () => {
    return (
        <div>
            <SEO pageTitle='YIRI Digital - Transformation Digitale des PME' />
            <HeaderOne variant="" />
            <BannerFive />
            <About />
            <Choose />
            <Services />
            <Solution />
            <WorkArea />
            <Testimonial />
            <Blog />
            <FooterOne />
            <ScrollToTop />
        </div>
    );
};

export default Digital;