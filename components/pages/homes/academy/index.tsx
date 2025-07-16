"use client";
import SEO from "@/components/data/seo";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BannerAcademy from "./banner";
import About from "./about";
import ChooseUs from "./choose-us";
import Features from "./features";
import Portfolio from "./portfolioAcademy";
// import Pricing from "./pricing";
import WorkArea from "./work";
import FooterOne from "@/components/layout/footers/footer-one";
import Blog from "./blog";
import Testimonial from "./testimonial";
import HeaderTwo from "@/components/layout/headers/header/header-two";

const Academy = () => {
    return (
        <div>
            <SEO pageTitle='YIRI Academy - Former les compétences numériques de demain' />
            <HeaderTwo variant="" />
            <BannerAcademy />
            <About />
            {/* <ChooseUs /> */}
            <WorkArea />
            <Features />
            {/* <Portfolio /> */}
            {/* <Pricing /> */}
            {/* <Testimonial /> */}
            {/* <Blog /> */}
            <FooterOne />
            <ScrollToTop />
        </div>
    );
};

export default Academy;