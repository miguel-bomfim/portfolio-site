import React, { FC } from "react";
import PhotosPreview from "../../components/PhotosPreview";
import { Outlet } from "react-router-dom";
import "./Portfolio.css";

interface CardPreviewProps {
  title: string;
  photos: [{ id: string; url: string; height: number; width: number }];
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  slug: string;
  createdAt: Date;
}

interface Posts {
  posts: CardPreviewProps[];
}

const Portfolio: FC<Posts> = ({ posts }) => {
  return (
    <div className="portfolioList">
      <PhotosPreview posts={posts} />
      <Outlet />
    </div>
  );
};

export default Portfolio;
