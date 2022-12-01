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
  description: string;
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
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
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
    </article>
  );
};

export default About;
