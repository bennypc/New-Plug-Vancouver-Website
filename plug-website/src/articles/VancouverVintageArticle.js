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

const VancouverVintageArticle = () => {
  return (
    <div className="mx-6 mt-6 ">
      <div className="article-container">
        <a href="/articles">
          <button className="astext">
            <p className="article-topic italic">FASHION</p>
          </button>
        </a>

        <h1 className="text-4xl mb-1 mt-1">Vancouver’s Newest Vintage Scene</h1>

        <h2 className="text-lg font-medium italic mb-1">
          Granville Flea gives buying new a run for its money
        </h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              LAUREN BENSON | 31.5.2022
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
          src={require("./article_media/vancouver-vintage/top-banner.webp")}
          alt="clothing rack"
        />

        <div className="text-center text-xs mb-4">
          <p>
            Shoppers browse the Granville Flea Market at The American. Photos
            courtesy of Granville Flea Market.
          </p>
        </div>

        <p className="article-body text-lg font-normal">
          Thrifting in Vancouver is already arguably one of the best rainy day
          pastimes, or so one would think until checking out Granville Flea
          Market. It’s similar to hitting a secondhand shop in that it’s all
          vintage clothing, but this time there’s actually something good on
          each rack. From concert merch, sports jerseys, authentic designer
          pieces, to Y2K items that’ll remind you of your childhood- there’s
          definitely something for everyone.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Though clothing is the main attraction, there’s certainly much more to
          enjoy. Just in the same way that each vendor curates the items in
          their section, Granville Flea curates an experience for each shopper.
          Attendees can enjoy complimentary snacks from their sponsors, order
          lunch from Downlow Burgers, or even enjoy a drink while they browse.
          These unique touches can likely be attributed to the events’ origins
          in the clubbing industry. Co-founder of Granville Flea and VIP
          Services Manager of Fortune Sound Club Cole Brownstone came up with
          the idea when looking for avenues to boost the club’s weekly Midnight
          Mondays event. According to Brownstone “It’s a very popular RNB night…
          [but] because it’s a Monday we had to add layers to the event, so we
          started putting a vintage vendor [at the event] every Monday and then
          a lot of people started asking if they could be a vendor. I got the
          idea… there’s a market for this. I called Josh from Vintage Finds
          Vancity and Riaz and said ‘boys I got an idea, let’s have a meeting’”.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          The thrill of the hunt is definitely just as exciting for the vendors
          as it is for the customers. When reminiscing on their best finds over
          the years, Nam, Trevor, and Rain of Big Closet Vintage told of how
          they found a “Sonic Youth t-shirt one time… [and] sold it the next day
          for $2.3K. From six bucks to $2.3K, that’s gotta be [their] best
          find.” The trio happened to have their “second-best find” with them, a
          Jenny Holzer tee that they picked up at a thrift store for eight
          dollars. The shirt is estimated to fetch up to a whopping thousand
          dollars on the resale market. Talk about a profit margin!{" "}
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          That being said, the art of flipping clothes is about more than
          graphic tees and windbreakers. Granville Flea has its own subculture
          within the world of vintage, cultivated by the vendors and their
          personal styles. Brownstone noticed that “In [his] experience with
          thrifting culture and the resellers, a lot of them have a base in
          growing up in hip hop or skateboarding culture”. The fashion they
          cultivate is “an extension of that, combined with the street hustle
          culture of hip hop. I think thrifting culture has grown from that, at
          least in the Granville Flea community”.
        </p>

        <img
          className="mt-6 mb-2"
          src={require("./article_media/vancouver-vintage/image-grid.webp")}
          alt="store manager"
        />

        <div className="text-center text-xs mt-[2px]">
          <p>
            Big Closet Vintage showing their Jenny Holzer tee, shoppers browse
            through tees and caps. Photos courtesy of Granville Flea.
          </p>
        </div>

        <p className="text-lg font-semibold mt-[30px] italic">
          “In my experience with thrifting culture and the resellers, a lot of
          them have a base in growing up in hip hop or skateboarding culture”
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          Vendor Coels Capsule run by couple Cole and Chanelle, features a
          unique selection of feminine pieces which Chanelle crops and sews
          herself to give a fitted look. Chanelle “specializes in Y2K era”, and
          looks for brands such as “Ed Hardy, Juicy Couture, Harley-Davidson”.
          Sizes and styles like the ones Coels Capsule cultivates aren’t always
          an easy find amongst the racks of baggy tees. Chanelle has seen that
          “there’s definitely a lot of men with their vintage shops… [women’s
          fashion] is definitely underrated and gets overlooked”.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          That being said, arguably the most fun part of attending Granville
          Flea events is the excitement of finding that perfect piece that
          speaks to you. According to Brownstone shopping secondhand “is cool
          because number one, you never know what you’re going to find. Number
          two, if you go and I go in the same store, you’re gonna find something
          that you think is unique and I’ll find something that I think is
          unique, and there’s probably a market to sell both of those things”.
          Be sure to check them out for yourself to take in the full experience,
          you never know what you might stumble upon. Happy hunting!
        </p>
      </div>

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
  );
};

export default VancouverVintageArticle;
