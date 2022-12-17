import React from "react";
import "./articles.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const WeeklyBreakdownDecember12Article = () => {
  return (
    <div className="mx-6 mt-6 ">
      <div className="article-container">
        <a href="/articles">
          <button className="astext">
            <p className="article-topic italic">EVENTS</p>
          </button>
        </a>

        <h1 className="text-4xl mb-1 mt-1">The Weekly Breakdown</h1>

        <h2 className="text-lg font-medium italic mb-1">
          December 12th - 18th
        </h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              LAUREN BENSON | 12.12.2022
            </p>
          </button>
        </a>

        {/* <Popup className="rounded-md" trigger={<button > <img className="width-[32px]" src={require("../images/logos/social/share-button.png")} /></button>} modal>
<div className="rounded-md">
<h1 className="text-center">
  Share
</h1>
<div lassName="text-center items-center flex justify-center">
  <FacebookShareButton url="">
      <FacebookIcon size={32} round={true} />
  </FacebookShareButton>
  <TwitterShareButton url="">
      <TwitterIcon size={32} round={true} />
  </TwitterShareButton>
  <LinkedinShareButton url="">
      <LinkedinIcon size={32} round={true} />
  </LinkedinShareButton>
  <WhatsappShareButton url="">
      <WhatsappIcon size={32} round={true} />
  </WhatsappShareButton>
  <EmailShareButton url="">
      <EmailIcon size={32} round={true} />
  </EmailShareButton>
</div>

</div>
</Popup> */}

        <img
          className="article-image mt-6 mb-2"
          src={require("./article_media/wb-2/wb2-banner.jpg")}
          alt="glasses"
        />

        <p className="article-body text-lg font-normal">
          Need some excitement to carry you to the winter break? Fill your
          schedule with the Plug Vancouver’s signature Weekly Breakdown to spice
          up your holiday season. No College Edition this time, grind out those
          finals instead!
        </p>

        <p className="article-body text-xl font-bold mt-[30px]">
          MONDAY, DECEMBER 12TH{" "}
        </p>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          TINSELTOWN CHRISTMAS POP UP BAR
        </p>

        <p className="article-body text-lg font-normal mt-4">
          Everyday is Christmas at this seasonal pop-up bar! With every inch
          decked out with festive decorations, you’ll feel that you’ve walked
          right into a Hallmark movie!
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Until Dec 31
        </p>

        <p className="article-body text-lg font-normal mb-2">
          <span className="font-medium">Where: </span>Vancouver Alpen Club
          (Deutsches Haus) – 4875 Victoria Drive
        </p>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          MIDNIGHT MONDAYS
        </p>

        <p className="article-body text-lg font-normal mt-4">
          FREE cover? We got you covered. All R&B + Exclusive Vintage Pop-Ups +
          Stick Around For the complimentary DL Chicken! $4.50 Shots &
          High-balls All Night Long!
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Mon, Dec 12th: 10 PM — 2 AM
        </p>

        <p className="article-body text-lg font-normal mb-2">
          <span className="font-medium">Where: </span>Fortune Sound Club
        </p>

        <a
          className="mt-4 text-blue-500"
          href="https://www.instagram.com/fortunesound/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @fortunesound
        </a>

        <p className="article-body text-xl font-bold mt-[30px]">
          TUESDAY, DECEMBER 13TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            CELEBRITIES TUESDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            All year round, Tuesdays at Celebrities are packed with party
            animals. A combination of ambitious musical programs, uncompromising
            bar service, cheap hi-balls and more!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Tues, Dec 13th: 9 PM - 3
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Celebrities Nightclub
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/casayvr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @casayr &nbsp;
          </a>
          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/celebrities_van/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @celebrities_van
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          WEDNESDAY, DECEMBER 14TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            WORLD-FAMOUS RUTS WEDNESDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Cheap bottles and $5 tequila shots, every Wednesday ‘til 3AM Demon
            Time. What could be better than $5 shots?
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Wed, Dec 14th: 11 PM - 3
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Granville Room
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/rutsworldwide/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @rutsworldwide
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            BLAST WEDNESDAYS [HIPHOP | AFROBEAT | DANCEHALL] @STUDIO
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Bringing one of the best Hiphop/Afro nights to Granville
            Entertainment District! Enjoy $4 Shots, Highballs, and $5
            Heineken's.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Wed, Dec 14th: 9:30 PM -
            Late
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Studio Lounge &
            Nightclub
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/studionightclub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @studionightclub
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          THURSDAY, DECEMBER 15TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            COPA CABANA
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Every Thursday join Vancouver’s top Latin DJ’s spinning the best in
            Reggaeton, Latin, Top 40 and more!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Thurs, Dec 15th: 10 PM -
            1 AM PM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Cabana Lounge
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/cabanavancouver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @cabanavancouver
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            UP IN THE AIR @ Isabelle’s
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Thursday night plans up in the air? Check out this vibe-y bar in
            Yaletown.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Thurs, Dec 15th: 10 PM -
            1 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Isabelle’s
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/isabellesyvr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @isabellesyvr
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          FRIDAY, DECEMBER 16TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            THE ICONIC 80'S VINTAGE XMAS RAVE
          </p>

          <p className="article-body text-lg font-normal mt-4">
            The one of a kind 80's Party that brings two cultures together. 80's
            fashion and house music! Talk about the best of both worlds.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, Dec 16th: 8 PM - 1
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>El Guapo 1009 Hamilton
            Street Vancouver
          </p>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            EDM FRIDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Your Friday nights just got a whole lot better…Mansion Nightclub has
            an unprecedented convergence of sight and sound with vibrant
            lighting, a state-of-the- art sound system, rooftop patio, and pool.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, Dec 16th: 9 PM -
            LATE
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Mansion Nightclub
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/mansionclubvan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mansionclubvan
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            VANCOUVER BAR CRAWL
          </p>

          <p className="article-body text-lg font-normal mt-4">
            YVR's Biggest Bar Crawl, Ranked #1 in Canada. Every Friday at Twelve
            West X Levels. Includes skip-the-line VIP, free drinks & more!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, Dec 16th: 9:30 PM -
            LATE
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Twelve West & Levels
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/vancouverbarcrawl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @vancouverbarcrawl
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          SATURDAY, DECEMBER 17TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            TWELVE WEST SATURDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Undeniably the hottest spot in Vancouver, Saturday nights at Twelve
            West are wild.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sat, Dec 17th: 9:30 PM -
            3 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Twelve West Nightclub
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/twelve_west/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @twelve_west
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            CHRISTMAS BOOZE CRUISE
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Have a jolly boat party with Santa on this two-level
            boat-turned-nightclub.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sat, Dec 17th: 8 PM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>760 Pacific Blvd
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/vancouverboatparties/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @vancouverboatparties
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          SUNDAY, DECEMBER 18TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            SUNDAY NIGHT STAND-UP COMEDY
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Featuring a new lineup of Vancouver's funniest stand-up comedians
            each week!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sun, Dec 18th: EARLY
            SHOW: 7:30 PM LATE SHOW: 10 PM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>117 West Pender Street
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/comedyafterdarkyvr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @comedyafterdarkyvr
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            SUNDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Sunday Industry Nights at Pierre’s Champagne Lounge end the week in
            high fashion.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sun, Dec 18th: 8 PM -
            LATE
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Pierre’s Lounge
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/pierreslounge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @pierreslounge &nbsp;
          </a>
        </div>

        <div className="border-solid border-b-[1px] mx-2 my-6" />
        <a href="/articles/lauren-benson">
          <div className="flex h-[75px] mb-4">
            <img
              className="rounded-full mr-6"
              src={require("./article_media/authors/laurenbenson.png")}
              alt="lauren"
            />
            <div className="flex align-middle justify-center flex-col">
              <h2 className="">
                <span>Lauren Benson</span>
                <br />
                <span className="font-normal">Editorial Director</span>
              </h2>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default WeeklyBreakdownDecember12Article;
