"use client";
import SEO from "@/components/data/seo";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import BannerConference from "./banner";
import AboutConferences from "./about";
import Choose from "./choose";
import Services from "./services";
import Video from "./video";
import FooterOne from "@/components/layout/footers/footer-one";
import Blog from "./blog";
import Header from "@/components/layout/headers/header/Header";

const Conference = () => {
    return (
        <div>
            <SEO pageTitle='YIRI Conférences - Événements Tech en Afrique' />
            <Header variant="one" />
            <BannerConference />
            <AboutConferences />
            {/* <Choose /> */}
            {/* <Services /> */}
            <Video />
            {/* <Blog /> */}
            <FooterOne />
            <ScrollToTop />
        </div>
    );
};

export default Conference;