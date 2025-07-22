"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import PricingPlansMain from "./pricing-plans";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import Header from "@/components/layout/headers/header/Header";

const PricingPages = () => {
    return (
        <>
            <SEO pageTitle='Pricing Plan' />
            <Header variant="one"/>
            <BreadCrumb title='Pricing Plan' innerTitle='Pricing Plan' />
            <PricingPlansMain />
            <FooterOne />    
            <ScrollToTop />
        </>
    );
};

export default PricingPages;