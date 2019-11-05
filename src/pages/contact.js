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
          <h1 className="text-4xl md:text-5xl text-indigo-700">
            Kontakt og besøk
          </h1>
        </div>
        <div
          className="w-full sm:w-3/4 lg:w-1/2 mt-10 px-6 py-4"
          style={{
            boxShadow:
              "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
          }}
        >
          <p>
            <strong>Telefon: </strong> 33 04 11 47
          </p>
          <p>
            <strong>Adresse: </strong>Harald Pedersensgt. 9,3182 Horten
          </p>
        </div>
        <div className="w-full">
          <h3 className="mt-10 text-2xl">Åpnings tider</h3>
          <table className="w-full md:w-3/4 text-left w-full border-collapse">
            <tbody>
              <tr className="border-t h-10">
                <td className="font-semibold">Mandag</td>
                <td>08:00</td>
                <td>-</td>
                <td>16:00</td>
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Tirsdag</td>
                <td>08:00</td>
                <td>-</td>
                <td>16:00</td>
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Onsadg</td>
                <td>08:00</td>
                <td>-</td>
                <td>16:00</td>
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Torsdag</td>
                <td>08:00</td>
                <td>-</td>
                <td>16:00</td>
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Fredag</td>
                <td>08:00</td>
                <td>-</td>
                <td>16:00</td>
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Lørdag</td>
                <td>Stengt</td>
                <td />
                <td />
              </tr>
              <tr className="border-t h-10">
                <td className="font-semibold">Søndag</td>
                <td>Stengt</td>
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
