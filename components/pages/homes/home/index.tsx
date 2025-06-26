"use client"
import SEO from "@/components/data/seo";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import BannerTwo from "./banner";
import AboutTwo from "./about";
import ServicesTwo from "./services";
import SkillArea from "./skill";
import Team from "./team";
import TextSlide from "../thinktank/text-slide";
import ContactForm from "./contact-form";
import WorkProcess from "./work";
import TestimonialTwo from "./testimonial";
import BlogTwo from "./blog";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const Home = () => {
    return (
        <>
            <SEO pageTitle="IT Consulting" />
            <HeaderTwo variant=""  />
            <BannerTwo />
            <AboutTwo />
            <ServicesTwo />
            <SkillArea />
            <Team />
            <TextSlide />
            <ContactForm />
            <WorkProcess />
            <TestimonialTwo />
            <BlogTwo />
            <FooterTwo />
            <ScrollToTop />  
        </>
    );
};

export default Home;