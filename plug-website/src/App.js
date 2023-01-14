import "./App.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BurgerMenu from "./components/burger";
import { Routes, Route, Outlet } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import SongsVote from "./songs-form/songs-vote";
import SongsList from "./songs-form/songs-list";

import Auth from "./subpages/Auth";
import AccountCreation from "./subpages/AccountCreation";

import AboutPage from "./subpages/About";
import ArticlesPage from "./subpages/articles";
import ShopPage from "./subpages/shop/Shop";

import HonestlyNevermindArticle from "./articles/honestlyNevermindArticle";
import EyewearArticle from "./articles/eyewearArticle";
import NaduhArticle from "./articles/naduhArticle";
import KardinalArticle from "./articles/KardinalArticle";
import VancouverVintageArticle from "./articles/VancouverVintageArticle";
import BlockchainBottleArticle from "./articles/BlockchainBottleArticle";
import VFWTrendsArticle from "./articles/VFWTrendsArticle";
import WeeklyBreakdownDecember4Article from "./articles/WeeklyBreakdownDecember4Article";
import ChalanseArticle from "./articles/ChalanseArticle";

import "slick-carousel/slick/slick-theme.css";
import AccountCreateSuccess from "./subpages/AccountCreateSuccess";
import DashboardHome from "./dashboard/DashboardHome";
import DashboardProfile from "./dashboard/DashboardProfile";
import { ChakraProvider } from "@chakra-ui/react";
import DashboardSettings from "./dashboard/DashboardSettings";
import DashboardCalendar from "./dashboard/DashboardCalendar";
import DashboardTeams from "./dashboard/DashboardTeams";

import LaurenArticles from "./subpages/author-articles/LaurenArticles";
import ZoieArticles from "./subpages/author-articles/ZoieArticles";
import OrderSuccess from "./subpages/shop/OrderSuccess";
import SeasonalStudentBudgetArticle from "./articles/SeasonalStudentBudgetArticle";
import WeeklyBreakdownDecember12Article from "./articles/WeeklyBreakdownDecember12Article";
import WeeklyBreakdownDecember19Article from "./articles/WeeklyBreakdownDecember19Article";
import WeeklyBreakdownDecember26Article from "./articles/WeeklyBreakdownDecember26Article";
import SZASOSArticle from "./articles/SZASOSArticle";
import Closet2022Article from "./articles/Closet2022Article";
import WeeklyBreakdownJanuary2Article from "./articles/WeeklyBreakdownJanuary2Article";
import WeeklyBreakdownJanuary9Article from "./articles/WeeklyBreakdownJanuary9Article";
import BestDrinkArticle from "./articles/BestDrink";

const url =
  "https://plugvancouver.us8.list-manage.com/subscribe/post?u=ae713f23e836b02604e8d5a91&amp;id=9b9c53bead&amp;f_id=007c75e0f0";
const SimpleForm = () => <MailchimpSubscribe url={url} />;

function Logo() {
  return (
    <a href="/">
      <img
        id="main-logo"
        src={require("./images/logos/PlugWhite.png")}
        alt="Plug Logo"
      />
    </a>
  );
}

function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`sticky z-[1000] ${
        scrollDirection === "down" ? "-top-28" : "top-0"
      } h-28 transition-all duration-500 bg-black flex justify-between align-center z-[1000]" `}
    >
      <div>
        <Logo />
      </div>

      <div>
        <div className="flex justify-between">
          <div className="flex mt-5">
            <a
              href="https://www.instagram.com/plugvancouver/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[40px] h-auto my-3 mr-1 md:w-[56px]"
                src={require("./images/logos/social/instagram.png")}
                alt="Instagram logo"
              />
            </a>

            <a
              className=""
              href="https://www.tiktok.com/@plugvancouver"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[40px] h-auto my-3 mr-1 md:w-[56px]"
                src={require("./images/logos/social/tiktok.png")}
                alt="Tiktok logo"
              />
            </a>

            <a
              className=""
              href="https://www.youtube.com/channel/UCISFbPdJgz7JriR6io6uLBQ"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-[40px] w-auto my-3 mr-1 md:h-[56px]"
                src={require("./images/logos/social/youtube.png")}
                alt="YouTube logo"
              />
            </a>

            <div className="dropdown dropdown-end mr-4 align-middle items-center pt-[7px]	md:w-24">
              <label
                tabIndex={0}
                className="btn-sm md:btn-md md:w-[48px] btn btn-square p-[3px] md:mt-[9px] bg-white m-1 text-black"
              >
                <div className="burger md:px-[12px]"></div>
                <div className="burger md:px-[12px]"></div>
                <div className="burger md:px-[12px]"></div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
              >
                <li className="">
                  <a href="/">
                    <h1>HOME</h1>
                  </a>
                </li>
                <li>
                  <a href="/articles">
                    <h1>READ</h1>
                  </a>
                </li>
                <li>
                  <a href="/about">
                    <h1>ABOUT</h1>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

