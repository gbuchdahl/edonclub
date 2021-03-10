import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "edoncrest.png" }) {
        childImageSharp {
          fluid(maxWidth: 240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div id="top" className="row align-items-center justify-content-around">
      <div className="col-12 col-md-6">
        <h1 className="Hero__header text-center">The Edon Club</h1>
        <h3 className="Hero__subtitle text-center mx-5 mx-md-3">
          High Street's only coeducational social group.
        </h3>
      </div>
      <div className="col-8 col-md-4 Hero__image">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    </div>
  );
};

export default Hero;
