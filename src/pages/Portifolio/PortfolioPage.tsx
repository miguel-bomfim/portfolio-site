import React, { FC } from "react";
import PhotosPreview from "../../components/PhotosPreview";
import { Outlet } from "react-router-dom";
import "./Portfolio.css";

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
  isLoading: boolean;
}

const Portfolio: FC<Posts> = ({ portfolioData, isLoading }) => {
  return (
    <div className="portfolioList">
      {!isLoading && <PhotosPreview portfolioData={portfolioData} />}
      <Outlet />
    </div>
  );
};

export default Portfolio;
