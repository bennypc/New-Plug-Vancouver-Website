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

const VFWTrendsArticle = () => {
  return (
    <div className="mx-6 mt-6 ">
      <div className="article-container">
        <a href="/articles">
          <button className="astext">
            <p className="article-topic italic">FASHION</p>
          </button>
        </a>

        <h1 className="text-4xl mb-1 mt-1">
          The Forecast: The Trends to Watch, According to VFW
        </h1>

        <h2 className="text-lg font-medium italic mb-1">
          From the runway to your closet!
        </h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              LAUREN BENSON | 03.12.2022
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
          src={require("./article_media/vfwtrends/vfwtrendsbanner.jpg")}
          alt="glasses"
        />

        <div className="text-center text-xs mb-4">
          <p>Models posing at Vancouver Fashion Week 2022.</p>
        </div>

        <p className="article-body text-lg font-normal">
          The second-largest fashion show in North America, back for another
          season. With each day packed to the brim with designers, influencers,
          and fashion novices alike, it can be tough to know to predict what’ll
          be on the racks next. The Plug Vancouver has all the biggest trends of
          the season, so you never have a wardrobe crisis.{" "}
        </p>

        <p className="article-body text-2xl font-medium mt-[30px]">
          The Designer: Alex S.Yu
        </p>

        <img
          className="mt-6 mb-2"
          src={require("./article_media/vfwtrends/vfwtrends1.jpg")}
          alt="store manager"
        />

        <p className="article-body text-xl font-normal mt-[30px]">
          <span className="font-medium">Trends to watch for:</span> tulle, neon
          textiles, layering with sheer pieces, and plenty of keyhole cutouts
        </p>

        <p className="article-body text-2xl font-medium mt-[30px]">
          The Designer: Atelier Coin
        </p>

        <img
          className="mt-6 mb-2"
          src={require("./article_media/vfwtrends/vfwtrends2.jpg")}
          alt="store manager"
        />

        <p className="article-body text-xl font-normal mt-[30px]">
          <span className="font-medium">Trends to watch for:</span> elevated
          loungewear, neutrals, retro logos/graphics, oversized clothing, neon
          elements
        </p>

        <p className="article-body text-2xl font-medium mt-[30px]">
          The Designer: Yuinoto
        </p>

        <img
          className="mt-6 mb-2"
          src={require("./article_media/vfwtrends/vfwtrends3.jpg")}
          alt="store manager"
        />

        <p className="article-body text-xl font-normal mt-[30px]">
          <span className="font-medium">Trends to watch for:</span> tulle, puff
          sleeves/balloon sleeves, sheer textiles, bows, nods to workwear
          elements
        </p>

        <p className="article-body text-2xl font-medium mt-[30px]">
          The Designer: Lé Lesél
        </p>

        <img
          className="mt-6 mb-2"
          src={require("./article_media/vfwtrends/vfwtrends4.jpg")}
          alt="store manager"
        />

        <p className="article-body text-xl font-normal mt-[30px]">
          <span className="font-medium">Trends to watch for:</span> corset tops,
          satin fabrics, sheer elements, cargo pants, asymetrical tops elements
        </p>

        <p className="article-body text-2xl font-medium mt-[30px]">
          The Designer: #whysocerealz
        </p>

        <img
          className="mt-6 mb-2"
          src={require("./article_media/vfwtrends/vfwtrends5.jpg")}
          alt="store manager"
        />

        <p className="article-body text-xl font-normal mt-[30px]">
          <span className="font-medium">Trends to watch for:</span> oversized
          blazers, nods to men's workwear, neutrals
        </p>

        <p className="article-body text-2xl font-medium mt-[30px]">
          The Designer: Mufaro Mbudzi: Scheduled Meditation
        </p>

        <img
          className="mt-6 mb-2"
          src={require("./article_media/vfwtrends/vfwtrends6.jpg")}
          alt="store manager"
        />

        <p className="article-body text-xl font-normal mt-[30px]">
          <span className="font-medium">Trends to watch for:</span> oversized
          blazers, graphics, neon, baggy pants, elevated lounge wear
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Check back for the next instalment of the Fashion Forecast, and let us
          know what you think of these trends! Would you wear them?
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

export default VFWTrendsArticle;
