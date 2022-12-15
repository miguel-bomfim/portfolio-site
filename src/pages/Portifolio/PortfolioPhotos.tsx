import { useState } from "react";
import { useLocation } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useMobile from "../../hooks/useMobile";
import useDelay from "../../hooks/useDelay";

import "./Portfolio.css";
import DialogSlider from "../../components/DialogSlider";
import { useEssay } from "../../services";
import Loading from "../../components/Loading";
interface EssayProps {
  url: string;
  id: string;
  width: number;
  height: number;
}

const PortfolioPhotos = () => {
  const { pathname } = useLocation();
  const slug = pathname.substring(11);
  const { data: essay, isLoading: loadingEssay } = useEssay(slug);
  const [showSlider, setShowSlider] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const delayToRender = useDelay("porfolioPage");

  const isMobile = useMobile();

  return (
    <div>
      {delayToRender ? (
        <Loading />
      ) : (
        <div className="containerPhotos">
          <ImageList
            sx={{
              "@media screen and (min-width: 600px)": {
                gap: "0 !important",
              },
            }}
            cols={1}
          >
            {!loadingEssay &&
              essay?.map((item: EssayProps, idx: number) => {
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
                        srcSet={item.url}
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
      )}
      {showSlider && (
        <DialogSlider
          openSlider={showSlider}
          setOpenSlider={setShowSlider}
          currentSlide={currentSlide}
          images={essay}
        />
      )}
    </div>
  );
};

export default PortfolioPhotos;
