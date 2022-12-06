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

const BlockchainBottleArticle = () => {
  return (
    <div className="mx-6 mt-6 ">
      <div className="article-container">
        <a href="/articles">
          <button className="astext">
            <p className="article-topic italic">EVENTS</p>
          </button>
        </a>

        <h1 className="text-4xl mb-1 mt-1">Blockchain to Bottle Service</h1>

        <h2 className="text-lg font-medium italic mb-1">
          How one club in Vancouver will be the first in Canada to accept
          cryptocurrency as a form of payment
        </h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              LAUREN BENSON | 11.05.2022
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
          src={require("./article_media/blockchain-bottle/koji-hand.webp")}
          alt="glasses"
        />

        <div className="text-center text-xs mb-4">
          <p>
            Plug Vancouver’s St. Patty’s Day Party at Enso. Photos courtesy of
            Oliver Moes-Okun.
          </p>
        </div>

        <p className="article-body text-lg font-normal">
          Ever found yourself wishing you could pay for bottle service with a
          digital currency maintained by a decentralized system? While you
          likely haven’t, you probably have noticed that cryptocurrency is
          everywhere. It’s referenced constantly in media, pop culture, and
          music, even though most of us aren’t aware of how it actually works.
          According to the founder of Enso nightclub Stanley Ho, now might be
          the time to learn.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Starting this May long weekend, Enso nightclub will be the first venue
          in Canada to accept cryptocurrency as a form of payment for table
          service. The CEO and founder of Enso, Stanley Ho, says he’s “been
          observing cryptocurrency for a while” and that it will bring out
          “hidden spenders who invest their money into crypto” to his venue.
          It’s worth noting that adding cryptocurrency as an accepted form of
          payment is not easily adoptable, which is likely why Enso is one of
          the first of its kind to offer this service.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Despite being popular among a massive audience, the cryptocurrency
          market has actually taken a hit over the past few months. Ho says that
          despite crypto being in a bear market (in consistent decline) right
          now, he’s done extensive research about the volatility of the
          currencies and isn’t worried. Enso will charge a 20% “crypto fee” on
          all crypto transactions to cover any fees incurred because of
          fluctuations in value or needing to exchange the currency. Coins that
          will be accepted include Bitcoin, Ethereum, HBAR, SRT, Solana, and
          even Dogecoin. The transactions will be made via a QR code that
          transfers the customer’s payment to Enso’s account.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Buzz about this new innovation has certainly made its way around the
          entertainment industry, and it’s not just Ho who is excited. Founder
          of Kumo Promotions and local DJ Koji Aiken thinks “giving real-world
          utility [to crypto] really gives a huge opportunity to Enso… it’s a
          great way to involve that community.” He’s also noticed the excitement
          around the decentralized currency, and says “there seems to be a lot
          of hype and buzz around the NFT and crypto community right now, and
          getting them involved in nightlife is a huge step in pushing it all
          forward.”
        </p>

        <img
          className="mt-6 mb-2"
          src={require("./article_media/blockchain-bottle/enso.webp")}
          alt="store manager"
        />

        <div className="text-center text-xs mt-[2px]">
          <p>
            Koji Aiken performing a set at Enso nightclub. Photos courtesy of
            Oliver Moes-Okun.
          </p>
        </div>

        <p className="text-lg font-semibold mt-[30px] italic">
          “giving real-world utility [to crypto] really gives a huge opportunity
          to Enso… it’s a great way to involve that community.”
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Aiken and Ho believe that this could be the future for payment in
          nightlife, but of course, that’s if party-goers are actually
          interested. Two UBC students admitted despite not knowing much about
          crypto, they can’t see the innovation changing their clubbing
          experience much. One of the students Sophie Storzer stated, “I know
          some people are really into it… but it’s just not for me.” That being
          said, Enso and the Plug Vancouver have partnered on events in the
          past, so maybe young people will get more comfortable with the
          currency as they’re exposed to it.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Still not down to pay with Dogecoin? Ho says “there are…
          crypto-millionaires in Vancouver” who are “quiet about it”, but very
          ready to have a physical location to spend their money. So, unless
          you’re a seven-figure cryptocurrency fanatic, you’re likely not the
          target audience.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Whether you plan on participating in the world of decentralized
          currency or not, it’s undeniable that it’s incredibly cool that
          Vancouver is trailblazing the world of crypto. Who knows, maybe every
          Vancouverite will be investing soon enough!
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
            <span className="font-normal">Creative Director</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BlockchainBottleArticle;
