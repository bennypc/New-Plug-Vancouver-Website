import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material';
import { Typography } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React, { useState } from 'react';
import '../articles/articles.css';

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
        'Helvetica Neue',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

  const styles = {
    button: {
      backgroundColor: '#ab39cc',
      margin: 4,
      text: 10,
      padding: 5,
      '&:hover': {
        backgroundColor: '#cb6ce6',
        color: '#3c52b2',
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

      <div className="text-center flex justify-center mt-2 mb-8 articles-container ">
        <div className="text-left mx-2">
          <div
            className={`border-solid border-b-2 mx-5 ${
              showEvents ? undefined : 'hidden'
            }`}
          >
            <a href="/articles/weekly-breakdown-february-13">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    EVENTS
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] h-[60px]">
                    THE WEEKLY BREAKDOWN: FEBRUARY 13TH-FEBRUARY 19TH
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 13.02.2023
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require('../articles/article_media/wb-8/wb8-banner.jpg')}
                    alt="cabin"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showLifestyle ? undefined : 'hidden'
            }`}
          >
            <a href="/articles/vancouver-drag">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    LIFESTYLE
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] h-[60px]">
                    DRAG IN VANCOUVER, ACCORDING TO HAZEL-NUT
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 23.01.2023
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require('../articles/article_media/drag-vancouver/drag-cover.jpg')}
                    alt="cabin"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showEvents ? undefined : 'hidden'
            }`}
          >
            <a href="/articles/weekly-breakdown-january-16">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    EVENTS
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] h-[60px]">
                    THE WEEKLY BREAKDOWN: JANUARY 16TH-JANUARY 22ND
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 16.01.2023
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require('../articles/article_media/wb-7/wb7-banner.jpeg')}
                    alt="cabin"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showEvents ? undefined : 'hidden'
            }`}
          >
            <a href="/articles/weekly-breakdown-january-9">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    EVENTS
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] h-[60px]">
                    THE WEEKLY BREAKDOWN: JANUARY 9TH-JANUARY 15TH
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 09.01.2023
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require('../articles/article_media/wb-6/wb6-banner.jpeg')}
                    alt="cabin"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showEvents ? undefined : 'hidden'
            }`}
          >
            <a href="/articles/weekly-breakdown-january-2">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    EVENTS
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] h-[60px]">
                    THE WEEKLY BREAKDOWN: JANUARY 2ND-JANUARY 8TH
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 02.01.2023
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require('../articles/article_media/wb-5/wb5-banner.jpg')}
                    alt="cabin"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showFashion ? undefined : 'hidden'
            }`}
          >
            <a href="/articles/2022-from-your-closet">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    FASHION
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] h-[60px] uppercase">
                    2022 From Your Closet
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 31.12.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require('../articles/article_media/closet-2022/closet-banner.jpg')}
                    alt="cabin"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showMusic ? undefined : 'hidden'
            }`}
          >
            <a href="/articles/sza-sos">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    MUSIC
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] h-[60px] uppercase">
                    Why I’m in a Committed Relationship with SZA’s New Album
                    “SOS”
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 28.12.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require('../articles/article_media/sza-sos/sza-banner.jpg')}
                    alt="cabin"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showEvents ? undefined : 'hidden'
            }`}
          >
            <a href="/articles/weekly-breakdown-december-26">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    EVENTS
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] h-[60px]">
                    THE WEEKLY BREAKDOWN: DECEMBER 26TH-JANUARY 1ST
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 26.12.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require('../articles/article_media/wb-4/wb4-banner.jpg')}
                    alt="cabin"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showEvents ? undefined : 'hidden'
            }`}
          >
            <a href="/articles/weekly-breakdown-december-19">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    EVENTS
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] h-[60px]">
                    THE WEEKLY BREAKDOWN: DECEMBER 19TH-25TH
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 19.12.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require('../articles/article_media/wb-3/wb3-banner.png')}
                    alt="cabin"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showLifestyle ? undefined : 'hidden'
            }`}
          >
            <a href="/articles/student-seasonal">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    LIFESTYLE
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] h-[60px]">
                    HOW TO BE SEASONAL ON A STUDENT BUDGET
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 13.12.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require('../articles/article_media/student-seasonal/seasonal-banner.jpg')}
                    alt="cabin"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showEvents ? undefined : 'hidden'
            }`}
          >
            <a href="/articles/weekly-breakdown-december-12">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    EVENTS
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] h-[60px]">
                    THE WEEKLY BREAKDOWN: DECEMBER 12TH-18TH
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 12.12.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require('../articles/article_media/wb-2/wb2-banner.jpg')}
                    alt="glasses"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showEvents ? undefined : 'hidden'
            }`}
          >
            <a href="/articles/weekly-breakdown-december-4">
              <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
                <div className="width-[100px] resize-none align-middle">
                  <h3 className="article-category resize-none align-middle italic leading-4">
                    EVENTS
                  </h3>
                  <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] h-[60px]">
                    THE WEEKLY BREAKDOWN: DECEMBER 5TH-11TH
                  </h2>
                  <h2 className="italic resize-none align-middle text-xs font-[600]">
                    LAUREN BENSON | 05.12.2022
                  </h2>
                </div>

                <div className="ml-2">
                  <img
                    className="thumbnail"
                    src={require('../articles/article_media/wb-1/wb1-banner.jpg')}
                    alt="glasses"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showFashion ? undefined : 'hidden'
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
                    src={require('../articles/article_media/chalanse/chalanse.jpeg')}
                    alt="glasses"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showFashion ? undefined : 'hidden'
            }`}
          >
            <a href="/articles/vancouver-fashion-week-trends">
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
                    src={require('../articles/article_media/vfwtrends/vfwtrendsbanner.jpg')}
                    alt="glasses"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showLifestyle ? undefined : 'hidden'
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
                    src={require('../images/thumbnails/eyewear.png')}
                    alt="glasses"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showMusic ? undefined : 'hidden'
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
                    src={require('../images/thumbnails/naduh.jpg')}
                    alt="naduh"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showMusic ? undefined : 'hidden'
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
                    src={require('../articles/article_media/honestlynevermind.png')}
                    alt="naduh"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showMusic ? undefined : 'hidden'
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
                    src={require('../images/thumbnails/kardinal.jpg')}
                    alt="kardinal interview"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showFashion ? undefined : 'hidden'
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
                    src={require('../articles/article_media/vancouver-vintage/top-banner.webp')}
                    alt="vintage"
                  />
                </div>
              </div>
            </a>
          </div>

          <div
            className={`border-solid border-b-2 mx-5 ${
              showEvents ? undefined : 'hidden'
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
                    src={require('../articles/article_media/blockchain-bottle/koji-hand.webp')}
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
