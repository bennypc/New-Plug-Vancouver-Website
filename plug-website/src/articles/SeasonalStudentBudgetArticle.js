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

const SeasonalStudentBudgetArticle = () => {
  return (
    <div className="mx-6 mt-6 ">
      <div className="article-container">
        <a href="/articles">
          <button className="astext">
            <p className="article-topic italic">EVENTS</p>
          </button>
        </a>

        <h1 className="text-4xl mb-1 mt-1">
          How to be Seasonal on a Student Budget
        </h1>

        <h2 className="text-lg font-medium italic mb-1">
          Whether You’re Going out or Staying in!
        </h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              LAUREN BENSON | 13.12.2022
            </p>
          </button>
        </a>

        <img
          className="article-image mt-6 mb-2"
          src={require('./article_media/student-seasonal/seasonal-banner.jpg')}
          alt="patio in winter"
        />

        <p className="article-body text-lg font-normal mt-2">
          It’s not easy to have a heart full of holiday spirit when the wallet’s
          empty. Fear not, between our Weekly Breakdown and this list, the Plug
          Vancouver has got you covered this festive season. Check out our top
          ten picks for holiday things to do that can be done for under $15!{' '}
        </p>

        <p className="article-body text-xl font-bold mt-[30px]">
          If you feel like going out:
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            1. Skating at Robson Square Ice Rink{' '}
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Head to the centre of Vancouver for this classic winter activity.
            Luckily for those of us who didn’t grow up playing hockey, skating
            abilities are not required!
          </p>

          <p className="article-body text-lg font-norma mt-4 mb-2">
            <span className="font-medium">Location: </span>Robson Square,
            Vancouver
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Price: </span>$5 for skate rentals,
            free if you bring your own skates
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">When: </span>December 1, 2022 –
            February 28, 2023
          </p>

          <p className="article-body text-lg font-normal">
            <span>Learn more </span>

            <span className="article-body text-lg font-normal">
              <a
                className="mt-4 text-blue-500 article-body text-lg font-normal"
                href="https://www.robsonsquare.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </span>
          </p>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            2. The Lights at Lafarge
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Metro Vancouver’s largest free light display, this picturesque walk
            around Lafarge Lake in Coquitlam will not disappoint. With over
            100,000 lights featuring whimsical displays and scenes, it’s hard to
            believe that it’s such a hidden gem!
          </p>

          <p className="article-body text-lg font-norma mt-4 mb-2">
            <span className="font-medium">Location: </span>Lafarge Lake,
            Coquitlam
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Price: </span>FREE
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">When: </span>November 26, 2022-
            January 31, 2023
          </p>

          <p className="article-body text-lg font-normal">
            <span>Learn more </span>

            <span className="article-body text-lg font-normal">
              <a
                className="mt-4 text-blue-500 article-body text-lg font-normal"
                href="https://www.coquitlam.ca/784/Lights-at-Lafarge"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </span>
          </p>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            3. Heritage Christmas at the Burnaby Village Museum
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Stroll through quaint streets that look like they’re straight out of
            a Christmas card, while enjoying special holiday performances and
            entertainment.
          </p>

          <p className="article-body text-lg font-norma mt-4 mb-2">
            <span className="font-medium">Location: </span>Burnaby Village
            Museum
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Price: </span>FREE
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">When: </span>November 26, 2022 to
            January 2, 2023
          </p>

          <p className="article-body text-lg font-normal">
            <span>Learn more </span>

            <span className="article-body text-lg font-normal">
              <a
                className="mt-4 text-blue-500 article-body text-lg font-normal"
                href="https://www.burnabyvillagemuseum.ca/EN/main/what-s-on/heritage-christmas.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </span>
          </p>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            4. Bright Nights at Stanley Park
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Another classic Vancouver Christmas tradition, Bright Nights at
            Stanley Park features a tunnel of sparkling lights, as well as food
            vendors where you can grab a festive treat for the walk!
          </p>

          <p className="article-body text-lg font-norma mt-4 mb-2">
            <span className="font-medium">Location: </span>Stanley Park,
            Vancouver
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Price: </span>Admission is by
            donation, with all proceeds benefitting the BC Professional Fire
            Fighters’ Burn Fund.
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">When: </span>December 1, 2022 to
            January 1, 2023
          </p>

          <p className="article-body text-lg font-normal">
            <span>Learn more </span>

            <span className="article-body text-lg font-normal">
              <a
                className="mt-4 text-blue-500 article-body text-lg font-normal"
                href="https://vancouver.ca/parks-recreation-culture/bright-nights-train.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </span>
          </p>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            5. Take some pics in front of Vancouver’s Christmas Tree
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Check out Vancouver’s annual Christmas tree, which in past year’s
            has been even taller than the infamous tree at Rockefeller, New
            York! This gorgeous, 76 foot tall tree is located right near Robson
            Square’s skating rink, so check two things off the list at once.
          </p>

          <p className="article-body text-lg font-norma mt-4 mb-2">
            <span className="font-medium">Location: </span>šxʷƛ̓ənəq Xwtl’e7énḵ
            Square, outside the Vancouver Art Gallery
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Price: </span>FREE
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">When: </span>December 2, 2022 onward
          </p>
        </div>

        <img
          className="mb-2"
          src={require('./article_media/student-seasonal/christmas-cups.jpg')}
          alt="store manager"
        />

        <p className="article-body text-xl font-bold mt-[8px]">
          If you’d rather stay in:
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            1. Secret Santa, white elephant, etc.
          </p>

          <p className="article-body text-lg font-normal mt-2">
            Exchanging gifts adds up. Fast. Make the season of giving more
            exciting (and cost-effective) by playing a gift exchange game with
            your loved ones. It’s more sustainable too!
          </p>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            2. Complete a Christmas movie bucket list
          </p>

          <p className="article-body text-lg font-normal mt-2">
            Check out IMDB’s list of the top{' '}
            <span>
              <a
                className="mt-4 text-blue-500 article-body text-lg font-normal"
                href="https://www.imdb.com/list/ls000096828/"
                target="_blank"
                rel="noopener noreferrer"
              >
                100
              </a>
            </span>{' '}
            Christmas Movies and watch as many as you can this season. Revisit
            some classics and maybe even settle the ancient debate of whether
            Die Hard really is a Christmas movie or not.
          </p>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            3. Bake something festive
          </p>

          <p className="article-body text-lg font-normal mt-2">
            Try your hand at a new holiday recipe. Who knows- you may just find
            a new tradition! If you’re feeling nostalgic, try making something
            out of an old cookbook or making a family recipe.
          </p>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            4. Holiday cocktail night
          </p>

          <p className="article-body text-lg font-normal mt-2">
            Put on a festive spin on a classic or try something new. Challenge
            yourself (or your friends) to make a few glasses worth and then
            share the creations!
          </p>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            5. Have a games night
          </p>

          <p className="article-body text-lg font-normal mt-2">
            Round up some friends or family and bring out their competitive
            side! Dust off your board games for a wholesome night in, add in
            some holiday treats and music for a festive touch.
          </p>
        </div>

        <p className="article-body text-xl font-bold mt-[24px] italic">
          Happy Holidays from the Plug Vancouver!
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

export default SeasonalStudentBudgetArticle;
