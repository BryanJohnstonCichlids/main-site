import "../css/footer.css";
import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const footerContent = graphql`
  {
    footer: strapiFooterContent {
      main_title
      company_summary
      contact_number
    }
    icon: file(relativePath: { in: "lg-icon.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Footer = () => {
  const data = useStaticQuery(footerContent);
  return (
    <footer>
      <Image
        className="icon__img"
        fluid={data.icon.childImageSharp.fluid}
        alt="bryan johnston cichlids logo"
      />
      <h3>{data.footer.main_title}</h3>
      <p>{data.footer.company_summary} </p>
      <a href={data.footer.contact_number}>{data.footer.contact_number}</a>

      <hr></hr>

      <ul className="footer-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/careGuide/">Care guide</Link>
        </li>
        <li>
          <Link to="/imports/">Imports</Link>
        </li>
        <li>
          <Link to="/gallery/">Gallery</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
        <li>
          <Link to="/shop/">Shop</Link>
        </li>
      </ul>
      <p>© Copyright Bryan Johnston Cichlids</p>
    </footer>
  );
};

export default Footer;
