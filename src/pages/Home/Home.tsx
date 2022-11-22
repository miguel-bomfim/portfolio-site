import React, { FC } from "react";
import "./Home.css";

interface HomeProps {
  name: string | undefined;
  homeImage: string | undefined;
}

const Home: FC<HomeProps> = ({ name, homeImage }) => {
  return (
    <div className="homeContainer">
      <img className="homeImg" src={homeImage} alt="" />
    </div>
  );
};

export default Home;
