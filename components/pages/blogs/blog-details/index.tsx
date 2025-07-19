"use client"

import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import BlogSingleMain from "./blog-details";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import Header from "@/components/layout/headers/header/Header";

const BlogDetails = ({singleData}:{
    singleData:any
}) => {
    const firstThreeWords = singleData?.title.split(' ').slice(0, 3).join(' ') + '...';
    return (
        <>
            <SEO pageTitle={singleData?.title} />
            <Header variant="one" />
            <BreadCrumb title={firstThreeWords} innerTitle={singleData?.title} />
            <BlogSingleMain singleData={singleData}/>
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default BlogDetails;