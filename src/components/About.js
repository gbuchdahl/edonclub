import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pegasus.png" }) {
        childImageSharp {
          fluid(maxWidth: 240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div
      id="about"
      className="row justify-content-around align-items-center section"
    >
      <div className="col-md-5 d-none d-md-block">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
      <div className="col-md-6 col-11">
        <h1 className="section__title">About Us</h1>
        <p className="section__body mt-4">
          The Edon Club is a new social group devoted to creating a space for
          all genders on Yale's campus. Formerly the CT Delta chapter of the
          Sigma Phi Epsilon fraternity, we disaffiliated from the national
          organization in 2020 and promptly voted overwhelmingly in favor of
          becoming a coed group. We believe now is the time to make this change
          and reimagine our model of the collegiate social club, maintaining our
          old values and building new traditions.
        </p>
      </div>
      <div className="col-10 mt-5 d-block d-md-none">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    </div>
  );
};

export default About;
