import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material";
import { Typography } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React, { useState } from "react";
import "../../articles/articles.css";

const ZoieArticles = () => {
  //const [showAll, setShowAll] = React.useState(true);
  const [showMusic, setsShowMusic] = React.useState(true);
  const [showEvents, setShowEvents] = React.useState(true);
  const [showFashion, setShowFashion] = React.useState(true);
  const [showLifestyle, setShowLifestyle] = React.useState(true);

  const onClickAll = (e) => {
    e.preventDefault();
    setsShowMusic(true);
    setShowEvents(true);
    setShowFashion(true);
    setShowLifestyle(true);
    console.log(showMusic, showEvents, showFashion, showLifestyle);
  };

  const onClickMusic = (e) => {
    e.preventDefault();
    setsShowMusic(true);
    setShowEvents(false);
    setShowFashion(false);
    setShowLifestyle(false);
    console.log(showMusic, showEvents, showFashion, showLifestyle);
  };

  const onClickEvents = (e) => {
    e.preventDefault();
    setsShowMusic(false);
    setShowEvents(true);
    setShowFashion(false);
    setShowLifestyle(false);
    console.log(showMusic, showEvents, showFashion, showLifestyle);
  };

  const onClickFashion = (e) => {
    e.preventDefault();
    setsShowMusic(false);
    setShowEvents(false);
    setShowFashion(true);
    setShowLifestyle(false);
    console.log(showMusic, showEvents, showFashion, showLifestyle);
  };

  const onClickLifestyle = (e) => {
    e.preventDefault();
    setsShowMusic(false);
    setShowEvents(false);
    setShowFashion(false);
    setShowLifestyle(true);
    console.log(showMusic, showEvents, showFashion, showLifestyle);
  };

  const theme = createTheme({
    typography: {
      fontFamily: [
        "Helvetica Neue",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  const styles = {
    button: {
      backgroundColor: "#ab39cc",
      margin: 4,
      text: 10,
      padding: 5,
      "&:hover": {
        backgroundColor: "#cb6ce6",
        color: "#3c52b2",
      },
    },
  };

  return (
    <div className="mx-2">
      <div className="author-container flex justify-center mt-8">
        <div className="flex-col flex justify-center m-auto">
          <div className="flex justify-center mb-2 md:mb-4">
            <img
              className="author-page-image rounded-full flex  justify-center"
              src={require("../../images/team-members/zoie.jpg")}
              alt="lauren"
            />
          </div>

          <div className="flex align-middle justify-center flex-col text-center">
            <h2 className="text-2xl md:text-4xl md:mb-1">
              <span>Zoie McClymont</span>
            </h2>
            <h2 className="text-xl md:text-[32px] md:mt-2">
              <span className="font-normal">Editorial Director</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="text-center flex justify-center articles-container">
        <div className="text-left">
          <div
            className={`border-solid border-b-2 mx-5 ${
              showFashion ? undefined : "hidden"
            }`}
          >
            <a href="/articles/chalanse">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    FASHION
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] h-[60px]">
                    CHALANSE: FASHION THAT EMPOWERS - THE BRAND TO WATCH
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    ZOIE MCCLYMONT | 04.12.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require("../../articles/article_media/chalanse/chalanse.jpeg")}
                    alt="glasses"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoieArticles;
