import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material";
import { Typography } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React, { useState } from "react";
import "../../articles/articles.css";

const LaurenArticles = () => {
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
              src={require("../../articles/article_media/authors/laurenbenson.png")}
              alt="lauren"
            />
          </div>

          <div className="flex align-middle justify-center flex-col text-center">
            <h2 className="text-2xl md:text-4xl md:mb-1">
              <span>Lauren Benson</span>
            </h2>
            <h2 className="text-xl md:text-4xl">
              <span className="font-normal">Editorial Director</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="text-center flex justify-center articles-container">
        <div className="text-left">
          <div
            className={`border-solid border-b-2 mx-5 ${
              showLifestyle ? undefined : "hidden"
            }`}
          >
            <a href="/articles/community-coffee-and-classy-eyewear">
              <div className="flex mx-[2px] mt-[20px] md:mt-[10px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    LIFESTYLE
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] h-[60px]">
                    COMMUNITY, COFFEE, AND CLASSY EYEWEAR
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 19.11.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require("../../images/thumbnails/eyewear.png")}
                    alt="glasses"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showMusic ? undefined : "hidden"
            }`}
          >
            <a href="/articles/meet-naduh">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    MUSIC
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                    MEET NADUH, VANCOUVER'S NEWEST GIRL GROUP
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 13.11.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require("../../images/thumbnails/naduh.jpg")}
                    alt="naduh"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showMusic ? undefined : "hidden"
            }`}
          >
            <a href="/articles/honestly-nevermind">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    MUSIC
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                    HONESTLY, WHICH SONG IS THIS?
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 23.10.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require("../../articles/article_media/honestlynevermind.png")}
                    alt="naduh"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showEvents ? undefined : "hidden"
            }`}
          >
            <a href="/articles/community-coffee-and-classy-eyewear">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    EVENTS
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                    BEST MOMENTS AT VANCOUVER'S SAFE & SOUND FESTIVAL
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 14.10.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require("../../images/thumbnails/safeandsound.jpg")}
                    alt="naduh"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showLifestyle ? undefined : "hidden"
            }`}
          >
            <a href="/articles/community-coffee-and-classy-eyewear">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    LIFESTYLE
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                    TOP 10 NEW MICHELIN STAR RESTAURANTS IN VANCOUVER
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 07.10.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require("../../images/thumbnails/michelin.jpg")}
                    alt="naduh"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showLifestyle ? undefined : "hidden"
            }`}
          >
            <a href="/articles/community-coffee-and-classy-eyewear">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    LIFESTYLE
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                    YOUR NEW YEAR PLANS AND WHAT TO BRING
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 07.10.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require("../../images/thumbnails/2023.jpg")}
                    alt="naduh"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showFashion ? undefined : "hidden"
            }`}
          >
            <a href="/articles/community-coffee-and-classy-eyewear">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    FASHION
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                    VANCOUVER FASHION WEEK FOR THE FASHION WEAK
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 07.10.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require("../../images/thumbnails/vfw.jpg")}
                    alt="naduh"
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

export default LaurenArticles;
