"use client"
import SEO from "@/components/data/seo";
import BannerTwo from "./banner";
import AboutTwo from "./about";
import ServicesTwo from "./services";
import SkillArea from "./skill";
import Team from "./team";
import TextSlide from "../thinktank/text-slide";
import ContactForm from "./contact-form";
import WorkProcess from "./work";
import PartnersSection from "./partners";
import BlogTwo from "./blog";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import Header from "@/components/layout/headers/header/Header";

const Home = () => {
    return (
        <>
            <SEO pageTitle="YIRI TECH AFRICA - La Tech au Service de la Renaissance Africaine" />
            <Header variant="one"  />
            <BannerTwo />
            <AboutTwo />
            <ServicesTwo />
            <SkillArea />
            <Team />
            <TextSlide />
            <ContactForm />
            <WorkProcess />
            <PartnersSection />
            <FooterTwo />
            <ScrollToTop />  
        </>
    );
};

export default Home;