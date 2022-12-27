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

const WeeklyBreakdownDecember26Article = () => {
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
          December 26th - January 1st
        </h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              LAUREN BENSON | 26.12.2022
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
          src={require('./article_media/wb-4/wb4-banner.jpg')}
          alt="wb3 banner"
        />

        <p className="article-body text-lg font-normal">
          Watched Elf enough times for one year? Heard your relatives talk about
          “back in their day” for long enough? Make the last week of the year
          count with the Plug Vancouver’s signature Weekly Breakdown. No College
          Edition this time!
        </p>

        <p className="article-body text-xl font-bold mt-[30px]">
          MONDAY, DECEMBER 26TH{' '}
        </p>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          TEQUILA & TURTLENECKS - BOXING DAY AT LOULA'S
        </p>

        <p className="article-body text-lg font-normal mt-4">
          Celebrating the holidays is the best time of the year, and celebrating
          Boxing Day at Loula's Taverna is even better.
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Mon, Dec 26th: 4 PM - LATE
        </p>

        <p className="article-body text-lg font-normal mb-2">
          <span className="font-medium">Where: </span>Loula's Taverna + Bar
        </p>

        <a
          className="mt-4 text-blue-500"
          href="https://www.instagram.com/loulastaverna/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @loulastaverna
        </a>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          MIDNIGHT MONDAYS
        </p>

        <p className="article-body text-lg font-normal mt-4">
          FREE cover? We got you covered. All R&B + Exclusive Vintage Pop-Ups +
          Stick Around For the complimentary DL Chicken! $4.50 Shots &
          High-balls All Night Long!
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Mon, Dec 26th: 10 PM — 2 AM
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
          TUESDAY, DECEMBER 27TH{' '}
        </p>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          THE CYPHER
        </p>

        <p className="article-body text-lg font-normal mt-4">
          The most authentic Hip-Hop in the city. Cypher is the premier spot to
          discover the depth and complexity of the Vancouver Hip-Hop community.
          Come down and join the party for free every Tuesday.
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Tues, Dec 27th: 9 PM - 2 AM
        </p>

        <p className="article-body text-lg font-normal mb-2">
          <span className="font-medium">Where: </span>433 W Pender St
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            TNT TRIVIA
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Trivia on Tuesdays, it’s a weekly thing! Don’t forget to book a
            table.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Tues, Dec 27th: 8 PM - 10
            PM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Glitch Vancouver
          </p>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          WEDNESDAY, DECEMBER 28TH{' '}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            BLAST WEDNESDAYS [HIPHOP | AFROBEAT | DANCEHALL] @STUDIO
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Bringing one of the best Hip-Hop/Afro night to Granville
            Entertainment District $4 Shots, Highballs, $5 Heineken.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Wed, Dec 28th: 9:30 PM -
            LATE
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

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            DRAG ME TO HELL
          </p>

          <p className="article-body text-lg font-normal mt-4">
            The name says it all, you don't want to miss this weekly show!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span> Wed, Dec 28th: 11 PM - 2
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
          THURSDAY, DECEMBER 29TH{' '}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            WHAT'S THE MOVE: EVENT 6
          </p>

          <p className="article-body text-lg font-normal mt-4">
            What’s The Move is back with another installment of their signature
            Art Exhibition and Afterparty!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Thurs, Dec 29th: 10 PM -
            LATE
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Isabelle’s
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/whatsthemovevan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @whatsthemovevan &nbsp;
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
            <span className="font-medium">When: </span>Thurs, Dec 29th: 10 PM -
            2 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Levels Nightclub
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
            href="https://www.instagram.com/club.mumbai.vancouver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @club.mumbai.vancouver &nbsp;
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          FRIDAY, DECEMBER 30TH{' '}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            NEW YEAR SEASON VIP PASS BY VANCOUVER BAR CRAWL
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Vancouver’s Best New Year Parties aka the New Year Season VIP Pass.
          </p>
          <p className="article-body text-lg font-normal mt-4 italic">
            Includes VIP access to:
          </p>
          <p className="article-body text-lg font-normal mt-4 italic">
            → Fri 30th Dec: Bar Crawl Friday at Twelve West X Levels
            (Skip-the-line VIP Entry + Free Drinks)
          </p>

          <p className="article-body text-lg font-normal mt-4 italic">
            → Sat 31 Dec: NYE Great Gatsby at Enso with DJ @kimlee
            (Skip-the-line VIP Entry All Night)
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, Dec 30th & Sat Dec
            31st: 9:30 PM - 4 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Twelve West & Enso
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
          SATURDAY, DECEMBER 31ST{' '}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            ELYSIUM NYE 2023
          </p>

          <p className="article-body text-lg font-normal mt-4">
            The final and biggest night of the year. Elysium promises the Best
            of The Year Hip-Hop and EDM w/ Complimentary Champagne @ Midnight
            Countdown.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sat, Dec 31st: 9 PM - 4
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Elysium Nightclub - 1240
            Thurlow St, Vancouver
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/iloveenvy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @iloveenvy &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/djseduza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @djseduza &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/elysium1240/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @elysium1240 &nbsp;
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            ROARING 20'S NEW YEAR'S EVE
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Ring in the new year in style as we transform Bimini’s into a Great
            Gatsby style party featuring next level decor, music and vibes.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sat, Dec 31st: 9 PM - 4
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span> Bimini's Beer Hall
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/biminisbeerhall/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @biminisbeerhall
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            MASQUERADE NEW YEARS EVE
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Check out Black Masquerade New Year's Eve 2023!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sat, Dec 31st: 10 PM - 4
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Bar None Nightclub
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/barnoneclub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @barnoneclub
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          SUNDAY, JANUARY 1ST{' '}
        </p>

        <div>
          <p className="uppercase article-body text-lg italic font-medium mt-[30px]">
            SUNDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Sunday Industry Nights at Pierre’s Champagne Lounge, end the week in
            high fashion!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sun, Jan 1st: 8 PM - LATE
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
            @pierreslounge
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            AFROBEATS SUNDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Afrobeats Sundays at cabana lounge with DJ Rockstar, DJ Chelsea, DJ
            Vinnie Bugatti and Bazenga, special guest performances, and more! Go
            out and support the culture every Sunday!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sun, Jan 1st: 10 PM - 2
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

export default WeeklyBreakdownDecember26Article;
