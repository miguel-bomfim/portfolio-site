import React, { FC } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
interface HomeProps {
  introduction: string | undefined;
  homeImage: string | undefined;
  developmentText: string | undefined;
  images: ImagesProps[] | undefined;
  conclusion: string | undefined;
}

interface ImagesProps {
  url: string;
  id: string;
  height: number;
  width: number;
}

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
          <div style={{ marginBottom: "-5em" }}>
            <img className="homeImg" src={homeImage} alt="" />
            <div className="homeFirstParagraph">
              {paragraphs.map((pTag, idx) => {
                return (
                  <p style={{ margin: 0, textShadow: "5px 5px 35px black" }}>
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
              {newImages?.map((image) => (
                <img src={image.url} alt="" />
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
