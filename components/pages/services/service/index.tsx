"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import ServicesMain from "./services";
import WorkArea from "../../homes/academy/work";
import Testimonial from "../../homes/academy/testimonial";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const ServicePage = () => {
    return (
        <>
            <SEO pageTitle="Nos Programmes - YIRI TECH AFRICA" />
            <HeaderOne variant="" />
            <BreadCrumb title="Nos Programmes" innerTitle="Axes Stratégiques" />
            <ServicesMain />
            <div className="py-4">
                <WorkArea />
            </div>
            {/* <Testimonial /> */}
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default ServicePage;