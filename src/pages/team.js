import React from "react";
import { Link, withPrefix, graphql } from "gatsby";
import Layout from "../components/layout";
import team from "../images/undraw_hang_out_h9ud.svg";
import SEO from "../components/seo";

const Profile = ({ name, title, url, email, image, children }) => {
  return (
    <div className="w-full sm:w-1/2 mt-4 px-2 flex flex-col">
      <div className="flex">
        <div className="p-2 w-24 h-24">
          <img alt={name} className="rounded-full " src={withPrefix(image)} />
        </div>
        <div className="w-2/3 flex flex-col">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <div className="leading-tight">
            <p className="font-medium">{title}</p>
            <p>
              <a className="hover:underline" href={`https://${url}`}>
                {url}
              </a>
            </p>
            <p>
              <a className="hover:underline" href={email}>
                {email}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="pt-4">{children}</div>
    </div>
  );
};

const Team = ({data}) => {
  const members = data.allMarkdownRemark.edges;

  return (
    <Layout headerClass="bg-white relative">
      <SEO title="Team" />

      <div
        className="min-h-screen pt-24 sm:pt-32 md:pt-64 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 mb-20 bg-size-5/6 md:bg-size-4/5 lg:bg-size-2/3 bg-right-top bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${team})` }}
      >
        <div className="container w-3/4 md:w-1/2 mt-20 font-serif font-hairline self-start">
          <h1 className="text-3xl md:text-5xl text-indigo-700 leading-tight">
            Meet The Team
          </h1>
          <p className="text-base">
            Our team of qualified accountants and financial consultants can help
            your business at any stage of it’s growth.
          </p>
        </div>

        <div className="flex flex-wrap mt-10 md:mt-16 lg:mt-24">
          {members.map(({node}) => {
            const {title, jobtitle, email, linkedinurl, image, path} = node.frontmatter
            return (
            <Profile
              name={title}
              title={jobtitle}
              url={linkedinurl}
              email={email}
              image={withPrefix(image)}
              key={path}
            >
              {node.excerpt}
            </Profile>
          )})}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TeamMemberQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/team/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            jobtitle
            email
            linkedinurl
            image
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default Team;
