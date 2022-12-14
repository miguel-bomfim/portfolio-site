import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import classNames from "classnames";
import useMobile from "../../hooks/useMobile";
import "./About.css";
interface AboutProps {
  image:
    | {
        url: string;
        width: string;
        height: string;
      }
    | undefined;
  description: string;
  imgText: {
    url: string;
  };
  portfolioExamples:
    | [
        {
          url: string;
          id: string;
        }
      ]
    | undefined;
}

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
                style={{ maxWidth: "20%" }}
                src={portfolio.url}
                alt=""
              />
            );
          })}
        </div>
        <h2 className="endPresentationTitle2"> criar</h2>
      </div>
    </article>
  );
};

export default About;
