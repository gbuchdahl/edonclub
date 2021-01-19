import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/Hero";
import About from "../components/About";
import Board from "../components/Board";
import Contact from "../components/Contact";

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <Hero />
    <About />
    <Board />
    <Contact />
  </Layout>
);

export default IndexPage;
