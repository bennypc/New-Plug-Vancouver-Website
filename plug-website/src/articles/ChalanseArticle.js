import React from "react";
import "./articles.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Carousel } from "react-responsive-carousel";
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
const getConfigurableProps = () => ({
  showThumbs: false,
  showStatus: false,
  showArrows: true,
  infiniteLoop: true,
  interval: 2000,
  stopOnHover: false,
});

const ChalanseArticle = () => {
  return (
    <div className="mx-6 mt-6 ">
      <div className="article-container">
        <a href="/articles">
          <button className="astext">
            <p className="article-topic italic">FASHION</p>
          </button>
        </a>

        <h1 className="text-4xl mb-1 mt-1">Chalanse</h1>

        <h2 className="text-lg font-medium italic mb-1">
          Fashion that empowers – the brand to watch
        </h2>

        <a href="/articles/zoie-mcclymont">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              ZOIE MCCLYMONT | 19.11.2022
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
          src={require("./article_media/chalanse/chalanse.jpeg")}
          alt="chalanse"
        />

        <div className="text-center text-xs mb-4">
          <p>Chalanse: chic, alluring, electrifying, consuming.</p>
        </div>

        <p className="article-body text-lg font-normal">
          Based in Vancouver, BC, Chalanse is a rising luxury women’s wear brand
          started by designer, stylist, creative director, university student,
          and all around creative Serena Kealy.{" "}
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Someone wearing this line of Chalanse is edgy, mysterious, and so
          effortlessly luxurious. A term coined by Kealy, the “Chalanse Woman”
          is a force to be reckoned with. She describes her as, “A Badass. She
          has a killer career, she is secure in herself and wants to empower the
          people around her”, an attitude magnificently captured in this
          season’s collection.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          The most striking aspect that sets Chalanse apart is its adoption of
          traditionally masculine shapes through feminine textiles, resulting in
          a more intentionally androgynous appearance, compared to Kealy’s
          previous collections.
        </p>

        <Carousel
          {...getConfigurableProps()}
          className="mt-4 mb-8"
          autoPlay
          centerSlidePercentage={60}
        >
          <div>
            <img
              src={require("./article_media/chalanse/carousel/chalanse1.jpg")}
              alt="chalanse1"
            />
          </div>
          <div>
            <img
              src={require("./article_media/chalanse/carousel/chalanse3.jpg")}
              alt="chalanse3"
            />
          </div>
          <div>
            <img
              src={require("./article_media/chalanse/carousel/chalanse4.jpg")}
              alt="chalanse4"
            />
          </div>
          <div>
            <img
              src={require("./article_media/chalanse/carousel/chalanse5.jpg")}
              alt="chalanse5"
            />
          </div>
          <div>
            <img
              src={require("./article_media/chalanse/carousel/chalanse6.jpg")}
              alt="chalanse6"
            />
          </div>
          <div>
            <img
              src={require("./article_media/chalanse/carousel/chalanse7.jpg")}
              alt="chalanse7"
            />
          </div>
          <div>
            <img
              src={require("./article_media/chalanse/carousel/chalanse8.jpg")}
              alt="chalanse8"
            />
          </div>
          <div>
            <img
              src={require("./article_media/chalanse/carousel/chalanse9.jpg")}
              alt="chalanse9"
            />
          </div>
          <div>
            <img
              src={require("./article_media/chalanse/carousel/chalanse10.jpg")}
              alt="chalanse10"
            />
          </div>
          <div>
            <img
              src={require("./article_media/chalanse/carousel/chalanse11.jpg")}
              alt="chalanse11"
            />
          </div>
        </Carousel>

        <p className="article-body text-lg font-normal mt-[30px]">
          The incredible designer of Chalanse, Serena Kealy, is a university
          student completing a degree in art history and management at the
          University of British Columbia. Atop Alexander McQueen, some of her
          inspirations include her sister, the drag community, local Vancouver
          artists, and the textiles she works with. Kealy has an incredibly
          dynamic design process. She explores a process of inspiration,
          sometimes starting with the fabric and designing a piece around what
          it could become, as opposed to drafting a piece beforehand.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Kealy has since delved deeper into her admiration for drag, and has
          been designing for drag queens to design custom pieces. Kealy has
          specifically been working closely with Hazel-Nut (@names.hazel), a
          queen based in Vancouver, BC.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]"></p>

        <p className="article-body text-lg font-normal mt-[30px]"></p>
        <div className="border-solid border-b-[1px] mx-2 my-6" />
        <a href="/articles/zoie-mcclymont">
          <div className="flex h-[75px] mb-4">
            <img
              className="rounded-full mr-6"
              src={require("../images/team-members/zoie.jpg")}
              alt="lauren"
            />
            <div className="flex align-middle justify-center flex-col">
              <h2 className="">
                <span>Zoie McClymont</span>
                <br />
                <span className="font-normal">Editorial Associate</span>
              </h2>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ChalanseArticle;
