import React from "react";
import { useLocation } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

interface LocationProps {
  state: [
    {
      id: string;
      url: string;
    }
  ];
}

const PortfolioPhotos: React.FC = () => {
  const { state } = useLocation() as LocationProps;

  console.log("loucation", state);

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "60px",
        marginBottom: "50px",
      }}
    >
      <ImageList sx={{ maxWidth: 550 }} cols={1}>
        {state.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt=""
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </main>
  );
};

export default PortfolioPhotos;
