import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../css/markdown-github.css";

const svg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(226,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%238033aa'/%3E%3Cstop offset='1' stop-color='%231c3ed3'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%2336fff5' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2336fff5' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%2336fff5' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2336fff5' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E")`;

export default ({ data }) => {
  const { service } = data;
  const title = service.frontmatter.title;
  return (
    <Layout headerClass="relative bg-white" bodyClass="px-0 md:px-0 lg:px-0">
      <SEO title={title} />

      <div
        className="min-h-screen flex flex-col items-start bg-no-repeat bg-fixed bg-cover"
        style={{ backgroundImage: svg }}
      >
        <div className="mt-56 bg-white w-full pb-16 mb-20 skew-y-5">
          <div className="container mx-auto px-6 md:px-10 lg:px-24 pt-16 -skew-y-5">
            <h2 className="text-5xl text-indigo-700">
              {title}
            </h2>
            <div className="markdown-body">
              <div dangerouslySetInnerHTML={{ __html: service.html }}></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    service: markdownRemark(id: { eq: $id }) {
      frontmatter {
        path
        image
        title
      }
      html
    }
  }
`;
