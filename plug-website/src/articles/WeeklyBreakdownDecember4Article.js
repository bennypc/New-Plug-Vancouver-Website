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

const WeeklyBreakdownDecember4Article = () => {
  return (
    <div className="mx-6 mt-6 ">
      <div className="article-container">
        <a href="/articles">
          <button className="astext">
            <p className="article-topic italic">EVENTS</p>
          </button>
        </a>

        <h1 className="text-4xl mb-1 mt-1">The Weekly Breakdown</h1>

        <h2 className="text-lg font-medium italic mb-1">December 4th - 11th</h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              LAUREN BENSON | 04.12.2022
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
          src={require("./article_media/wb-1/wb1-banner.jpg")}
          alt="glasses"
        />

        <div className="text-center text-xs mb-4">
          <p>Glitch Vancouver.</p>
        </div>

        <p className="article-body text-lg font-normal">
          Calendar looking kind of empty? Pack your social calendar with the
          Plug Vancouver’s signature Weekly Breakdown to make your week a whole
          lot better. Stuck on campus? Scroll to the bottom for our College
          Edition!
        </p>

        <p className="article-body text-xl font-bold mt-[30px]">
          MONDAY, DECEMBER 5TH{" "}
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
          <span className="font-medium">When: </span>Mon, Dec 5th: 10 PM — 2 AM
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
          TUESDAY, DECEMBER 6TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            TNT TRIVIA
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Trivia on Tuesdays, a weekly thing! Don’t forget to book a table to
            secure your spot.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Tues, Dec 6th: 8 PM - 10
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
            <span className="font-medium">When: </span>Tues, Dec 6th: 9 PM - 3
            AM PM
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

        <img
          className="mt-6 mb-2"
          src={require("./article_media/eyewear-article/stefanharvalias.png")}
          alt="store manager"
        />

        <div className="text-center text-xs mt-[2px]">
          <p>
            Stefan Harvalias tries on some shades with the Plug Vancouver team!
          </p>
        </div>

        <p className="article-body text-lg font-normal mt-[30px]"></p>

        <p className="article-body text-lg font-normal mt-[30px]"></p>

        <p className="article-body text-lg font-normal mt-[30px]"></p>

        <p className="article-body text-lg font-normal mt-[30px]"></p>
      </div>

      <div className="border-solid border-b-[1px] mx-2 my-6" />

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
    </div>
  );
};

export default WeeklyBreakdownDecember4Article;
