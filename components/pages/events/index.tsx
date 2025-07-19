"use client"
import SEO from "@/components/data/seo";
import TwoColumns from "./content";
import FooterOne from "@/components/layout/footers/footer-one";
import BreadCrumb from "../common/breadcrumb";
import ScrollToTop from "../common/scroll/scroll-to-top";
import Header from "@/components/layout/headers/header/Header";

const Events = () => {
    return (
        <>
            <SEO pageTitle='Portfolio Grid - 02 Columns' />
            <Header variant="one" />
            <BreadCrumb title="Nos evenements" innerTitle="Nos evenements en images" />
            <TwoColumns />        
            <FooterOne />    
            <ScrollToTop />      
        </>
    );
};

export default Events;