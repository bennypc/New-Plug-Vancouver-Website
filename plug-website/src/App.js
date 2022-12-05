import "./App.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BurgerMenu from "./components/burger";
import { Routes, Route, Outlet } from "react-router-dom";
import "slick-carousel/slick/slick.css";

import SongsVote from "./songs-form/songs-vote";
import SongsList from "./songs-form/songs-list";

import Auth from "./subpages/Auth";
import AccountCreation from "./subpages/AccountCreation";

import ArticlesPage from "./subpages/articles";

import HonestlyNevermindArticle from "./articles/honestlyNevermindArticle";
import EyewearArticle from "./articles/eyewearArticle";
import NaduhArticle from "./articles/naduhArticle";

import "slick-carousel/slick/slick-theme.css";
import AccountCreateSuccess from "./subpages/AccountCreateSuccess";
import DashboardHome from "./dashboard/DashboardHome";
import DashboardProfile from "./dashboard/DashboardProfile";
import { ChakraProvider } from "@chakra-ui/react";
import DashboardSettings from "./dashboard/DashboardSettings";
import DashboardCalendar from "./dashboard/DashboardCalendar";
import DashboardTeams from "./dashboard/DashboardTeams";
import AboutPage from "./subpages/About";

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
            <a href="https://www.instagram.com/plugvancouver/" target="_blank">
              <img
                className="w-[40px] h-auto my-3 mr-1 lg:w-[56px]"
                src={require("./images/logos/social/instagram.png")}
                alt="Instagram logo"
              />
            </a>

            <a
              className=""
              href="https://www.tiktok.com/@plugvancouver"
              target="_blank"
            >
              <img
                className="w-[40px] h-auto my-3 mr-1 lg:w-[56px]"
                src={require("./images/logos/social/tiktok.png")}
                alt="Tiktok logo"
              />
            </a>

            <a
              className=""
              href="https://www.youtube.com/channel/UCISFbPdJgz7JriR6io6uLBQ"
              target="_blank"
            >
              <img
                className="h-[40px] w-auto my-3 mr-1 lg:h-[56px]"
                src={require("./images/logos/social/youtube.png")}
                alt="YouTube logo"
              />
            </a>

            <div className="dropdown dropdown-end mr-4 align-middle items-center pt-[7px]	md:w-24">
              <label
                tabIndex={0}
                className="btn-sm md:btn-md md:w-[48px] btn btn-square p-[3px] lg:mt-[9px] bg-white m-1 text-black"
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
    <div id="latest-articles">
      <div className="border-solid border-b-2 mx-5">
        <a href="/articles/community-coffee-and-classy-eyewear">
          <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
            <div className="width-[100px] resize-none align-middle">
              <h3 className="article-category resize-none align-middle italic leading-4">
                LIFESTYLE
              </h3>
              <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                COMMUNITY, COFFEE, AND CLASSY EYEWEAR
              </h2>
              <h2 className="article-info italic resize-none align-middle text-xs font-[600]">
                LAUREN BENSON | 19.11.2022
              </h2>
            </div>

            <div className="ml-2">
              <img
                className="thumbnail"
                src={require("./images/thumbnails/eyewear.png")}
                alt="glasses"
              />
            </div>
          </div>
        </a>
      </div>

      <div className="border-solid border-b-2 mx-5">
        <a href="/articles/meet-naduh">
          <div className="flex mx-[2px] my-[10px] justify-between">
            <div className="width-[100px] resize-none align-middle">
              <h3 className="article-category resize-none align-middle italic leading-4">
                MUSIC
              </h3>
              <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                VANCOUVER'S NEWEST GIRL GROUP
              </h2>

              <h2 className="article-info italic resize-none align-middle text-xs font-[600]">
                LAUREN BENSON | 13.11.2022
              </h2>
            </div>

            <div className="ml-2">
              <img
                className="thumbnail"
                src={require("./images/thumbnails/naduh.jpg")}
                alt="band"
              />
            </div>
          </div>
        </a>
      </div>

      <div className="border-solid mx-5">
        <a href="/articles/honestly-nevermind">
          <div className="flex mx-[2px] my-[10px] justify-between">
            <div className="width-[100px] resize-none align-middle">
              <h3 className="article-category resize-none align-middle italic leading-4">
                MUSIC
              </h3>

              <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                DRAKE: HONESTLY, WHICH SONG IS THIS?
              </h2>

              <h2 className="article-info italic resize-none align-middle text-xs font-[600]">
                LAUREN BENSON | 23.10.2022
              </h2>
            </div>

            <div className="ml-2">
              <img
                className="thumbnail"
                src={require("./images/thumbnails/honestlynevermindsquare.jpg")}
                alt="drake album review"
              />
            </div>
          </div>
        </a>
      </div>

      {/* <div className='border-solid border-b-2 mx-8'>
        <div className='flex mx-[2px] my-[20px] justify-between'>
          <div className='mr-8'>
            <a href="/">
              <img className='thumbnail'  
                src={require('./images/thumbnails/safeandsound.png')}
                alt='safe and sound'/>
            </a>
          </div>

          <div className='width-[100px] resize-none align-middle'>
            <h2 className='resize-none align-middle'>
              BEST MOMENTS AT VANCOUVER'S SAFE & SOUND FESTIVAL
            </h2>
          </div>
        </div>
      </div> */}

      {/* <div className='border-solid border-b-2 mx-8'>
        <div className='flex mx-[2px] my-[20px] justify-between'>
          <div className='mr-8'>
            <img className='thumbnail' 
              src={require('./images/thumbnails/michelin.png')}
              alt='golds gym logo'/>
          </div>

          <div className='width-[100px] resize-none align-middle'>
            <h2 className='resize-none align-middle'>
              TOP 10 NEW MICHELIN STAR RESTAURANTS IN VANCOUVER
            </h2>
          </div>
        </div>
      </div> */}

      {/* <div className='border-solid border-b-2 mx-8'>
        <div className='flex mx-[2px] my-[20px] justify-between'>
          <div className='mr-8'>
            <img className='thumbnail' 
              src={require('./images/thumbnails/2023.png')}
              alt='golds gym logo'/>
          </div>

          <div className='width-[80px] resize-none align-middle'>
            <h2 className='resize-none align-middle'>
              YOUR NEW YEAR PLANS AND WHAT TO BRING
            </h2>
          </div>
        </div>
      </div> */}

      {/* <div className='border-solid mb-8 mx-8'>
        <div className='flex mx-[2px] my-[20px] justify-between'>
          <div className='mr-8'>
            <img className='thumbnail' 
              src={require('./images/thumbnails/vfw.png')}
              alt='golds gym logo'/>
          </div>

          <div className='width-[80px] resize-none align- '>
            <h2 className='resize-none align-middle'>
              VANCOUVER FASHION WEEK FOR THE FASHION WEAK
            </h2>
          </div>
        </div>
      </div> */}

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
        <a href="https://www.instagram.com/p/Clhf6bPPHm2/" target="_blank">
          <button className="wb-button mx-2">LATEST EDITION</button>
        </a>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfaVbHeLjA0HQYeYVYaTjYBZYYN0fxR5MO6-a0cIq5xT7Teaw/viewform"
          target="_blank"
        >
          <button className="wb-button mx-2">SUBMIT YOUR EVENT</button>
        </a>
      </div>
    </div>
  );
}

