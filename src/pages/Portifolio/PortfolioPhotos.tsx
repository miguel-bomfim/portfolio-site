import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useMobile from "../../hooks/useMobile";
import Dialog from "@mui/material/Dialog";
import "./Portfolio.css";

import Slider from "react-slick";
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
  const settings = {
    dots: false,
    centerMode: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
  };

  const isMobile = useMobile();
  const [showSlider, setShowSlider] = useState(false);

  return (
    <main>
      <div
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
                <div
                  className="image"
                  onClick={() => {
                    setShowSlider(true);
                  }}
                >
                  <LazyLoadImage
                    src={item.url}
                    alt=""
                    height={isMobile ? "100%" : item.height}
                    width={isMobile ? "100%" : item.width}
                    effect="blur"
                    placeholderSrc={item.url}
                  />
                </div>
              </ImageListItem>
            );
          })}
        </ImageList>
      </div>
      {showSlider && (
        <Dialog
          PaperProps={{
            sx: { bgcolor: "transparent", height: "auto", boxShadow: "none" },
          }}
          sx={{ display: "block" }}
          fullScreen={true}
          open={showSlider}
          onClose={() => setShowSlider(false)}
        >
          <Slider {...settings}>
            {state.map((item) => (
              <LazyLoadImage
                className="imageSlider"
                src={item.url}
                alt=""
                height="100%"
                width="100%"
                effect="blur"
                placeholderSrc={item.url}
              />
            ))}
          </Slider>
        </Dialog>
      )}
    </main>
  );
};

export default PortfolioPhotos;
