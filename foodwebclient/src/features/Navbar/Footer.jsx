import "../../style/footer.css";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";
import Googleplay from "../../assests/hero-getapp/googleplay.png";
import AppStore from "../../assests/hero-getapp/appstore.png";
import { Link } from "react-router-dom";
import { BsLadder } from "react-icons/bs";

const Footer = () => {
  const FooterData = [
    {
      heading: "About Us",
      content: [
        "Who We Are",
        "Blog",
        "Work With Us",
        "Investor Relations",
        "Report Fraud",
        "Contact Us",
      ],
    },
    {
      heading: "Learn More",
      content: ["Privacy", "Security", "Terms", "Sitemap"],
    },
    {
      heading: "For Restorants",
      content: ["Partner With Us", "Apps For You"],
    },
  ];

  return (
    <>
      <section className="footer">
        <div className="footer-container">
          <div className="footer-wrapper">
            {FooterData.map((item, index) => (
              <div key={index}>
                <h3 style={{ color: "black" }} className="footer-heading">
                  {item.heading}
                </h3>
                <div className="text">
                  {item.content.map((text, subindex) => (
                    <div key={subindex}>{text}</div>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <h3 style={{ color: "black" }} className="footer-heading">
                Social Links
              </h3>
              <div className="icon">
                <Link to="https://www.linkedin.com/" className="app-link">
                  <span className="app-icon">
                    <AiFillLinkedin />
                  </span>
                </Link>
                <Link to="https://www.instagram.com/" className="app-link">
                  <span className="app-icon">
                    <AiFillInstagram />
                  </span>
                </Link>
                <Link to="https://twitter.com/" className="app-link">
                  <span className="app-icon">
                    <AiFillTwitterSquare />
                  </span>
                </Link>
                <Link to="https://www.youtube.com/" className="app-link">
                  <span className="app-icon">
                    <AiFillYoutube />
                  </span>
                </Link>
                <Link to="https://www.facebook.com/" className="app-link">
                  <span className="app-icon">
                    <AiFillFacebook />
                  </span>
                </Link>
              </div>
              <div className="app-icon">
                <Link to="https://play.google.com/store" className="app-link ">
                  <img src={Googleplay} alt="" />
                </Link>
                <Link
                  to="https://www.apple.com/in/app-store/"
                  className="app-link "
                >
                  <img src={AppStore} alt="" />
                </Link>
              </div>
            </div>
          </div>

          <hr />
          <div className="foo">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2023™ Ltd. All
            rights reserved.
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
