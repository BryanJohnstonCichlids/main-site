import React from "react";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import "../css/hero.css";

const getImageAndText = graphql`
  {
    strapiHeroSection {
      heroText
      subheading
      heroImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(getImageAndText);

  return (
    <div>
      <Image
        className="hero__img"
        fluid={data.strapiHeroSection.heroImage.childImageSharp.fluid}
        alt="hero img"
      />
      <div className="container">
        <div className="hero-text">
          <h1 className="heading">{data.strapiHeroSection.heroText}</h1>
          <h2 className="subheading">{data.strapiHeroSection.subheading}</h2>
        </div>
        <div className="action-buttons">
          <Link to="/shop/">
            <button type="button" className="btn btn-danger">
              Shop Now!
            </button>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Hero;
