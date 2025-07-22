"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import ServicesSingleMain from "./services-single";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import Header from "@/components/layout/headers/header/Header";

const ServicesSingle = ({serviceDetails}:{
    serviceDetails:{
        title:string,
    }
}) => {
    const words = serviceDetails.title.split(' ');
    const firstAndSecondWord = words.slice(0, 2).join(' ');
    return (
        <>
            <SEO pageTitle={serviceDetails?.title} />            
            <Header variant="one" />
            <BreadCrumb title={firstAndSecondWord} innerTitle={serviceDetails?.title} />
            <ServicesSingleMain firstAndSecondWord={firstAndSecondWord}/>
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default ServicesSingle;