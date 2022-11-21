import React, { FC, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import Slider from "react-slick";
import "./DialogSlider.css";
import classNames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface DialogSliderProps {
  openSlider: boolean;
  setOpenSlider: React.Dispatch<React.SetStateAction<boolean>>;
  currentSlide: number;
  images: [
    {
      height: number;
      id: string;
      url: string;
      width: number;
    }
  ];
}

const DialogSlider: FC<DialogSliderProps> = ({
  openSlider,
  setOpenSlider,
  currentSlide,
  images,
}) => {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: false,
    centerMode: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    arrows: true,
    focusOnSelect: true,
    initialSlide: currentSlide,
    onInit: () => sliderRef.current?.slickGoTo(currentSlide),
  };

  return (
    <Dialog
      PaperProps={{
        sx: { bgcolor: "transparent", height: "auto", boxShadow: "none" },
      }}
      sx={{ display: "block" }}
      fullScreen={true}
      open={openSlider}
      onClose={() => setOpenSlider(false)}
    >
      <Slider {...settings} ref={sliderRef}>
        {images.map((item, idx) => {
          return (
            <LazyLoadImage
              className={classNames("lazyImageSlider", {
                horizontalImage: item.height < item.width,
                verticalImage: item.height > item.width,
              })}
              key={idx}
              src={item.url}
              alt=""
              height="100%"
              width="100%"
              effect="blur"
              placeholderSrc={item.url}
            />
          );
        })}
      </Slider>
    </Dialog>
  );
};

export default DialogSlider;
