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

const eyewearArticle = () => {
  return (
    <div className="mx-6 mt-6 ">
      <div className="article-container">
        <a href="/articles">
          <button className="astext">
            <p className="article-topic italic">LIFESTYLE</p>
          </button>
        </a>

        <h1 className="text-4xl mb-1 mt-1">
          Community, Coffee, and Classy Eyewear
        </h1>

        <h2 className="text-lg font-medium italic mb-1">
          The latest summer styles you need to keep an eye on
        </h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              LAUREN BENSON | 04.07.2022
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
          src={require("./article_media/eyewear.png")}
          alt="glasses"
        />

        <div className="text-center text-xs mb-4">
          <p>Displays of frames in the Yew Street location of Kits Eyewear.</p>
        </div>

        <p className="article-body text-lg font-normal"></p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Kits Eyewear is far from your average glasses company. What best gives
          that away? Likely the fully-functioning coffee shop in the middle of
          the store. The Chief Marketing Officer of Kits Eyewear Stefan
          Harvalias, says Kits Eyewear worked hard to keep the community’s
          desires in mind when inheriting the location from a Starbucks that had
          resided there for twenty-seven years. Harvalias told us that “every
          retail location we’re going to be opening is going to be about the
          community that it’s in”, and “we’re always making sure we source
          locally” when partnering with vendors.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Chatting with the Kits Eyewear team that works storefront day-to-day
          made it even more apparent the “family” vibe that Kits cultivates.
          Optical Assistant Linnus Davidson echoed that the event was a “great
          turnout… great to meet new faces and locals”.
        </p>

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

        <p className="article-body text-lg font-normal mt-[30px]">
          So where does Safilo come in? Safilo partners “with the fashion houses
          of the licensed brands” they hold to merge the “trends that you see on
          the runway into glasses.” Reagan Colpitts, Safilo’s Regional Manager,
          divulged that Safilo “is here to talk about spring/summer trends for
          2022” and “the top trends on the runway, and how they translate into
          everyday fashion”.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          According to Colpitts, upcoming trends to watch for pay homage to
          ‘70’s style with oversized frames, pastel hues, and gradient lenses.
          Sporty is also in style this season, and you might just see goggles,
          pit aviators, and even luxury visors on the beach this summer.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          So who was on the invite list for the event? Staying true to their
          brand, attendees included loyal customers, Vancouver-based
          influencers, and (lucky for us) The Plug Vancouver. Visitors were
          greeted with friendly faces, a delicious spread of appetizers and
          desserts to snack on, and even a brand-new pair of frames of their
          choice to take home.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Of course, an evening at an eyewear boutique could never be complete
          without testing out a few pairs of the latest styles. Kits and Safilo
          team favourites include a chunky Prada frame, and Jimmy Choo aviators,
          to name a few. To determine which one stands out to you, you’ll have
          to just head to Kits Eyewear and see what they’re all about for
          yourself. Don’t forget to grab a coffee while you’re at it!
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

export default eyewearArticle;
