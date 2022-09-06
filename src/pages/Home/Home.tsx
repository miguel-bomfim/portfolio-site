import React, { FC } from "react";

interface HomeProps {
  name: string | undefined;
  homeImage: string | undefined;
}

const Home: FC<HomeProps> = ({ name, homeImage }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        marginTop: "60px",
        height: "700px",
      }}
    >
      {/* <span
        style={{
          position: "absolute",
          textTransform: "uppercase",
          fontWeight: "bold",
          fontSize: "150px",
          bottom: "45%",
          color: "#ffcf60",
        }}
      >
        {name}
      </span> */}
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={homeImage}
        alt=""
      />
    </div>
  );
};

export default Home;
