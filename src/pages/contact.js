import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <div className="min-h-screen mb-6 flex flex-col items-start">
        <div className="w-3/4 md:w-1/2 mt-24 font-serif font-hairline">
          <h1 className="text-4xl md:text-5xl text-indigo-700">Contact</h1>
        </div>
        <div
          className="w-full sm:w-3/4 lg:w-1/2 mt-10 px-6 py-4"
          style={{
            boxShadow:
              "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
          }}
        >
          <p>
            <strong>Phone:</strong> XXX XXX XXX
          </p>
          <p>
            <strong>Email: </strong>xxx@xxx.com
          </p>
        </div>
        <div className="w-full">
          <h3 className="mt-10 text-2xl">Business Hours</h3>
          <table className="w-full md:w-3/4 text-left w-full border-collapse">
            <tbody>
              <tr className="border-t h-10">
                <td className="font-semibold">Monday</td>
                <td>8:30am</td>
                <td>-</td>
                <td>5:00pm</td>
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Tuesday</td>
                <td>8:30am</td>
                <td>-</td>
                <td>5:00pm</td>
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Wednesday</td>
                <td>8:30am</td>
                <td>-</td>
                <td>5:00pm</td>
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Thursday</td>
                <td>8:30am</td>
                <td>-</td>
                <td>5:00pm</td>
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Friday</td>
                <td>8:30am</td>
                <td>-</td>
                <td>5:00pm</td>
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Saturday</td>
                <td>Closed</td>
                <td />
                <td />
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Sunday</td>
                <td>Closed</td>
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
