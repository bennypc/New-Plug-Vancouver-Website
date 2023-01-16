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
              LAUREN BENSON | 09.01.2023
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
          src={require("./article_media/wb-6/wb6-banner.jpeg")}
          alt="wb3 banner"
        />

        <p className="article-body text-lg font-normal">
          Need some nostalgic music to help you grasp the reality that it’s
          2023? Want to test out your trivia skills? Satisfy all your party
          needs with the Plug Vancouver’s signature Weekly Breakdown. The
          College Edition is finally back, scroll to the bottom of the article
          to check it out!
        </p>

        <p className="article-body text-xl font-bold mt-[30px]">
          MONDAY, JANUARY 9TH{" "}
        </p>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          MILLENNIAL MONDAY | ROXY
        </p>

        <p className="article-body text-lg font-normal mt-4">
          Get nostalgic partying to the biggest hits from 1995-2008!
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Mon, Jan 9th: 9 PM - 3 AM
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
          TUESDAY, JANUARY 10TH{" "}
        </p>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          TEE'D UP TUESDAY
        </p>

        <p className="article-body text-lg font-normal mt-4">
          Turn up on a Tuesday at your favourite arcade bar with $20 unlimited
          gaming.
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Tues, Jan 10th: 3 PM - 2 AM
        </p>

        <p className="article-body text-lg font-normal mb-2">
          <span className="font-medium">Where: </span>Greta Bar YVR
        </p>

        <a
          className="mt-4 text-blue-500"
          href="https://www.instagram.com/fortunesound/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @gretabaryvr
        </a>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            TNT TRIVIA
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Trivia on Tuesdays, a weekly thing! Don’t forget to book a table to
            secure your spot.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Tues, Jan 10th: 8 PM - 10
            PM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Glitch Vancouver
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/glitchvancouver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @glitchvancouver
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          WEDNESDAY, JANUARY 11TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            RENDEZ VOUS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Dawn brings you to an escape to Paris. An exclusive pop-up will
            transport you to a once in a lifetime night that illuminates Paris
            chic.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Wed, Jan 11th: 10 PM - 2
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Isabelle’s Bar & Lounge
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/dawnvancouver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @dawnvancouver
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          THURSDAY, JANUARY 12TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            KPOP THURSDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            The Hottest KPOP Party in Vancouver!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Thurs, Jan 12th: 8 PM -
            LATE
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Celebrities Nightclub
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/celebrities_van/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @celebrities_van &nbsp;
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
            <span className="font-medium">When: </span>Thurs, Jan 12th: 10 PM -
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
          FRIDAY, JANUARY 13TH{" "}
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
            <span className="font-medium">When: </span>Fri, Jan 13th
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
            <span className="font-medium">When: </span>Sat, Jan 14th: 10 PM - 2
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
          SUNDAY, JANUARY 8TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            SUNDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Sunday Industry Nights at Pierre’s Champagne Lounge end the week in
            high fashion.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sun, Jan 15th: 8 PM -
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

        <p className="article-body text-xl font-bold mt-[30px]">
          COLLEGE EDITION
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            UBC DRAG: AMATEUR HOUR
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Experience the Next Era of Drag Talent with this All-UBC cast at UBC
            Drag!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Wed, Jan 11th: 7 PM - 10
            PM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Koerner's Pub
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/UBCDrag/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @UBCDrag &nbsp;
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            FROST WEEK APRÈS SKI
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Join 300+ students for UBC, SFU, CAP U & LC's BIGGEST Back 2 School
            Banger.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, Jan 13th: 10 PM -
            2:30 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Cabana Lounge
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/5thyearparties.van/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @5thyearparties.van &nbsp;
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

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            BACK 2 SCHOOL AT THE PIT
          </p>

          <p className="article-body text-lg font-normal mt-4">
            SEND SZN is coming to Vancouver for the first time, and they're
            partnering up with CASA YVR and the Plug Vancouver (that’s us) to
            bring you the biggest Back 2 School party at your favourite spot on
            campus.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, Jan 13th: 10 PM - 2
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>The Pit Pub UBC
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/pierreslounge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @casayvr &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/pierreslounge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @sendsznevents &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/pierreslounge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @plugvancouver &nbsp;
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            ALL NIGHTER - SFU'S WINTER BACK TO SCHOOL
          </p>

          <p className="article-body text-lg font-normal mt-4">
            The Forum and CAC are joining forces again to take over Friday to
            SFU's Winter Back to School Party.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, Jan 13th: 10 PM - 3
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Levels Nightclub
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/pierreslounge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @theforumsfu &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/sfucac/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @sfucac &nbsp;
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            PARTY LIKE IT’S 1999
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Don’t miss out on UBC PATHS x UBC HSF’s Party Like It’s 1999 with
            your favourite #tb songs!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sat, Jan 14th: 10 PM - 2
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>The Pit Pub UBC
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/ubc_paths/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ubc_paths &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/ubchsf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ubchsf &nbsp;
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            DKE SFU BACK TO SCHOOL MANSION PARTY
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Tired of school already? We hear you. The brothers of DKE present
            Back 2 School.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sat, Jan 14th: 10 PM -
            Late
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>DKE MANSION 7235 Bayview
            Drive
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/DKESFU/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @DKESFU &nbsp;
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
