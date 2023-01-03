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

const WeeklyBreakdownJanuary2Article = () => {
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
          January 2nd - January 8th
        </h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              LAUREN BENSON | 02.01.2023
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
          src={require('./article_media/wb-5/wb5-banner.jpg')}
          alt="wb3 banner"
        />

        <p className="article-body text-lg font-normal">
          Feeling like you need to get off of the couch? Made a resolution to
          have more fun? Start 2023 right with the Plug Vancouver’s signature
          Weekly Breakdown. No College Edition this time, check back next week!
        </p>

        <p className="article-body text-xl font-bold mt-[30px]">
          MONDAY, JANUARY 2ND{' '}
        </p>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          SPEAKEASY: THE STOCKROOM
        </p>

        <p className="article-body text-lg font-normal mt-4">
          Classy, cultured, yet still approachable- this secret cocktail bar
          tucked behind Hundy Burger has the wayward, tropical island vibes
          you’ve been looking for this winter.
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Mon - Sun (Closed Monday
          Jan 2): 4 PM - 1 AM
        </p>

        <p className="article-body text-lg font-normal mb-2">
          <span className="font-medium">Where: </span>1144 Homer St, Vancouver
        </p>

        <a
          className="mt-4 text-blue-500"
          href="https://www.instagram.com/hundyyvr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @hundyyvr &nbsp;
        </a>

        <a
          className="mt-4 text-blue-500"
          href="https://www.instagram.com/stockroom.fc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @stockroom.fc &nbsp;
        </a>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          KARAOKE MONDAYS
        </p>

        <p className="article-body text-lg font-normal mt-4">
          Open this long weekend! Show off your talent at Karaoke Party every
          Monday at Studio. $4 Shots | $5 Beers
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Mon, Jan 2nd: 9:30 PM - 3
          AM
        </p>

        <p className="article-body text-lg font-normal mb-2">
          <span className="font-medium">Where: </span>Studio Lounge & Nightclub
        </p>

        <a
          className="mt-4 text-blue-500"
          href="https://www.instagram.com/fortunesound/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @studionightclub
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
          <span className="font-medium">When: </span>Mon, Jan 2nd: 10 PM - 2 AM
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
          TUESDAY, JANUARY 3RD{' '}
        </p>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          TEE'D UP TUESDAY
        </p>

        <p className="article-body text-lg font-normal mt-4">
          It's all fun and games at your favourite arcade bar! Turn up on a
          Tuesday at Greta with $20 unlimited gaming.
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Tues, Jan 3rd: 3 PM - 2 AM
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
            CELEBRITIES TUESDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            All year round, Tuesdays at Celebrities are packed with party
            animals. A combination of ambitious musical programs, uncompromising
            bar service, cheap hi-balls and more!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Tues, Jan 3rd: 9 PM - 3
            AM
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
            @celebrities_van
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          WEDNESDAY, JANUARY 4TH{' '}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            REGGAE WEDNESDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Hosted at the most dope spot In town, Amsterdam Cafe. Doors @7PM,
            Music @8PM & free dab before 9PM!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Wed, Jan 4th: 7PM - LATE
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>301 W Hastings St,
            Vancouver
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/newamsterdamcafe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @newamsterdamcafe
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            DRAG ME TO HELL
          </p>

          <p className="article-body text-lg font-normal mt-4">
            The next cast for Drag Me to Hell is fire, you won’t want to miss
            this!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Wed, Jan 4th: 10:30 PM -
            3 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span> The Junction Pub
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

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/names.hazel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @names.hazel &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/the.girlfriendexperience/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @the.girlfriendexperience &nbsp;
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          THURSDAY, JANUARY 5TH{' '}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            COUNTRY LIVE THURSDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            $4 Coronas, $4 Jager, and $14 Yale Pails alllll night long!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Thurs, Jan 5th: 8 PM -
            LATE
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>The Yale Saloon
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/yalesaloon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @yalesaloon &nbsp;
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            L.O.V.E @BARNONE
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Escape the ordinary. This underground basement bar features seasonal
            cocktail menus, snacks, VIP table service, and DJs for late night
            revelry.{' '}
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Thurs, Jan 5th: 10 PM - 3
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Hello Goodbye
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/isabellesyvr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @hellogoodbyebar &nbsp;
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          FRIDAY, JANUARY 6TH{' '}
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
            <span className="font-medium">When: </span>Fri: 9:30 PM
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

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            FLAWLESS: ALL FEMME ARTISTS ALL THROWBACK HITS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            All Femme Artists. All Throwback Hits. What more could you want?
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, Jan 6th: 10:30 PM -
            2 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>The Fox Cabaret
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/foxcabaret/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @foxcabaret &nbsp;
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          SATURDAY, JANUARY 7TH{' '}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            GLOBALLY KNOWN SATURDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            A weekly international night, underground club in the heart of
            Gastown. Check it out and get entered to win a free trip to Whistler
            or Victoria!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sat, Jan 7th: 10 PM - 2
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Ombre Show Lounge
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/ombreshowlounge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ombreshowlounge &nbsp;
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
            <span className="font-medium">When: </span>Sat, Jan 7th: 10 PM - 2
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
          SUNDAY, JANUARY 8TH{' '}
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            COUNTRY SUNDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Roxy Sundays. Need we say more? #LiveMusicLivesHere
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sun, Jan 8th: 8 PM - LATE
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>The Roxy
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/roxyvancouver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @roxyvancouver
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
            <span className="font-medium">When: </span>Sun, Jan 8th: 10 PM - 2
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
            href="https://www.instagram.com/afrojoint/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @cabanavancouver &nbsp;
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

export default WeeklyBreakdownJanuary2Article;
