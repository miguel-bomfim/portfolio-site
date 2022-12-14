import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import PortfolioPage from "./pages/Portifolio/PortfolioPage";
import PortfolioPhotos from "./pages/Portifolio/PortfolioPhotos";
import About from "./pages/AboutPage";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useHome, usePortfolio, useAboutMe } from "./services";

import "react-lazy-load-image-component/src/effects/blur.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ScrollToTop from "./helpers/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  const { data: homeData } = useHome();
  const { data: portfolioData, isLoading: isLoadingPortfolio } = usePortfolio();

  const { data: aboutMe } = useAboutMe();

  const theme = createTheme({
    palette: {
      primary: {
        light: "#000",
        main: "#000",
        dark: "#000",
        contrastText: "#000",
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <Menu />
        <main style={{ margin: "3.65625em 0" }}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  introduction={homeData?.introduction.html}
                  developmentText={homeData?.developmentText}
                  homeImage={homeData?.homeImage.url}
                  images={homeData?.images}
                  conclusion={homeData?.conclusion}
                />
              }
            />
            <Route
              path="/portfolio"
              element={
                <PortfolioPage
                  portfolioData={portfolioData}
                  isLoading={isLoadingPortfolio}
                />
              }
            />
            <Route path="portfolio/:slug" element={<PortfolioPhotos />} />
            <Route
              path="/about"
              element={
                <About
                  image={aboutMe?.photo}
                  description={aboutMe?.summary.html}
                  imgText={aboutMe?.imgText}
                  portfolioExamples={aboutMe?.portfolioExamples}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
