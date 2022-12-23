import React from 'react';
import './articles.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const WeeklyBreakdownDecember19Article = () => {
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
          December 19th - 25th
        </h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              LAUREN BENSON | 19.12.2022
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
          src={require('./article_media/wb-3/wb3-banner.png')}
          alt="wb3 banner"
        />

        <p className="article-body text-lg font-normal">
          Looking for an escape from that holiday hustle bustle? Fill your
          schedule with the Plug Vancouver’s signature Weekly Breakdown to
          spruce up your festive season. No College Edition this time, take a
          breather after those finals instead!
        </p>

        <p className="article-body text-xl font-bold mt-[30px]">
          MONDAY, DECEMBER 19TH{' '}
        </p>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          MEET US 'TIL MIDNIGHT - TAYLOR SWIFT CLUB NIGHT
        </p>

        <p className="article-body text-lg font-normal mt-4">
          If you loved Taylor Swift's new album then you’ll love singing and
          dancing along to it with hundreds of other swifties at this event!
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span> Mon, Dec 19th: 8 PM - 12
          AM
        </p>

        <p className="article-body text-lg font-normal mb-2">
          <span className="font-medium">Where: </span>Levels Nightclub
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
          <span className="font-medium">When: </span>Mon, Dec 19th: 10 PM — 2 AM
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
          TUESDAY, DECEMBER 20TH{' '}
        </p>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          UGLY CHRISTMAS SWEATER PARTY @ISABELLE’S
        </p>

        <p className="article-body text-lg font-normal mt-4">
          There’s no way to celebrate the holidays like stuffing you and all
          your friends into a cozy room with hip-hop mashed up with Holiday
          hits.
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Tues, Dec 20th: 9 PM - 2 AM
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
            <span className="font-medium">When: </span>Tues, Dec 20th: 9 PM - 3
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
          WEDNESDAY, DECEMBER 21ST{' '}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            RUTS WEDNESDAYS: END OF EXAMS IDGAF
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Cheap bottles and $5 tequila shots, every Wednesday till 3 AM Demon
            Time. What more can we say?
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Wed, Dec 21st: 11 PM - 3
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
            The name says it all, you don't want to miss this weekly show!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span> Wed, Dec 21st: 11 PM - 2
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
            @thejunctionpub &nbsp;
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          THURSDAY, DECEMBER 22ND{' '}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            CALIENTE THURSDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Caliente Thursday: where DJs will play the best selection of Salsa,
            Bachata, Merengue and more.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Thurs, Dec 22nd: 8:30 PM
            - 3 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Studio NightClub
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/vancouverlatinfever/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @vancouverlatinfever &nbsp;
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            CVC CRYSTALLIZE
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Time to celebrate the end of a long term and finals season with the
            biggest clubbing night of the year! Join for a night packed with
            sick beats, unforgettable memories and to end off the year with good
            vibes.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Thurs, Dec 22nd: 10 PM -
            2 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span> Fortune Sound Club
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/isabellesyvr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @fortunesoundclub &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/ubc.cvc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ubc.cvc &nbsp;
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            BOLLYWOOD VS BHANGRA
          </p>

          <p className="article-body text-lg font-normal mt-4">
            This one you don’t want to miss… battle of the best!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Thurs, Dec 22nd: 9 PM - 2
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>ENSO Event Centre
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/ensovancouver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ensovancouver &nbsp;
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          FRIDAY, DECEMBER 23RD{' '}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            *TWELVE'S DAY OF CHRISTMAS* (THE ULTIMATE CHRISTMAS PARTY)
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Time to put those resting Grinch faces away, enjoy some drinks (or a
            lot), and prance like no one’s watching
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, Dec 23rd: 9:30 PM -
            3 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Twelve West
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
            <span className="font-medium">When: </span>Fri, Dec 23rd: 9 PM -
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
            <span className="font-medium">When: </span>Fri, Dec 23rd: 9:30 PM -
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
          SATURDAY, DECEMBER 24TH{' '}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            CHRISTMAS FUSION @FORTUNE
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Bring your holiday joy as you dance the night away with top R&B,
            Hip-Hop, and EDM, with DJs Clu, Zayden, Path, Ren, and Boa!
            Complimentary Santa hats will be provided for the first 100 guests.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sat, Dec 24th: 9:30 PM -
            2 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Fortune Sound Club
          </p>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            X-MAS EVE @MANSION
          </p>

          <p className="article-body text-lg font-normal mt-4">
            It’s lovely weather for a sleigh ride together with you! Enjoy
            Christmas Eve at Mansion Nightclub with 100% of cover charges plus
            15% of liquor sales going to charity.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sat, Dec 24th: 9 PM - 2
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Mansion NightClub
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

        <p className="article-body text-xl font-bold mt-[30px]">
          SUNDAY, DECEMBER 25TH{' '}
        </p>

        <div>
          <p className="uppercase article-body text-lg italic font-medium mt-[30px]">
            Soju Sunday: Christmas Long-Weekend Party
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Come celebrate the most wonderful time of the year with the most
            K-Poppin’ party in town. Put down eggnog, pick up some soju, and
            come enjoy your fave K-Pop and K-Pop songs to get into the merry
            mood of the Christmas season.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sun, Dec 25th: 9 PM - 3
            AM
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
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            ReGRETA
          </p>

          <p className="article-body text-lg font-normal mt-4">
            A Locals + Industry night. $5/hour games. $5 everything else too!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sun, Dec 25th: 3 PM - 2
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Greta Bar YVR
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/gretabaryvr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @gretabaryvr &nbsp;
          </a>
        </div>

        <div className="border-solid border-b-[1px] mx-2 my-6" />
        <a href="/articles/lauren-benson">
          <div className="flex h-[75px] mb-4">
            <img
              className="rounded-full mr-6"
              src={require('./article_media/authors/laurenbenson.png')}
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

export default WeeklyBreakdownDecember19Article;
