import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not found" />
      <div className="min-h-screen flex flex-col items-center align-center justify-center text-fold">
        <h1 className="text-5xl">Not Found</h1>
        <p>You just hit a page that doesn't exist...</p>
      </div>
    </>
  );
}

export default NotFoundPage;
