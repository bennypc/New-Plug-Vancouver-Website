import "./App.css";
import React, { useState } from "react";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BurgerMenu from "./components/burger";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";

import ArticlesPage from "./subpages/articles";

import HonestlyNevermindArticle from "./articles/honestlyNevermindArticle";
import EyewearArticle from "./articles/eyewearArticle";
import NaduhArticle from "./articles/naduhArticle";

import "slick-carousel/slick/slick-theme.css";

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
  return (
    <div className="mx-6">
      <div className="bg-[#e5d7be] w-full h-[4px] mb-2 "></div>

      <div>
        <div className="flex justify-between">
          <h2 className="italic">
            <span>THE HOME OF</span>

            <br />

            <span className="text-[#cb6ce6]">VANCOUVER</span>

            <br />

            <span>URBAN CULTURE</span>
          </h2>

          <div className="flex">
            <a href="https://www.instagram.com/plugvancouver/">
              <img
                className="w-10 h-auto my-4 mr-4"
                src={require("./images/logos/social/instagram.png")}
                alt="Instagram logo"
              />
            </a>

            <a
              className="mr-[62px]"
              href="https://www.tiktok.com/@plugvancouver"
            >
              <img
                className="w-10 h-auto my-4"
                src={require("./images/logos/social/tiktok.png")}
                alt="Tiktok logo"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#e5d7be] w-full h-[4px] mt-2 mb-4"></div>
    </div>
  );
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
      <h1 className="my-6 text-white text-center text-5xl italic font-bold">
        THE LATEST
      </h1>

      <div className="border-solid border-b-2 mx-8">
        <a href="/articles/community-coffee-and-classy-eyewear">
          <div className="flex mx-[2px] my-[20px] justify-between">
            <div className="mr-8">
              <img
                className="thumbnail"
                src={require("./images/thumbnails/eyewear.png")}
                alt="glasses"
              />
            </div>
            <div className="width-[100px] resize-none align-middle">
              <h2 className="resize-none align-middle">
                COMMUNITY, COFFEE, AND CLASSY EYEWEAR
              </h2>

              <h2 className="text-sm font-medium italic mt-1">
                The latest summer styles you need to keep an eye on
              </h2>
            </div>
          </div>
        </a>
      </div>

      <div className="border-solid border-b-2 mx-8">
        <a href="/articles/meet-naduh">
          <div className="flex mx-[2px] my-[20px] justify-between">
            <div className="mr-8">
              <img
                className="thumbnail"
                src={require("./images/thumbnails/naduh.jpg")}
                alt="glasses"
              />
            </div>
            <div className="width-[100px] resize-none align-middle">
              <h2 className="resize-none align-middle">
                MEET NADUH, VANCOUVER'S NEWEST GIRL GROUP
              </h2>

              <h2 className="text-sm font-medium italic mt-1">
                The “spicier Spice Girls”
              </h2>
            </div>
          </div>
        </a>
      </div>

      <div className="border-solid mx-8">
        <a href="/articles/honestly-nevermind">
          <div className="flex mx-[2px] mt-[20px] mb-4 justify-between">
            <div className="mr-8">
              <img
                className="thumbnail"
                src={require("./images/thumbnails/honestlynevermindsquare.jpg")}
                alt="drake album review"
              />
            </div>
            <div className="width-[100px] resize-none align-middle">
              <h2 className="resize-none align-middle">
                HONESTLY, WHICH SONG IS THIS?
              </h2>

              <h2 className="text-sm font-medium italic mt-1">
                Why “Honestly, Nevermind” has me missing “the old Drake”
              </h2>
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

      <div className="w-[130px] h-6 ml-auto mr-6 text-right	">
        <a href="/articles">
          <h2 className="italic text-lg">READ MORE &#x2192;</h2>
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
            className="px-4 mb-6"
            src={require("./images/TeamPhotoLarge.jpg")}
            alt="team"
          ></img>
        </div>
      </div>
      <AutoplayCarousel />
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
    <div>
      <Carousel
        autoPlay
        interval="4000"
        transitionTime="1000"
        infiniteLoop
        stopOnHover={false}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
            alt=""
          />
        </div>
      </Carousel>
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
    <div className="h-[150px] flex align-middle flex-col items-center">
      <div className="flex align-middle flex-col items-center text-[26px] md:text-4xl lg:flex-row lg:justify-center">
        <h1 className="">THE HOME OF</h1>

        <h1 className="">
          <span className="text-[#cb6ce6]">&nbsp;VANCOUVER'S</span>

          <span>&nbsp;URBAN CULTURE</span>
        </h1>
      </div>

      <h2 className="mt-4 text-sm font-normal text-gray-300 italic">
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

function App() {
  React.useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);

  return (
    <div>
      <BurgerMenu />

      <Logo />

      {/* <div>
        <div className='flex justify-center flex-wrap'>
          <a href='#home' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>HOME</a>
          <a href='#culture' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>STORY</a>
          <a href='#events' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>EVENTS</a>
          <a href='#media' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>MEDIA</a>
          <a href='#contact' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>CONTACT</a>
        </div>
      </div> */}

      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Articles />
              <Home />
              <Events />
              <Media />
            </>
          }
        />

        <Route path="/articles" element={<ArticlesPage />} />

        <Route
          path="/articles/community-coffee-and-classy-eyewear"
          element={<EyewearArticle />}
        />
        <Route path="/articles/meet-naduh" element={<NaduhArticle />} />
        <Route
          path="/articles/honestly-nevermind"
          element={<HonestlyNevermindArticle />}
        />
      </Routes>

      <Footer />

      <ScrollIndicator />
    </div>
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