const getConfigurableProps = () => ({
  showThumbs: false,
  centerMode: true,
  showStatus: false,
  showArrows: true,
  infiniteLoop: true,
  interval: 2000,
  stopOnHover: false,
});

function BestMoments() {
  return (
    <div className="mb-0">
      <div className="flex justify-between align-middle">
        <h1 className="text-xl font-bold ml-3">YOUR BEST MOMENTS</h1>
        <a
          href="https://www.facebook.com/theplugvancouver/photos/?ref=page_internal&tab=album"
          target="_blank"
        >
          <button className="bg-black text-white rounded-[20px] px-3 py-1 mr-3">
            VIEW ALBUMS
          </button>
        </a>
      </div>

      <Carousel
        {...getConfigurableProps()}
        className="mt-4 mb-8"
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
        <h1 className="text-xl font-bold ml-3">FEATURED VIDEOS</h1>
      </div>

      <Carousel
        {...getConfigurableProps()}
        className="mt-4 mb-8"
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
      <img
        className="mobile-banner"
        src={require("./images/ldoc-banner-mobile.jpg")}
        alt=""
      />
      <img
        className="desktop-banner"
        src={require("./images/ldoc-banner-reduced.jpg")}
        alt=""
      />
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
            <a href="https://www.instagram.com/plugvancouver/" target="_blank">
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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/songs-vote" element={<SongsVote />} />
            <Route path="/songs-list" element={<SongsList />} />

            <Route
              path="/articles/community-coffee-and-classy-eyewear"
              element={<EyewearArticle />}
            />
            <Route path="/articles/meet-naduh" element={<NaduhArticle />} />
            <Route
              path="/articles/honestly-nevermind"
              element={<HonestlyNevermindArticle />}
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
