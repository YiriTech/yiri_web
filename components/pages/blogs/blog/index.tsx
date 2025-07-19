"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import BlogGridMain from "./blog-grid";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import Header from "@/components/layout/headers/header/Header";


const BlogGrid = () => {
    return (
        <>
            <SEO pageTitle='Blog page' />
            <Header variant="one" />
            <BreadCrumb title="Blog page" innerTitle="" />
            <BlogGridMain />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default BlogGrid;