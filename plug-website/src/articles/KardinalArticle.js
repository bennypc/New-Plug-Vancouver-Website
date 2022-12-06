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

const KardinalArticle = () => {
  return (
    <div className="mx-6 mt-6 ">
      <div className="article-container">
        <a href="/articles">
          <button className="astext">
            <p className="article-topic italic">MUSIC</p>
          </button>
        </a>

        <h1 className="text-4xl mb-1 mt-1">Catching up with Kardinal</h1>

        <h2 className="text-lg font-medium italic mb-1">
          Talking “Dangerous” and advice for up-and-coming artists
        </h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              LAUREN BENSON | 06.06.2022
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
          src={require("./article_media/kardinal/kardinal.jpg")}
          alt="glasses"
        />

        <div className="text-center text-xs mb-4">
          <p>The Plug Vancouver team interviewing Kardinal Offishall at SSMF</p>
        </div>

        <p className="article-body text-lg font-normal">
          It’s July 2008. The Billboard Hot 100 hits play on your hot pink iPod
          Shuffle as you munch on Scooby-Doo Fruit Snacks (yes, the blue ones).
          You hit shuffle and “Dangerous” comes on, life is good.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          While we can’t transport back to the early 2000s, the Plug Vancouver
          team did get to hit up Safe and Sound Music Fest and check out
          Kardinal Offishall live in action. Not only did we experience all the
          nostalgia of hearing the rapper’s biggest hits live, but we also
          snagged some advice from Offishall for new artists entering the
          industry.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Offishall is known for being a pioneer of the Canadian Hip-Hop scene
          since the ‘90s, and has since topped charts, claimed several Juno
          Awards, and even been a judge on Canada’s Got Talent. However, the
          performer told us he had to take a hiatus due to the pandemic, and
          that Safe and Sound Music Fest was his first show on the West Coast
          “in a few years”. The Canadian music scene fosters a strong sense of
          community for its artists, so to be back performing for his fans was
          “a lot of fun… the crowd really showed up”.
        </p>

        <img
          className="mt-6 mb-2"
          src={require("./article_media/kardinal/kardinalperform.webp")}
          alt="store manager"
        />

        <div className="text-center text-xs mt-[2px]">
          <p>Kardinal Offishall performing at Safe and Sound Music Fest</p>
        </div>

        <p className="text-lg font-semibold mt-[30px] italic">
          “now is the time to double and triple down on everything you’re doing…
          the world is opening up.”
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          When asked what advice he would give to up-and-coming artists in
          Vancouver, Offishall urged creatives to take advantage of
          post-pandemic excitement. Concert venues have lain dormant for years,
          but “now is the time to double and triple down on everything you’re
          doing… the world is opening up.”
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Making connections and harnessing the energy the city has to offer is
          crucial, as even Safe and Sound Music Fest “was a big Vancouver
          reunion” for industry professionals who are ready to revive the music
          scene. Luckily for artists, the fans are just as eager, their “spirits
          are up and they’re ready to have a good time. As artists, we should
          take advantage of that.”
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Not only does reviving concert life give artists a chance to pursue
          their passions, but it also gives attendees to reunite with the songs
          they love. Any good performer knows you give the crowd what it wants,
          which more often than not are favourites of the fans and the artists
          alike.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          For Offishall, his song “Clear!” is “very high energy, it usually gets
          the crowd going. It sets a good precedent.” Of course, “Dangerous is
          usually good to finish… it’s a lot of fun. Those two are my favourites
          just because [they’re] guaranteed to get everybody in the right frame
          of mind to enjoy themselves, let their guard down, and loosen up.”
          Besides, who wouldn’t want to get down with Kardinal Offishall- time
          to go listen to “Dangerous” on repeat!
        </p>
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

export default KardinalArticle;
