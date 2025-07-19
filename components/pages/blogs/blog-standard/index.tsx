"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import BlogStandardMain from "./blog-standard";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import Header from "@/components/layout/headers/header/Header";


const BlogStandardPage = () => {
    return (
        <>
            <SEO pageTitle='Blog Standard' />
            <Header variant="one" />
            <BreadCrumb title="Blog Standard" innerTitle="Blog Standard" />
            <BlogStandardMain />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default BlogStandardPage;