import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/Hero";
import About from "../components/About";
import Board from "../components/Board";
import Contact from "../components/Contact";

const IndexPage = () => (
  <Layout>
    <SEO title="The Edon Club at Yale" />
    <Hero />
    <About />
    <Board />
    <Contact />
  </Layout>
);

export default IndexPage;
