import React from "react";
import "../articles/articles.css";

const articlesPage = () => {
  return (
    <div className="mx-2">
      <div className="text-center">
        <h1 className="my-6 text-black text-center text-5xl italic font-bold">
          OUR STORIES
        </h1>
      </div>

      <div className="text-left mb-8">
        <div className="border-solid border-b-2 mx-5">
          <a href="/articles/community-coffee-and-classy-eyewear">
            <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
              <div className="width-[100px] resize-none align-middle">
                <h3 className="resize-none align-middle italic leading-4">
                  LIFESTYLE
                </h3>
                <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                  COMMUNITY, COFFEE, AND CLASSY EYEWEAR
                </h2>
                <h2 className="resize-none align-middle text-xs font-[600]">
                  LAUREN BENSON | 19.11.2022
                </h2>
              </div>

              <div className="ml-2">
                <img
                  className="thumbnail"
                  src={require("../images/thumbnails/eyewear.png")}
                  alt="glasses"
                />
              </div>
            </div>
          </a>
        </div>

        <div className="border-solid border-b-2 mx-5">
          <a href="/articles/community-coffee-and-classy-eyewear">
            <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
              <div className="width-[100px] resize-none align-middle">
                <h3 className="resize-none align-middle italic leading-4">
                  MUSIC
                </h3>
                <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                  MEET NADUH, VANCOUVER'S NEWEST GIRL GROUP
                </h2>
                <h2 className="resize-none align-middle text-xs font-[600]">
                  LAUREN BENSON | 13.11.2022
                </h2>
              </div>

              <div className="ml-2">
                <img
                  className="thumbnail"
                  src={require("../images/thumbnails/naduh.jpg")}
                  alt="naduh"
                />
              </div>
            </div>
          </a>
        </div>

        <div className="border-solid border-b-2 mx-5">
          <a href="/articles/community-coffee-and-classy-eyewear">
            <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
              <div className="width-[100px] resize-none align-middle">
                <h3 className="resize-none align-middle italic leading-4">
                  MUSIC
                </h3>
                <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                  HONESTLY, WHICH SONG IS THIS?
                </h2>
                <h2 className="resize-none align-middle text-xs font-[600]">
                  LAUREN BENSON | 23.10.2022
                </h2>
              </div>

              <div className="ml-2">
                <img
                  className="thumbnail"
                  src={require("../articles/article_media/honestlynevermind.png")}
                  alt="naduh"
                />
              </div>
            </div>
          </a>
        </div>

        <div className="border-solid border-b-2 mx-5">
          <a href="/articles/community-coffee-and-classy-eyewear">
            <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
              <div className="width-[100px] resize-none align-middle">
                <h3 className="resize-none align-middle italic leading-4">
                  MUSIC
                </h3>
                <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                BEST MOMENTS AT VANCOUVER'S SAFE & SOUND FESTIVAL
                </h2>
                <h2 className="resize-none align-middle text-xs font-[600]">
                  LAUREN BENSON | 14.10.2022
                </h2>
              </div>

              <div className="ml-2">
                <img
                  className="thumbnail"
                  src={require("../images/thumbnails/safeandsound.png")}
                  alt="naduh"
                />
              </div>
            </div>
          </a>
        </div>

        <div className="border-solid border-b-2 mx-5">
          <a href="/articles/community-coffee-and-classy-eyewear">
            <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
              <div className="width-[100px] resize-none align-middle">
                <h3 className="resize-none align-middle italic leading-4">
                  VANCOUVER
                </h3>
                <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                  TOP 10 NEW MICHELIN STAR RESTAURANTS IN VANCOUVER
                </h2>
                <h2 className="resize-none align-middle text-xs font-[600]">
                  LAUREN BENSON | 07.10.2022
                </h2>
              </div>

              <div className="ml-2">
                <img
                  className="thumbnail"
                  src={require("../images/thumbnails/michelin.png")}
                  alt="naduh"
                />
              </div>
            </div>
          </a>
        </div>

        <div className="border-solid border-b-2 mx-5">
          <a href="/articles/community-coffee-and-classy-eyewear">
            <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
              <div className="width-[100px] resize-none align-middle">
                <h3 className="resize-none align-middle italic leading-4">
                  VANCOUVER
                </h3>
                <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                  YOUR NEW YEAR PLANS AND WHAT TO BRING
                </h2>
                <h2 className="resize-none align-middle text-xs font-[600]">
                  LAUREN BENSON | 07.10.2022
                </h2>
              </div>

              <div className="ml-2">
                <img
                  className="thumbnail"
                  src={require("../images/thumbnails/2023.png")}
                  alt="naduh"
                />
              </div>
            </div>
          </a>
        </div>

        <div className="border-solid mx-5">
          <a href="/articles/community-coffee-and-classy-eyewear">
            <div className="flex mx-[2px] mt-[20px] mb-[10px] justify-between">
              <div className="width-[100px] resize-none align-middle">
                <h3 className="resize-none align-middle italic leading-4">
                  LIFESTYLE
                </h3>
                <h2 className="article-heading resize-none align-middle leading-[20px] text-[20px]">
                  VANCOUVER FASHION WEEK FOR THE FASHION WEAK
                </h2>
                <h2 className="resize-none align-middle text-xs font-[600]">
                  LAUREN BENSON | 07.10.2022
                </h2>
              </div>

              <div className="ml-2">
                <img
                  className="thumbnail"
                  src={require("../images/thumbnails/vfw.png")}
                  alt="naduh"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default articlesPage;
