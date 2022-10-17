import React from "react";
import { useLocation } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useMobile from "../../hooks/useMobile";
interface LocationProps {
  state: [
    {
      id: string;
      url: string;
      height: number;
      width: number;
    }
  ];
}

const PortfolioPhotos: React.FC = () => {
  const { state } = useLocation() as LocationProps;

  const isMobile = useMobile();

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "60px",
        marginBottom: "50px",
      }}
    >
      <ImageList cols={1}>
        {state.map((item) => {
          if (item.height > item.width) {
            item.height = 1117;
            item.width = 740;
          } else {
            item.height = 493;
            item.width = 740;
          }

          return (
            <ImageListItem sx={{ overflowY: "hidden" }} key={item.id}>
              <LazyLoadImage
                src={item.url}
                alt=""
                height={isMobile ? "100%" : item.height}
                width={isMobile ? "100%" : item.width}
                effect="blur"
                placeholderSrc={item.url}
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </main>
  );
};

export default PortfolioPhotos;
