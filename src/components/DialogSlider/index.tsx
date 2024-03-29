import {
  FC,
  createRef,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";
import Dialog from "@mui/material/Dialog";
import Slider from "react-slick";
import "./DialogSlider.css";
import classNames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface DialogSliderProps {
  openSlider: boolean;
  setOpenSlider: Dispatch<SetStateAction<boolean>>;
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
  const sliderRef = createRef() as unknown as MutableRefObject<Slider>;
  const settings = {
    dots: false,
    centerMode: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    arrows: true,
    focusOnSelect: true,
    onInit: () =>
      setTimeout(() => {
        sliderRef.current?.slickGoTo(currentSlide, true);
      }, 100),
  };

  return (
    <Dialog
      PaperProps={{
        sx: {
          bgcolor: "transparent",
          height: "auto",
          boxShadow: "none",
          position: "inherit",
        },
      }}
      sx={{ display: "block" }}
      fullScreen={true}
      open={openSlider}
      onClose={() => setOpenSlider(false)}
    >
      <IconButton
        className="closeButton"
        onClick={() => setOpenSlider(!openSlider)}
        component="label"
      >
        <CloseIcon color="primary" fontSize="small" />
      </IconButton>

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
