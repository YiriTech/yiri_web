"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";

const AboutUs = () => {
    return (
      <>
        <SEO pageTitle="À Propos - YIRI TECH AFRICA" />
        <HeaderOne variant="" />
        <BreadCrumb title="À Propos" innerTitle="Qui Sommes-Nous" />
        <AboutMain />
        <FooterOne />        
        <ScrollToTop />
      </>
    );
};

export default AboutUs;