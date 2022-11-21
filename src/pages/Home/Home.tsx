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
        height: "850px",
      }}
    >
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={homeImage}
        alt=""
      />
    </div>
  );
};

export default Home;
