"use client"
import SEO from '@/components/data/seo';
import BreadCrumb from '../common/breadcrumb';
import RequestQuoteMain from './request-quote';
import FooterOne from '@/components/layout/footers/footer-one';
import ScrollToTop from '../common/scroll/scroll-to-top';
import Header from '@/components/layout/headers/header/Header';

const RequestQuotePage = () => {
    return (
        <>
            <SEO pageTitle="Request Quote" />
            <Header variant='one' />
            <BreadCrumb title="Request Quote" innerTitle="Request Quote" />
            <RequestQuoteMain />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default RequestQuotePage;