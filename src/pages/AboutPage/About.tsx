import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import classNames from "classnames";
import useMobile from "../../hooks/useMobile";
import "./About.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
interface AboutProps {
  image:
    | {
        url: string;
        width: string;
        height: string;
      }
    | undefined;
  description: string | undefined;
  portfolioExamples:
    | [
        {
          url: string;
          id: string;
        }
      ]
    | undefined;
}

const About: FC<AboutProps> = ({ image, description, portfolioExamples }) => {
  const isMobile = useMobile();

  return (
    <article className="aboutContainer">
      <div className="aboutHeader">
        <h2 className="aboutHeaderTitle">
          Sarah
          <br />
          Heloísa
        </h2>
        <LazyLoadImage
          wrapperClassName={classNames({
            aboutImageWrapper: !isMobile,
            aboutImageWrapperMobile: isMobile,
          })}
          className="aboutImage"
          alt="foto da saris"
          src={image?.url}
          effect="blur"
        />
      </div>
      <p className="description">{description}</p>
      <div className="endPresentationContainer">
        <h2 className="endPresentationTitle1">Vamos</h2>
        <div className="endPresentation">
          {portfolioExamples?.map((portfolio, idx) => {
            return (
              <img
                key={idx}
                style={{ maxWidth: "15%" }}
                src={portfolio.url}
                alt=""
              />
            );
          })}
        </div>
        <h2 className="endPresentationTitle2 "> criar</h2>
      </div>

      <div className="contactSection">
        <h3 className="contactTitle">Me chama!</h3>
        <div role="presentation">
          <Breadcrumbs sx={{ fontSize: "50px" }} aria-label="breadcrumb">
            <Link
              className="linkSizes"
              underline="hover"
              color="inherit"
              target="_blank"
              href="https://www.instagram.com/sarahheloisa/"
            >
              Instagram
            </Link>
            <Link
              className="linkSizes"
              underline="hover"
              color="inherit"
              href="mailto:sarahheloisa2010@hotmail.com"
            >
              Email
            </Link>
          </Breadcrumbs>
        </div>
      </div>
    </article>
  );
};

export default About;
