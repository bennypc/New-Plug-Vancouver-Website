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

const BestDrinkArticle = () => {
  return (
    <div className="mx-6 mt-6 ">
      <div className="article-container">
        <a href="/articles">
          <button className="astext">
            <p className="article-topic italic">CULTURE</p>
          </button>
        </a>

        <h1 className="text-4xl mb-1 mt-1">
          Raising the Bar: Group 4 Mixes Up the Competition as Vancouver's Top
          Bartenders
        </h1>

        <h2 className="text-lg font-medium italic mb-1">
          Shaking and Stirring Their Way to the Top of the Vancouver Bartending
          Scene
        </h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              BENNY CHINVANICH | 13.01.2023
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
          src={require("./article_media/blockchain-bottle/hanadaija.jpg")}
          alt="glasses"
        />

        <div className="text-center text-xs mb-4">
          <p>
            Mixologists Hana and Daija working on their greatest creation yet
          </p>
        </div>

        <p className="article-body text-lg font-normal">
          If you're looking for a good time and a great drink in Vancouver, look
          no further than "Group 4" - the city's premier team of bartenders.
          These four mixologists, Praj, Daija, Benny, and Hana, have been
          shaking and stirring their way to the top of the Vancouver bartending
          scene, and they're not showing any signs of slowing down.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          But what sets Group 4 apart from all the other bartenders in the city?
          Well, for starters, they're all members of the elite "Plug Vancouver"
          organization, a group of some of the most talented and experienced
          bartenders in the city. But even among this talented group, Group 4
          stands out as the best of the best.
        </p>

        <p className="article-body text-lg font-semibold mt-[30px] italic leading-9 ">
          "Group 4's drinks are not just the best in Vancouver, they're the best
          I've had in the world. I've tried the drinks of Group 2, and let me
          tell you, they don't even come close to the level of creativity and
          excellence that Group 4 brings to the table." - Kalith Nanayakkara,
          renowned food and beverage critic.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          It's not just their skills behind the bar that make Group 4 the best.
          They're also some of the most fun-loving and outgoing bartenders
          you'll ever meet. Whether they're cracking jokes or dancing on the
          bar, these four always know how to keep the party going. And they're
          not afraid to get in on the fun themselves - you might just see one of
          them doing a flip off the bar during a particularly lively shift.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          But don't just take our word for it - take a sip of the delicious
          drink in your hand that was crafted by Group 4. Whether you're looking
          for a classic cocktail or something new and exciting, these four will
          have something that's perfect for you. And if you're lucky, you might
          even get a little taste of their bartending acrobatics as they whip up
          your beverage.
        </p>

        <p className="article-body text-lg font-normal mt-[30px]">
          So next time you're out in Vancouver looking for a good time and a
          great drink, make sure to seek out Group 4. Trust us, you won't be
          disappointed.
        </p>

        <p className="article-body text-lg font-normal mt-[30px] italic font-semibold">
          And if you want to see Group 4's skills for yourself, make sure to
          vote for them in the annual "Best Drink" competition. Trust us, you do
          not want to miss out on their signature creations. And if you don't
          vote for them, let's just say, you might regret it.
        </p>

        <div className="border-solid border-b-[1px] mx-2 my-6" />
        <a href="/articles/lauren-benson">
          <div className="flex h-[75px] mb-4">
            <img
              className="rounded-full mr-6"
              src={require("../images/team-members/benny.jpg")}
              alt="lauren"
            />
            <div className="flex align-middle justify-center flex-col">
              <h2 className="">
                <span>Benny Chinvanich</span>
                <br />
                <span className="font-normal">Lead Tech</span>
              </h2>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BestDrinkArticle;
