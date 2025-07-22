"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import Header from "@/components/layout/headers/header/Header";

const TeamPageTwo = () => {
    return (
        <>
            <SEO pageTitle='Team Two' />
            <Header variant="one" />
            <BreadCrumb title='Team Two' innerTitle='Team Two'/>
            <TeamMain />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default TeamPageTwo;