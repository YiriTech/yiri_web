"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import Header from "@/components/layout/headers/header/Header";

const TeamPage = () => {
    return (
        <>
            <SEO pageTitle='Notre Équipe - YIRI TECH AFRICA' />
            <Header variant="one" />
            <BreadCrumb title='Notre Équipe' innerTitle='Équipe Fondatrice'/>
            <TeamMain />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default TeamPage;