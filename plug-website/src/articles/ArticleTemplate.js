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

const ArticleTemplate = () => {
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
              LAUREN BENSON | 19.11.2022
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

        <p className="article-body text-lg font-normal mt-[30px]"></p>

        <p className="article-body text-lg font-normal mt-[30px]"></p>

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

export default ArticleTemplate;
