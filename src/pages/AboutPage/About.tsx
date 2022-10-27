import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./About.css";

interface AboutProps {
  image:
    | {
        url: string;
        width: string;
        height: string;
      }
    | undefined;
  description: string | undefined;
}

const About: FC<AboutProps> = ({ image, description }) => {
  return (
    <article className="aboutContainer">
      <h1 className="aboutHeader">
        Um pouco
        <br /> sobre mim
      </h1>
      <LazyLoadImage
        wrapperClassName="aboutImage"
        alt="foto da saris"
        src={image?.url}
        height={image?.height}
        width={image?.width}
        effect="blur"
      />
      <p>{description}</p>
      <p>vamos juntos + link pro portfólio + contatos</p>
    </article>
  );
};

export default About;
