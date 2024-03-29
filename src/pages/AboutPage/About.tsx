import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import classNames from "classnames";
import useMobile from "../../hooks/useMobile";
import useDelay from "../../hooks/useDelay";
import Loading from "../../components/Loading";
import { AboutProps } from "./types";

import "./About.css";

const About: FC<AboutProps> = ({
  image,
  description,
  portfolioExamples,
  imgText,
}) => {
  const isMobile = useMobile();

  const parser = new DOMParser();
  const doc = parser.parseFromString(description || "", "text/html");
  const aboutParagraph = doc.getElementsByTagName("p");
  var paragraphs = Array.from(aboutParagraph);
  const delayToRender = useDelay("aboutPage");

  return (
    <article className="aboutContainer">
      {delayToRender ? (
        <Loading />
      ) : (
        <>
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

          <p className="p0">{paragraphs[0]?.innerHTML}</p>
          <div className="paragraphOneDiv">
            <p className="p1">{paragraphs[1]?.innerHTML}</p>
            <img className="paragraphOneImg" src={imgText?.url} alt="" />
          </div>
          <p className="p2">{paragraphs[2]?.innerHTML}</p>
          <p className="p3">{paragraphs[3]?.innerHTML}</p>
          <p className="p4">{paragraphs[4]?.innerHTML}</p>
          <p className="p5">{paragraphs[5]?.innerHTML}</p>

          <div className="endPresentationContainer">
            <h2 className="endPresentationTitle1">Vamos</h2>
            <div className="endPresentation">
              {portfolioExamples?.map((portfolio, idx) => {
                return (
                  <img
                    key={idx}
                    className={`endImage${idx}`}
                    style={{ maxWidth: "20%" }}
                    src={portfolio.url}
                    alt=""
                  />
                );
              })}
            </div>
            <h2 className="endPresentationTitle2"> criar</h2>
          </div>
        </>
      )}
    </article>
  );
};

export default About;
