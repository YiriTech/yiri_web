"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import FaqPage from "./faq-page";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import Header from "@/components/layout/headers/header/Header";

const Faq = () => {
    return (
        <>        
            <SEO pageTitle='FAQ' />
            <Header variant="one" />
            <BreadCrumb title='Question & Ans.' innerTitle="FAQ's" />
            <FaqPage />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default Faq;