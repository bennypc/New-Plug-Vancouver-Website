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

const WeeklyBreakdownJanuary16Article = () => {
  return (
    <div className="mx-6 mt-6 ">
      <div className="article-container">
        <a href="/articles">
          <button className="astext">
            <p className="article-topic italic">EVENTS</p>
          </button>
        </a>

        <h1 className="text-4xl mb-1 mt-1">The Weekly Breakdown</h1>

        <h2 className="text-lg font-medium italic mb-1">January 16th - 22nd</h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              LAUREN BENSON | 16.01.2023
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
      <LinkedinIcon size={32} rtound={true} />
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
          className="article-image mt-6 mb-4 w-full"
          src={require("./article_media/wb-7/wb7-banner.jpeg")}
          alt="wb3 banner"
        />

        <p className="article-body text-lg font-normal">
          Swifties, Directioners, and throwback fans alike- unite! Fulfill your
          throwback dreams with the Plug Vancouver’s signature Weekly Breakdown.
          Scroll to the bottom of the article to check out the College Edition!
        </p>

        <p className="article-body text-xl font-bold mt-[30px]">
          MONDAY, JANUARY 16TH{" "}
        </p>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          TAYLOR SWIFT: TRACK 5’S
        </p>

        <p className="article-body text-lg font-normal mt-4">
          This Drag show night celebrates the one and only: Taylor Swift!
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Mon, Jan 16th, 9:00 PM -
          12:30 AM
        </p>

        <p className="article-body text-lg font-normal mb-2">
          <span className="font-medium">Where: </span>1181 Davie St
        </p>

        <a
          className="mt-4 text-blue-500"
          href="https://www.instagram.com/the.alma.be/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @the.alma.be &nbsp;
        </a>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          MILLENNIAL MONDAY | ROXY
        </p>

        <p className="article-body text-lg font-normal mt-4">
          Get nostalgic partying to the biggest hits from 1995-2008!
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Mon, Jan 16th: 9 PM - 3 AM
        </p>

        <p className="article-body text-lg font-normal mb-2">
          <span className="font-medium">Where: </span>The Roxy Cabaret
        </p>

        <a
          className="mt-4 text-blue-500"
          href="https://www.instagram.com/roxyvancouver/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @roxyvancouver &nbsp;
        </a>

        <p className="article-body text-xl font-bold mt-[30px]">
          TUESDAY, JANUARY 17TH{" "}
        </p>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          ONE DIRECTION NIGHT
        </p>

        <p className="article-body text-lg font-normal mt-4">
          Get ready, get dressed, get your fellow directioners and come party
          all night to the best song ever (get it?)!
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Tues, Jan 17th: 8 PM - 1 AM
        </p>

        <p className="article-body text-lg font-normal mb-2">
          <span className="font-medium">Where: </span>Levels Nightclub
        </p>

        <a
          className="mt-4 text-blue-500"
          href="https://www.instagram.com/levelsvancouver/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @levelsvancouver
        </a>

        <p className="article-body text-xl font-bold mt-[30px]">
          WEDNESDAY, JANUARY 18TH{" "}
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
            <span className="font-medium">When: </span>Wed, Jan 18th: 11 PM - 3
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

        <p className="article-body text-xl font-bold mt-[30px]">
          THURSDAY, JANUARY 19TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            WILD THURSDAYS @GALLERY
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Vancouver’s only hybrid nightclub and destination for a
            one-of-a-kind experience in the city.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span> Thurs, Jan 19th: 7 PM -
            10 PM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Junction 1138 Davie
            Street Vancouver
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/gallery_vancouver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @gallery_vancouver &nbsp;
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            CLUB MUMBAI
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Vancouver's only weekly South Asian club night!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Thurs, Jan 19th: 10 PM -
            2 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Levels Nightclub
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/club.mumbai.vancouver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @club.mumbai.vancouver &nbsp;
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          FRIDAY, JANUARY 20TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            VANCOUVER BAR CRAWL
          </p>

          <p className="article-body text-lg font-normal mt-4">
            YVR's Biggest Bar Crawl, ranked number one in Canada. Every Friday
            at Twelve West & Levels. Includes skip-the-line VIP, free Drinks &
            NFTs.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, Jan 20th
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span> STARTS: Twelve West
            @9:30pm THEN: Levels @11pm
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
          SATURDAY, JANUARY 14TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            SUP FU? SATURDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Hit the dance floor at Vancouver’s longest-running HIP HOP ONLY
            night!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sat, Jan 21st: 10 PM - 2
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Fortune Sound Club
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/hyphyevents/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @hyphyevents &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/fortunesound/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @fortunesound
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          SUNDAY, JANUARY 22ND{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            AFROBEATS SUNDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Afrobeats Sundays at cabana lounge offering an unparalleled adult
            nightlife experience in Vancouver.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sun, Jan 22nd: 10 PM - 2
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Cabana Lounge
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/afrobeatsundays/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @afrobeatsundays &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/afrojoint/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @afrojoint &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/cabanavancouver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @cabanavancouver &nbsp;
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          COLLEGE EDITION
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            PIT NIGHTS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            It’s that time of the week- you know the drill- round up your
            friends and head to the Pit!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Wed, Jan 18th: 10 PM -
            LATE
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>The Pit UBC
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/thepitubc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @thepitubc &nbsp;
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            COURTSIDE FESTIVAL
          </p>

          <p className="article-body text-lg font-normal mt-4">
            UBC Thunderbird's biggest basketball event of the year. Watch them
            take on the University of Regina Cougars!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, Jan 20th: 5 PM -
            Women’s Game 7 PM - Men's Game
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>UBC War Memorial Gym
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/ubc_mbb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ubc_mbb &nbsp;
          </a>
          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/ubcwbball/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ubcwbball &nbsp;
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            ODYSSEY III: WE'RE BACK!
          </p>

          <p className="article-body text-lg font-normal mt-4">
            A Boiler Room inspired experience: House + Techno + D&B + more!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, Jan 20th: 10 PM - 3
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Cabana Lounge
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/pierreslounge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @casayvr &nbsp;
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            BACK TO SCHOOL @TWELVEWEST
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Back to school stress already got you down? Drop those textbooks and
            head downtown.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, Jan 20th: 9 PM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Twelve West
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/twelve_west/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @twelve_west &nbsp;
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          Want to see your event featured next week? Head back to our home page
          to find the submission form!
        </p>

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

export default WeeklyBreakdownJanuary16Article;
