import React, { FC } from "react";
import PhotosPreview from "../../components/PhotosPreview";
import { Outlet } from "react-router-dom";
import "./Portfolio.css";
import { Posts } from "./types";

const Portfolio: FC<Posts> = ({ portfolioData, isLoading }) => {
  return (
    <div className="portfolioList">
      {!isLoading && <PhotosPreview portfolioData={portfolioData} />}
      <Outlet />
    </div>
  );
};

export default Portfolio;