function Home() {
  return (
    /*
    <div id='home' className='text-white text-center text-5xl mb-8'>
      <ImageSlideshow />
    </div>*/

    null
  );
}

function Articles() {
  return (
    <div id="latest-articles mx-2">
      <div className="border-solid border-b-2 mx-5">
        <a href="/articles/group4">
          <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
            <div className="width-[100px] resize-none align-middle">
              <h3 className="article-category resize-none align-middle italic leading-4">
                CULTURE
              </h3>
              <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] uppercase">
                Raising the Bar: Group 4 Mixes Up the Competition as Vancouver's
                Top Bartenders
              </h2>
              <h2 className="article-info italic resize-none align-middle text-xs font-[600]">
                BENNY CHINVANICH | 13.01.2023
              </h2>
            </div>

            <div className="ml-2">
              <img
                className="thumbnail"
                src={require("./articles/article_media/blockchain-bottle/hanadaija.jpg")}
                alt="glasses"
              />
            </div>
          </div>
        </a>
      </div>

      <div className="border-solid border-b-2 mx-5">
        <a href="/articles/weekly-breakdown-january-9">
          <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
            <div className="width-[100px] resize-none align-middle">
              <h3 className="article-category resize-none align-middle italic leading-4">
                EVENTS
              </h3>
              <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                THE WEEKLY BREAKDOWN: JANUARY 9TH - JANUARY 15TH
              </h2>
              <h2 className="article-info italic resize-none align-middle text-xs font-[600]">
                LAUREN BENSON | 09.01.2023
              </h2>
            </div>

            <div className="ml-2">
              <img
                className="thumbnail"
                src={require("./articles/article_media/wb-6/wb6-banner.jpeg")}
                alt="glasses"
              />
            </div>
          </div>
        </a>
      </div>

      <div className="border-solid border-b-2 mx-5">
        <a href="/articles/weekly-breakdown-january-2">
          <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
            <div className="width-[100px] resize-none align-middle">
              <h3 className="article-category resize-none align-middle italic leading-4">
                EVENTS
              </h3>
              <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                THE WEEKLY BREAKDOWN: JANUARY 2ND - JANUARY 8TH
              </h2>
              <h2 className="article-info italic resize-none align-middle text-xs font-[600]">
                LAUREN BENSON | 02.01.2023
              </h2>
            </div>

            <div className="ml-2">
              <img
                className="thumbnail"
                src={require("./articles/article_media/wb-5/wb5-banner.jpg")}
                alt="glasses"
              />
            </div>
          </div>
        </a>
      </div>

      <div className="border-solid border-b-2 mx-5">
        <a href="/articles/2022-from-your-closet">
          <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
            <div className="width-[100px] resize-none align-middle">
              <h3 className="article-category resize-none align-middle italic leading-4">
                FASHION
              </h3>
              <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] uppercase">
                2022 From Your Closet
              </h2>
              <h2 className="article-info italic resize-none align-middle text-xs font-[600]">
                LAUREN BENSON | 31.12.2022
              </h2>
            </div>

            <div className="ml-2">
              <img
                className="thumbnail"
                src={require("./articles/article_media/closet-2022/closet-banner.jpg")}
                alt="glasses"
              />
            </div>
          </div>
        </a>
      </div>

      <div className="border-solid border-b-2 mx-5">
        <a href="/articles/sza-sos">
          <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
            <div className="width-[100px] resize-none align-middle">
              <h3 className="article-category resize-none align-middle italic leading-4">
                MUSIC
              </h3>
              <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px] uppercase">
                Why I’m in a Committed Relationship with SZA’s New Album “SOS”
              </h2>
              <h2 className="article-info italic resize-none align-middle text-xs font-[600]">
                LAUREN BENSON | 28.12.2022
              </h2>
            </div>

            <div className="ml-2">
              <img
                className="thumbnail"
                src={require("./articles/article_media/sza-sos/sza-banner.jpg")}
                alt="glasses"
              />
            </div>
          </div>
        </a>
      </div>

      <div className="border-solid border-b-2 mx-5">
        <a href="/articles/weekly-breakdown-december-26">
          <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
            <div className="width-[100px] resize-none align-middle">
              <h3 className="article-category resize-none align-middle italic leading-4">
                EVENTS
              </h3>
              <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                THE WEEKLY BREAKDOWN: DECEMBER 26TH - JANUARY 1ST
              </h2>
              <h2 className="article-info italic resize-none align-middle text-xs font-[600]">
                LAUREN BENSON | 26.12.2022
              </h2>
            </div>

            <div className="ml-2">
              <img
                className="thumbnail"
                src={require("./articles/article_media/wb-4/wb4-banner.jpg")}
                alt="glasses"
              />
            </div>
          </div>
        </a>
      </div>

      <div className="w-[130px] h-6 ml-6 mr-auto text-left mt-6 mb-8">
        <a className="read-more" href="/articles">
          <h2 className="text-white">READ MORE</h2>
        </a>
      </div>
    </div>
  );
}

