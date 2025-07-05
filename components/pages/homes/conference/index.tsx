"use client";
import SEO from "@/components/data/seo";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BannerFour from "./banner";
import About from "./about";
import Choose from "./choose";
import Services from "./services";
import Video from "./video";
import FooterOne from "@/components/layout/footers/footer-one";
import Blog from "./blog";

const Conference = () => {
    return (
        <div>
            <SEO pageTitle='YIRI Conférences - Événements Tech en Afrique' />
            <HeaderOne variant="" />
            <BannerFour />
            <About />
            <Choose />
            <Services />
            <Video />
            <Blog />
            <FooterOne />
            <ScrollToTop />
        </div>
    );
};

export default Conference;