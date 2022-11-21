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

function App() {
  const { data: homeData } = useHome();
  const { data: posts } = usePortfolio();
  const { data: aboutMe } = useAboutMe();

  const theme = createTheme({
    palette: {
      primary: {
        light: "#fff",
        main: "#fff",
        dark: "#fff",
        contrastText: "#fff",
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
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
          <Route
            path="/about"
            element={
              <About
                image={aboutMe?.photo}
                description={aboutMe?.summary}
                portfolioExamples={aboutMe?.portfolioExamples}
              />
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
