import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import InteractiveCursor from "./components/InteractiveCursor";
import Menu from "./components/Menu";
import PortfolioPage from "./pages/Portifolio/PortfolioPage";
import PortfolioPhotos from "./pages/Portifolio/PortfolioPhotos";
import About from "./pages/About";
import InteractiveCursor from "./components/InteractiveCursor";
import Home from "./pages/Home";

import { useHome, usePortfolios } from "./services";
import useMobile from "./hooks/useMobile";

import "react-lazy-load-image-component/src/effects/blur.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const { data: homeData, isLoading: isLoadingHome } = useHome();
  const { data: posts } = usePortfolios();
  const isMobile = useMobile();

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <Home name={homeData?.name} homeImage={homeData?.homeImage.url} />
          }
        />
        <Route path="/portfolio" element={<PortfolioPage posts={posts} />} />
        <Route path="portfolio/:slug" element={<PortfolioPhotos />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* {!isMobile && <InteractiveCursor />} */}
    </BrowserRouter>
  );
}

export default App;
