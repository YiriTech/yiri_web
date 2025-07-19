"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import ServicesMain from "./services";
import WorkArea from "../../homes/academy/work";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import Header from "@/components/layout/headers/header/Header";

const ServicePage = () => {
    return (
        <>
            <SEO pageTitle="Nos Programmes - YIRI TECH AFRICA" />
            <Header variant="one" />
            <BreadCrumb title="Nos Programmes" innerTitle="Axes Stratégiques" />
            <ServicesMain />
            <div className="py-4">
                <WorkArea />
            </div>
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default ServicePage;