function Culture() {
  return (
    <div id="culture" className="text-white text-center text-5xl">
      <h1 className="mb-4">STORY</h1>

      <div className="wrapper">
        <div id="one">
          <p className="text-2xl lg:pt-8">
            The Plug Vancouver was dreamed up in a small coffee shop in
            Kitsilano in 2019, with a goal of providing UBC students with the
            greatest events and most exclusive opportunities we could create.
            From humble beginnings of $50 pizza giveaways and our original
            Weekly Breakdowns, we've grown to reach new levels- while keeping
            the elements UBC students have loved most.
          </p>
          <br />
          <p className="text-2xl">
            So where are we now? Over the years we've expanded our craft to
            reach all young people in Vancouver who are interested in urban
            media, culture, and events. We throw the parties you'll keep coming
            back to, collaborate with the most exciting groups, and create the
            content you won't want to miss.
          </p>
        </div>
        <div id="two">
          <img
            className="px-4 mb-8"
            src={require("./images/ldoc-banner-reduced.jpg")}
            alt="team"
          ></img>
        </div>
      </div>
      <AutoplayCarousel />
    </div>
  );
}

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

  return (
    <div
      style={{
        background: "#efefef",
        borderRadius: 2,
        padding: 10,
        display: "inline-block",
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={(node) => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={(node) => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
        Submit
      </button>
    </div>
  );
};

function SignUpForm() {
  return (
    <div>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
}
function WeeklyBreakdownStrip() {
  return (
    <div className="wb-strip mt-10 mb-6 h-[200px] sm:h-[350px] lg:h-[500px] w-full">
      <img
        className="wb-strip-image"
        src={require("./images/wb-strip.png")}
        alt="crowd"
      />

      <h2 className="wb-strip-text top-7 text-2xl font-bold lg:mt-24">
        HOME OF THE
      </h2>
      <h1 className="wb-strip-text top-14 text-3xl font-bold lg:mt-24">
        WEEKLY BREAKDOWN
      </h1>

      <div className="absolute flex justify-around top-[120px] lg:mt-24">
        <a
          href="https://www.instagram.com/p/Cmp9PaWrQw4/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="wb-button mx-2">LATEST EDITION</button>
        </a>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfaVbHeLjA0HQYeYVYaTjYBZYYN0fxR5MO6-a0cIq5xT7Teaw/viewform"
          target="_blank"
          rel="noreferrer"
        >
          <button className="wb-button mx-2">SUBMIT YOUR EVENT</button>
        </a>
      </div>
    </div>
  );
}

var getConfigurableProps = () => ({
  centerMode: false,
  showThumbs: false,
  showStatus: false,
  showArrows: true,
  infiniteLoop: true,
  interval: 2000,
  stopOnHover: false,
  swipeable: true,
});

function BestMoments() {
  return (
    <div className="mb-0">
      <div className="flex justify-between align-middle">
        <h1 className="text-xl font-bold ml-3 md:text-3xl md:my-3 ">
          YOUR BEST MOMENTS
        </h1>
        <a
          href="https://www.facebook.com/theplugvancouver/photos/?ref=page_internal&tab=album"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-black text-white rounded-[20px] px-3 py-1 mr-3">
            VIEW ALBUMS
          </button>
        </a>
      </div>

      <Carousel
        {...getConfigurableProps()}
        className="mobile-carousel mt-4 mb-8"
        autoPlay
        centerSlidePercentage={60}
      >
        <div>
          <img src={require("./images/moments/hello1.jpg")} alt="hello1" />
        </div>
        <div>
          <img src={require("./images/moments/hello2.jpg")} alt="hello2" />
        </div>
        <div>
          <img src={require("./images/moments/hello3.jpg")} alt="hello3" />
        </div>
        <div>
          <img src={require("./images/moments/hello4.jpg")} alt="hello4" />
        </div>
        <div>
          <img src={require("./images/moments/hello5.jpg")} alt="hello5" />
        </div>
      </Carousel>

      <Carousel
        {...getConfigurableProps()}
        className="desktop-carousel mt-4 mb-8"
        centerMode
        autoPlay
        centerSlidePercentage={60}
      >
        <div>
          <img src={require("./images/moments/hello1.jpg")} alt="hello1" />
        </div>
        <div>
          <img src={require("./images/moments/hello2.jpg")} alt="hello2" />
        </div>
        <div>
          <img src={require("./images/moments/hello3.jpg")} alt="hello3" />
        </div>
        <div>
          <img src={require("./images/moments/hello4.jpg")} alt="hello4" />
        </div>
        <div>
          <img src={require("./images/moments/hello5.jpg")} alt="hello5" />
        </div>
      </Carousel>
    </div>
  );
}

function FeaturedVideos() {
  return (
    <div className="mb-0">
      <div className="flex justify-between align-middle">
        <h1 className="text-xl font-bold ml-3 md:text-3xl md:my-3">
          FEATURED VIDEOS
        </h1>
      </div>

      <Carousel
        {...getConfigurableProps()}
        className="mobile-carousel mt-4 mb-8"
        autoPlay
        centerSlidePercentage={60}
        infiniteLoop={true}
      >
        <a
          href="https://www.instagram.com/reel/CkuFW3tOsmy/?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img
              src={require("./images/video-thumbnails/compressed/4-c.jpg")}
              alt="bundafest-vid"
            />
          </div>
        </a>

        <a
          href="https://www.instagram.com/reel/ClRqjsHDYZq/?igshid=YmMyMTA2M2Y=
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img
              src={require("./images/video-thumbnails/compressed/1-c.jpg")}
              alt="rating-3"
            />
          </div>
        </a>
        <a
          href="https://youtu.be/3e1FfEKiniQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img
              src={require("./images/video-thumbnails/compressed/5-c.jpg")}
              alt="ldoc-vid"
            />
          </div>
        </a>
        <a
          href="https://www.instagram.com/reel/CjGgDh_Olfb/?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img
              src={require("./images/video-thumbnails/compressed/3-c.jpg")}
              alt="rating-2"
            />
          </div>
        </a>
        <a
          href="https://www.instagram.com/reel/CiyGonzNGW8/?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img
              src={require("./images/video-thumbnails/compressed/2-c.jpg")}
              alt="rating-1"
            />
          </div>
        </a>
      </Carousel>

      <Carousel
        {...getConfigurableProps()}
        className="desktop-carousel mt-4 mb-8"
        centerMode
        autoPlay
        centerSlidePercentage={60}
        infiniteLoop={true}
      >
        <a
          href="https://www.instagram.com/reel/CkuFW3tOsmy/?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img
              src={require("./images/video-thumbnails/compressed/4-c.jpg")}
              alt="bundafest-vid"
            />
          </div>
        </a>

        <a
          href="https://www.instagram.com/reel/ClRqjsHDYZq/?igshid=YmMyMTA2M2Y=
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img
              src={require("./images/video-thumbnails/compressed/1-c.jpg")}
              alt="rating-3"
            />
          </div>
        </a>
        <a
          href="https://youtu.be/3e1FfEKiniQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img
              src={require("./images/video-thumbnails/compressed/5-c.jpg")}
              alt="ldoc-vid"
            />
          </div>
        </a>
        <a
          href="https://www.instagram.com/reel/CjGgDh_Olfb/?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img
              src={require("./images/video-thumbnails/compressed/3-c.jpg")}
              alt="rating-2"
            />
          </div>
        </a>
        <a
          href="https://www.instagram.com/reel/CiyGonzNGW8/?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img
              src={require("./images/video-thumbnails/compressed/2-c.jpg")}
              alt="rating-1"
            />
          </div>
        </a>
      </Carousel>
    </div>
  );
}

function Events() {
  var settings = {
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="events" className="text-white text-center h-[300px] text-5xl mb-8">
      <h1 className="my-8 text-white text-center text-5xl italic font-bold">
        EVENTS
      </h1>

      <div>
        <Slider {...settings}>
          <div className="event-card">
            <div className="event-card-image-div">
              <img
                className="event-card-image"
                src={require("./images/events/holdthatheat.jpg")}
                alt="hold that heat event card"
              />
            </div>

            <h3 className="event-card-description">JUNE 2</h3>
          </div>

          <div className="event-card">
            <div className="event-card-image-div">
              <img
                className="event-card-image"
                src={require("./images/events/gymwear.jpg")}
                alt="gymwear event card"
              />
            </div>

            <h3 className="event-card-description">JUNE 24</h3>
          </div>

          <div className="event-card">
            <div className="event-card-image-div">
              <img
                className="event-card-image"
                src={require("./images/events/stampede.jpg")}
                alt="stampede event card"
              />
            </div>

            <h3 className="event-card-description">JULY 15</h3>
          </div>

          <div className="event-card">
            <div className="event-card-image-div">
              <img
                className="event-card-image"
                src={require("./images/events/poolside.jpg")}
                alt="poolside event card"
              />
            </div>

            <h3 className="event-card-description">JULY 29</h3>
          </div>

          <div className="event-card">
            <div className="event-card-image-div">
              <img
                className="event-card-image"
                src={require("./images/events/bundafest.jpg")}
                alt="bundafest event card"
              />
            </div>

            <h3 className="event-card-description">OCTOBER 15</h3>
          </div>

          <div className="event-card">
            <div className="event-card-image-div">
              <img
                className="event-card-image"
                src={require("./images/events/caughtin4k.jpg")}
                alt="caughtin4k event card"
              />
            </div>

            <h3 className="event-card-description">NOVEMBER 10</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

function Media() {
  return (
    <div id="media" className="text-white text-center h-[300px] text-5xl">
      <h1 className="my-8 text-white text-center text-5xl italic font-bold">
        WATCH
      </h1>
    </div>
  );
}

function Contact() {
  return (
    <div
      id="contact"
      className="text-white text-center text-5xl bg-neutral-900"
    >
      <div className="contact-wrapper">
        <div
          id="form-left"
          className="flex lg:h-[350px] justify-center items-center"
        >
          <div className="text-center">
            <h2>LET'S CONNECT</h2>
            <br />
            <h3 className="text-3xl ">ENGAGE. PARTNER. EXPERIENCE.</h3>
          </div>
        </div>
        <div id="form-right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

const FORM_ENDPOINT = ""; // TODO - fill on the later step

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-4 text-lg lg:text-xl placeholder-gray-400 text-white relative bg-black rounded border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-4 text-lg lg:text-xl placeholder-gray-400 text-white relative bg-black rounded border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-4 text-lg lg:text-xl placeholder-gray-400 text-white relative bg-black rounded border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="pt-0">
        <button
          className="bg-[#e6007e] text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
}

function ImageSlideshow() {
  return (
    // <div className="">
    //   <Carousel
    //     autoPlay
    //     interval="4000"
    //     transitionTime="1000"
    //     infiniteLoop
    //     stopOnHover={false}
    //     showStatus={false}
    //     showThumbs={false}
    //   >
    //     <div>
    //       <img src={require("./images/ldoc-banner.jpg")} alt="" />
    //     </div>
    //     <div>
    //       <img src={require("./images/ldoc-banner.jpg")} alt="" />
    //     </div>
    //     <div>
    //       <img src={require("./images/ldoc-banner.jpg")} alt="" />
    //     </div>
    //     <div>
    //       <img src={require("./images/ldoc-banner.jpg")} alt="" />
    //     </div>
    //   </Carousel>
    // </div>
    <div>
      <a
        href="https://www.youtube.com/watch?v=h3Zu64qPWBI"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="mobile-banner"
          src={require("./images/asian-struggles-banner.jpg")}
          alt=""
        />
        <img
          className="desktop-banner"
          src={require("./images/asian-struggles-banner.jpg")}
          alt=""
        />
      </a>

      {/* <div className="absolute flex justify-around top-[27vw] right-[9vw] md:right-[15vw] mt-[102px] md:mt-24">
        <a href="https://www.instagram.com/p/Clhf6bPPHm2/" target="_blank">
          <button className="top-banner-button mx-2 bg-white md:px-[12px] md:py-[3px] lg:px-[24px] lg:py-[6px] px-[5px] py-[3px] text-[8px] md:text-sm">
            RSVP NOW
          </button>
        </a>
      </div> */}
    </div>
  );
}

function AutoplayCarousel() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="mb-8">
      <h2 className="text-gray-400 italic text-3xl mb-4">
        Brands we've worked with
      </h2>
      <Slider {...settings} className="flex align-middle items-stretch	">
        <div className="flex justify-center w-[65px]">
          <img
            className=" w-[65px]"
            src={require("./images/logos/brands/redbull-logo.png")}
            alt="red bull logo"
          />
        </div>
        <div className="flex justify-center">
          <img
            className=" w-[110px]"
            src={require("./images/logos/brands/bumble-logo.png")}
            alt="bumble logo"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-[65px]"
            src={require("./images/logos/brands/canucks-logo.png")}
            alt="canucks logo"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-[65px]"
            src={require("./images/logos/brands/budlight-logo.png")}
            alt="bud light logo"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-[65px]"
            src={require("./images/logos/brands/goldsgym-logo.png")}
            alt="golds gym logo"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-[65px]"
            src={require("./images/logos/brands/whitecaps-logo.png")}
            alt="whitecaps logo"
          />
        </div>
      </Slider>
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[180px] flex align-middle flex-col items-center bg-black">
      <div className="w-full flex justify-between ">
        <div className="ml-2 mt-4 items-center pb-1">
          <a href="/">
            <img
              className="w-[150px]"
              src={require("./images/logos/PlugWhite.png")}
              alt="Plug Logo"
            />
          </a>
        </div>
        <div className="ml-[20px] flex-col align-middle items-center">
          <div className="flex h-[30px] justify-left items-center mt-8 ">
            <a
              href="https://www.instagram.com/plugvancouver/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[30px] h-auto mr-1 lg:w-[50px]"
                src={require("./images/logos/social/instagram.png")}
                alt="Instagram logo"
              />
            </a>
            <a
              className=""
              href="https://www.tiktok.com/@plugvancouver"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[30px] h-auto mr-1 lg:w-[50px]"
                src={require("./images/logos/social/tiktok.png")}
                alt="Tiktok logo"
              />
            </a>
            <a
              className=""
              href="https://www.youtube.com/channel/UCISFbPdJgz7JriR6io6uLBQ"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[30px] h-auto mr-1 lg:w-[50px]"
                src={require("./images/logos/social/youtube.png")}
                alt="YouTube logo"
              />
            </a>
            <a
              className=""
              href="https://www.facebook.com/theplugvancouver/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[30px] h-auto mr-1 lg:w-[50px]"
                src={require("./images/logos/social/facebook.png")}
                alt="Facebook logo"
              />
            </a>
            <a
              className=""
              href="https://www.linkedin.com/company/plugvancouver/mycompany/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[30px] h-auto mr-1 lg:w-[50px]"
                src={require("./images/logos/social/linkedin.png")}
                alt="LinkedIn logo"
              />
            </a>

            <a
              className=""
              href="mailto:info@theplugvancouver.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[30px] h-auto mr-1 lg:w-[50px]"
                src={require("./images/logos/social/email.png")}
                alt="Email logo"
              />
            </a>
          </div>

          <div className="flex justify-center mt-1 lg:mt-4">
            <h1 className="text-white">
              <a className="text-white font-bold" href="/">
                HOME{" "}
              </a>
              |
              <a className="text-white font-bold" href="/articles">
                {" "}
                READ{" "}
              </a>
              |
              <a className="text-white font-bold" href="/about">
                {" "}
                ABOUT
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex align-middle flex-col items-center text-[17px] md:text-4xl lg:flex-row lg:justify-center">
        {/* <h1 className="text-white">THE HOME OF</h1> */}

        <h1 className="">
          <span className="text-white">THE HOME OF</span>
          <span className="text-[#cb6ce6]">&nbsp;VANCOUVER'S</span>

          <span className="text-white">&nbsp;URBAN CULTURE</span>
        </h1>
      </div>

      <h2 className="mt-2 text-sm font-normal text-gray-300 italic pb-8">
        © THE PLUG MARKETING, MEDIA & EVENTS INC. 2022
      </h2>
    </div>
  );
}

function ScrollIndicator() {
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  return (
    <div className="progress-container">
      <div className="progress-bar" id="myBar"></div>
    </div>
  );
}

const HeaderFooterLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
    <ScrollIndicator />
  </>
);

function App() {
  fetch("https://plug-vancouver.herokuapp.com/")
    .then((res) => res.json())
    .then((data) => console.log(data));
  React.useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);

  return (
    <ChakraProvider>
      <div>
        {/* <div>
        <div className='flex justify-center flex-wrap'>
          <a href='#home' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>HOME</a>
          <a href='#culture' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>STORY</a>
          <a href='#events' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>EVENTS</a>
          <a href='#media' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>MEDIA</a>
          <a href='#contact' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>CONTACT</a>
        </div>
      </div> */}

        <Routes>
          <Route element={<HeaderFooterLayout />}>
            <Route
              path="/"
              element={
                <>
                  <ImageSlideshow />
                  <Articles />
                  <WeeklyBreakdownStrip />
                  <BestMoments />
                  <FeaturedVideos />
                </>
              }
            />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route
              path="/articles/lauren-benson"
              element={<LaurenArticles />}
            />
            <Route path="/articles/zoie-mcclymont" element={<ZoieArticles />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/songs-vote" element={<SongsVote />} />
            <Route path="/songs-list" element={<SongsList />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/order/success" element={<OrderSuccess />} />
            <Route
              path="/articles/community-coffee-and-classy-eyewear"
              element={<EyewearArticle />}
            />
            <Route path="/articles/meet-naduh" element={<NaduhArticle />} />
            <Route
              path="/articles/honestly-nevermind"
              element={<HonestlyNevermindArticle />}
            />
            <Route path="/articles/sza-sos" element={<SZASOSArticle />} />
            <Route path="/articles/kardinal" element={<KardinalArticle />} />
            <Route
              path="/articles/2022-from-your-closet"
              element={<Closet2022Article />}
            />
            <Route
              path="/articles/vancouver-vintage"
              element={<VancouverVintageArticle />}
            />
            <Route
              path="/articles/student-seasonal"
              element={<SeasonalStudentBudgetArticle />}
            />
            <Route path="/articles/group4" element={<BestDrinkArticle />} />
            <Route
              path="/articles/blockchain-bottle"
              element={<BlockchainBottleArticle />}
            />
            <Route
              path="/articles/weekly-breakdown-december-4"
              element={<WeeklyBreakdownDecember4Article />}
            />
            <Route
              path="/articles/weekly-breakdown-december-12"
              element={<WeeklyBreakdownDecember12Article />}
            />
            <Route
              path="/articles/weekly-breakdown-december-19"
              element={<WeeklyBreakdownDecember19Article />}
            />
            \
            <Route
              path="/articles/weekly-breakdown-december-26"
              element={<WeeklyBreakdownDecember26Article />}
            />
            <Route
              path="/articles/weekly-breakdown-january-2"
              element={<WeeklyBreakdownJanuary2Article />}
            />
            <Route
              path="/articles/weekly-breakdown-january-9"
              element={<WeeklyBreakdownJanuary9Article />}
            />
            <Route path="/articles/chalanse" element={<ChalanseArticle />} />
            <Route
              path="/articles/vancouver-fashion-week-trends"
              element={<VFWTrendsArticle />}
            />
          </Route>

          <Route path="/login" element={<Auth />} />

          <Route path="/dashboard/home" element={<DashboardHome />} />
          <Route path="/dashboard/calendar" element={<DashboardCalendar />} />
          <Route path="/dashboard/teams" element={<DashboardTeams />} />
          <Route path="/dashboard/profile" element={<DashboardProfile />} />
          <Route path="/dashboard/settings" element={<DashboardSettings />} />

          <Route path="/signup" element={<AccountCreation />} />
          <Route path="/signup-success" element={<AccountCreateSuccess />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

function openNav() {
  console.log("hi");
  //document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  //document.getElementById("myNav").style.width = "0%";
}

export default App;
