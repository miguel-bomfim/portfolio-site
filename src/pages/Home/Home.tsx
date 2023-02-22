import React, { FC } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { HomeProps, ImagesProps } from "./types";

const Home: FC<HomeProps> = ({
  introduction,
  homeImage,
  developmentText,
  images,
  conclusion,
}) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(introduction || "", "text/html");
  const homeParagraph = doc.getElementsByTagName("p");
  var paragraphs = Array.from(homeParagraph);

  const firstImage = images && images[0]?.url;

  const newImages: ImagesProps[] | undefined = images?.slice(1);
  const lastImage: ImagesProps | undefined = newImages?.pop();

  return (
    <>
      {images && (
        <div>
          <div className="homeBanner">
            <img className="homeImg" loading="lazy" src={homeImage} alt="" />
            <div className="homeFirstParagraph">
              {paragraphs.map((pTag, idx) => {
                return (
                  <p
                    key={idx}
                    style={{ margin: 0, textShadow: "5px 5px 35px black" }}
                  >
                    {pTag.innerHTML}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="homeContainer">
            <div className="secondParagrahContainer">
              <p className="homeSecondParagraph">{developmentText}</p>
              <img className="secondParagraphImg" src={firstImage} alt="" />
            </div>
            <div className="imagesContainer">
              {newImages?.map((image, idx) => (
                <img key={idx} src={image.url} alt="" />
              ))}
            </div>
            <img className="lastImg" src={lastImage?.url} alt="" />

            <Link
              to="/portfolio"
              style={{
                marginTop: "50px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: "30px", marginRight: "16px" }}>
                {conclusion}
              </p>
              <ArrowCircleRightIcon fontSize="large" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
