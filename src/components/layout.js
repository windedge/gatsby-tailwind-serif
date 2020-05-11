import React from "react";
import { Helmet } from "react-helmet";

import Header from "./header";
import Footer from "./footer";
import SEO from './seo'
import "../css/style.css";

const Layout = ({ className, headerClass, bodyClass, children, ...props }) => {
  bodyClass = bodyClass || "container mx-auto px-6 md:px-10 lg:px-16";
  return (
    <div className={className} {...props}>
      <SEO/>
      <Helmet>
        <body className="font-sans antialiased" />
      </Helmet>

      <Header className={headerClass} />
      <div className={bodyClass}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
