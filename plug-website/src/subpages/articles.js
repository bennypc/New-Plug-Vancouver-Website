import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material";
import { Typography } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React, { useState } from "react";
import "../articles/articles.css";

const ArticlesPage = () => {
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
      <div className="text-center">
        <h1 className="mt-4 mb-2 text-black text-center text-5xl italic font-bold">
          OUR STORIES
        </h1>

        <div className="whitespace-pre-wrap break-normal">
          <ThemeProvider theme={theme}>
            <a href="#all">
              <Button
                style={styles.button}
                variant="contained"
                onClick={onClickAll}
              >
                ALL
              </Button>
            </a>
            <a href="#music">
              <Button
                style={styles.button}
                variant="contained"
                onClick={onClickMusic}
              >
                MUSIC
              </Button>
            </a>
            <Button
              style={styles.button}
              variant="contained"
              onClick={onClickEvents}
            >
              EVENTS
            </Button>
            <Button
              style={styles.button}
              variant="contained"
              onClick={onClickFashion}
            >
              FASHION
            </Button>
            <Button
              style={styles.button}
              variant="contained"
              onClick={onClickLifestyle}
            >
              LIFESTYLE
            </Button>
          </ThemeProvider>

          {/* <span className="mx-2 category" onClick={onClickAll}>
            ALL
          </span>
          <span className="mx-2 category" onClick={onClickMusic}>
            MUSIC
          </span>
          <span className="mx-2 category" onClick={onClickEvents}>
            EVENTS
          </span>
          <span className="mx-2 category" onClick={onClickFashion}>
            FASHION
          </span>
          <span className="mx-2 category" onClick={onClickLifestyle}>
            LIFESTYLE
          </span> */}
        </div>
      </div>

      <div className="text-center flex justify-center mt-2 mb-8 articles-container">
        <div className="text-left">
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
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] h-[60px]">
                    THE FORECAST: THE TRENDS TO WATCH, ACCORDING TO VFW
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 03.12.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require("../articles/article_media/vfwtrends/vfwtrendsbanner.jpg")}
                    alt="glasses"
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
                    src={require("../images/thumbnails/eyewear.png")}
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
                    src={require("../images/thumbnails/naduh.jpg")}
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
                    src={require("../articles/article_media/honestlynevermind.png")}
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
            <a href="/articles/kardinal">
              <div className="flex mx-[2px] my-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    MUSIC
                  </h3>

                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                    CATCHING UP WITH KARDINAL
                  </h2>

                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 06.06.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require("../images/thumbnails/kardinal.jpg")}
                    alt="kardinal interview"
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
            <a href="/articles/vancouver-vintage">
              <div className="flex mx-[2px] my-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    FASHION
                  </h3>

                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                    VANCOUVER'S NEW VINTAGE SCENE
                  </h2>

                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 31.05.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require("../articles/article_media/vancouver-vintage/top-banner.webp")}
                    alt="vintage"
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
            <a href="/articles/blockchain-bottle">
              <div className="flex mx-[2px] my-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    EVENTS
                  </h3>

                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                    BLOCKCHAIN TO BOTTLE SERVICE
                  </h2>

                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 11.05.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require("../articles/article_media/blockchain-bottle/koji-hand.webp")}
                    alt="vintage"
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

export default ArticlesPage;
