import React from "react";
import Layout from "../components/Layout";
import "../css/careGuide.css";
import SEO from "../components/SEO";
import Image from "gatsby-image";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import DeliveryInfo from "../components/DeliveryInfo";
import ContactForm from "../components/ContactForm";
import LearnMore from "../components/LearnMore";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const query = graphql`
  {
    allStrapiFlowerhornsForSale {
      nodes {
        SOLD
        Flowerhorn_Title
        About_Flowerhorn
        Flowerhorn_Price
        Delivery_Price
        Flowerhorn_Image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    strapiFlowerhornsForSalePage {
      page_title
      page_info
    }
  }
`;
const shop = ({ data }) => {
  return (
    <Layout>
      <SEO title="Shop" description="Buy Flowerhorns in the UK" />

      <div className="shop-hero">
        <div className="shop-text">
          <h2 className="shop-title">
            {data.strapiFlowerhornsForSalePage.page_title}
          </h2>
          <ReactMarkdown
            className="imports-text"
            source={data.strapiFlowerhornsForSalePage.page_info}
          />
          <div className="shop-social">
            <a
              href="https://www.facebook.com/bry.johnston.526/"
              className="facebook socialIcon"
            >
              <FontAwesomeIcon icon={faFacebook} size="4x" />
            </a>
            <a href="mailto: bryan3183@gmail.com" className="email socialIcon">
              <FontAwesomeIcon icon={faEnvelope} size="4x" />
            </a>
            <a
              href="https://www.instagram.com/bryanjohnstoncichlids"
              className="instagram socialIcon"
            >
              <FontAwesomeIcon icon={faInstagram} size="4x" />
            </a>
          </div>
        </div>
      </div>
      {/* ==== */}
      <div className="container">
        {/* ====== */}
        <div className="guide">
          <div className="care-guide-cards">
            {data.allStrapiFlowerhornsForSale.nodes.map((document) => (
              <div className="card" key={document.id}>
                <Image
                  className="card-img-top"
                  fluid={document.Flowerhorn_Image.childImageSharp.fluid}
                  alt="Card image cap"
                />

                <div className="card-body">
                  <div className="card-text">
                    <h5>{document.Flowerhorn_Title}</h5>
                    <p>{document.About_Flowerhorn}</p>
                    <div
                      className={
                        document.SOLD === true || null
                          ? `show-sold`
                          : `not-sold`
                      }
                    ></div>
                    <p className="price">
                      <span>Price:</span> £ {document.Flowerhorn_Price}
                    </p>
                    <p className="delivery-price">
                      <span>Delivery:</span> £ {document.Delivery_Price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Link to="../../imports/">
            <LearnMore label="more info on Flowerhorns here..." />
          </Link>
        </div>
      </div>
      <DeliveryInfo />
      <ContactForm />
    </Layout>
  );
};

export default shop;
