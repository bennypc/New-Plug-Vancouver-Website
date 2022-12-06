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
          WEDNESDAY, DECEMBER 7TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            Plug Vancouver Presents: LDOC 4.0 [Winter Break Edition]
          </p>

          <p className="article-body text-lg font-normal mt-4">
            We’ve been working on bringing you an LDOC event like you’ve never
            experienced before. Hosted by yours truly at the incomparable
            Celebrities Vancouver. Join legendary Vancity DJ’s @djmarvel
            @mrfloetic @chelsiedelr & @bdotdilla, as they spin non-stop Hip Hop,
            Drill, R&B, and Afrobeats all night long.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Wed, Dec 7th: 10 PM -
            Late
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Celebrities Nightclub
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/celebrities_van /"
            target="_blank"
            rel="noopener noreferrer"
          >
            @celebrities_van
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            WORLD-FAMOUS RUTS WEDNESDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Cheap bottles and $5 tequila shots, every Wednesday ‘til 3AM Demon
            Time. What could be better than $5 shots?
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Wed, Dec 7th: 11 PM - 3
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
            DRAG ME TO HELL
          </p>

          <p className="article-body text-lg font-normal mt-4">
            The name says it all, this hell-raising show is not one to miss!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Wed, Dec 7th: 11 PM - 2
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>The Junction Pub
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/missunderstood.89/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @missunderstood.89 &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/thejunctionpub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @thejunctionpub
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          THURSDAY, DECEMBER 8TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            THURSDAY KARAOKE
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Hey Vancouver! Try out Karaoke at this 80s & 90s inspired Retro Bar
            & Game Room.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Thurs, Dec 8th: 8 PM - 12
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
            @glitchvancouver &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/triumphent/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @triumphent
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            UP IN THE AIR @ Isabelle’s
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Thursday night plans up in the air (see what we did there)? Check
            out this vibe-y bar in Yaletown.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Thurs, Dec 8th: 10 PM - 1
            AM
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
          FRIDAY, DECEMBER 9TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            VANCOUVER BAR CRAWL
          </p>

          <p className="article-body text-lg font-normal mt-4">
            YVR's Biggest Bar Crawl, ranked #1 in Canada. Catch it every Friday
            at Twelve West & Levels. Includes skip-the-line VIP, free drinks &
            more!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, Dec 9th: 9:30 PM -
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

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            CINEMA PRESENTS WHAT’S THE MOVE
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Join What’s The Move as they take over the Granville Strip this
            Friday!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, Dec 9th: 10 PM - 3
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Cinema Public House
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/whatsthemovevan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @whatsthemovevan
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          SATURDAY, DECEMBER 10TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            SUBculture
          </p>

          <p className="article-body text-lg font-normal mt-4">
            A collab between Vancouver's leading bass music promotion brand and
            Vancouver's favourite party destination, this event promises to
            provide only the best in low-end bass music spectrum genres weekly.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sat, Dec 10th: 10:30 PM -
            3 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>The Red Room
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/digitalmotionevents/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @digitalmotionevents &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/jantsenr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @jantsenr &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/redroomvancity/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @redroomvancity
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            SUP FU? SATURDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Hit the dance floor at Vancouver’s longest-running HIP HOP ONLY
            night!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sat, Dec 10th: 10 PM - 2
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
          SUNDAY, DECEMBER 11TH{" "}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            HOUSE PARTY SUNDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            House Party Sundays wraps up the week with DJ's Tico and Tylo.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sun, Dec 11th: 10 PM - 2
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Bar None Nightclub
          </p>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            AFROBEATS SUNDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Afrobeats Sundays at Cabana Lounge feature DJ Rockstar, DJ Chelsea,
            DJ Vinnie Bugatti and Bazenga, special guest performances and more!
            Go out and support the culture every Sunday!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sun, Dec 11th: 10 PM - 2
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
            @afrojoint
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          COLLEGE EDITION
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            CASA and UTSAV Present: Taal: A Curated Night of Your Favourite
            Bollywood and Punjabi
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Spinning nostalgic Bollywood & Punjabi hits all night long (with a
            special UK Garage set), and paying respects to the legend
            @sidhu_moosewala with a power hour of Sidhu from 11 pm - Midnight!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Tues, Dec 6th: 10 PM - 2
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Fortune Sound Club
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/casayvr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @casayvr &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/ubcutsav/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ubcutsav
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            UBC DRAG: QUEER LDOC
          </p>

          <p className="article-body text-lg font-normal mt-4">
            The end of term just got a whole lot more queer! Go check out
            Vancouver’s top drag talent on UBC campus.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Wed, Dec 7th: 7 PM - 10
            PM AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Koerner's Pub
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/casayvr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ubcdrag
          </a>
        </div>
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
