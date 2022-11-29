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
  posts: CardPreviewProps[];
}

const PhotosPreview: FC<Posts> = ({ posts }) => {
  return (
    <ImageList sx={{ maxWidth: 1080 }} variant="masonry" cols={2}>
      {posts?.map((post, idx) => (
        <ImageListItem key={idx} className="imagePreviewContainer">
          <Link key={post.slug} to={`/portfolio/${post?.slug}`}>
            <div>
              <img
                className="imagePreview"
                src={`${post.thumbnail.url}?w=248&fit=crop&auto=format`}
                alt={post.title}
                width="100%"
              />
              <p className="imagePreviewLabel">{post.title}</p>
            </div>
          </Link>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PhotosPreview;
