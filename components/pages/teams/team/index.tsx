"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const TeamPage = () => {
    return (
        <>
            <SEO pageTitle='Notre Équipe - YIRI TECH AFRICA' />
            <HeaderOne variant="" />
            <BreadCrumb title='Notre Équipe' innerTitle='Équipe Fondatrice'/>
            <TeamMain />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default TeamPage;