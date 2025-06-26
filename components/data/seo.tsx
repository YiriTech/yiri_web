"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }:{pageTitle?:String}) => {
  useEffect(() => {
    document.title = pageTitle + " - Bantec - IT Services & Technology Next js Template";
  }, []);

  return <></>
};

export default SEO;