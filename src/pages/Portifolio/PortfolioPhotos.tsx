import { useState } from "react";
import { useLocation } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useMobile from "../../hooks/useMobile";
import "./Portfolio.css";
import DialogSlider from "../../components/DialogSlider";

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

const PortfolioPhotos = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(3);

  const { state } = useLocation() as LocationProps;

  const isMobile = useMobile();

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
          {state.map((item, idx) => {
            if (item.height > item.width) {
              item.height = 1117;
              item.width = 740;
            } else {
              item.height = 493;
              item.width = 740;
            }

            return (
              <ImageListItem sx={{ overflowY: "hidden" }} key={idx}>
                <div
                  className="image"
                  onClick={() => {
                    setCurrentSlide(idx);
                    !isMobile && setShowSlider(!showSlider);
                  }}
                  key={idx}
                >
                  <LazyLoadImage
                    src={item.url}
                    key={idx}
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
        <DialogSlider
          openSlider={showSlider}
          setOpenSlider={setShowSlider}
          currentSlide={currentSlide}
          images={state}
        />
      )}
    </main>
  );
};

export default PortfolioPhotos;
