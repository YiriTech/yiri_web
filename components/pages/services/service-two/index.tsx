"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import ServicesMain from "./service-two";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import Header from "@/components/layout/headers/header/Header";

const ServicePageTwo = () => {
    return (
        <>
            <SEO pageTitle="Services Two" />
            <Header variant="one" />
            <BreadCrumb title="Services Two" innerTitle="Services Two" />
            <ServicesMain />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default ServicePageTwo;