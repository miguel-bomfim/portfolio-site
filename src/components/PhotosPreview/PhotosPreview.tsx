import React, { FC } from "react";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./PhotosPreview.css";

interface CardPreviewProps {
  title: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  slug: string;
}

interface Posts {
  portfolioData: CardPreviewProps[];
}

const PhotosPreview: FC<Posts> = ({ portfolioData }) => {
  return (
    <ImageList variant="masonry" cols={2}>
      {portfolioData?.map((portfolio, idx) => (
        <ImageListItem key={idx} className="imagePreviewContainer">
          <Link key={portfolio.slug} to={`/portfolio/${portfolio?.slug}`}>
            <div>
              <img
                className="imagePreview"
                src={`${portfolio.thumbnail.url}?w=248&fit=crop&auto=format`}
                alt={portfolio.title}
                width="100%"
              />
              <p className="imagePreviewLabel">{portfolio.title}</p>
            </div>
          </Link>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PhotosPreview;
