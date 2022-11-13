import React from "react";
import "../articles/articles.css";

const articlesPage = () => {
  return (
    <div className="mx-2">
      <div className="text-center">
        <h1 className="my-6 text-white text-center text-5xl italic font-bold">
          OUR STORIES
        </h1>
      </div>

      <div className="text-right">
        <div className="border-solid border-b-2 mx-8">
          <a href="/articles/community-coffee-and-classy-eyewear">
            <div className="flex mx-[2px] my-[20px] justify-between">
              <div className="mr-8">
                <img
                  className="thumbnail"
                  src={require("../images/thumbnails/eyewear.png")}
                  alt="glasses"
                />
              </div>
              <div className="width-[100px] resize-none align-middle">
                <h2 className="resize-none align-middle">
                  COMMUNITY, COFFEE, AND CLASSY EYEWEAR
                </h2>

                <h2 className="text-sm font-medium italic mt-1">
                  The latest summer styles you need to keep an eye on
                </h2>
              </div>
            </div>
          </a>
        </div>

        <div className="border-solid border-b-2 mx-8">
          <a href="/articles/meet-naduh">
            <div className="flex mx-[2px] my-[20px] justify-between">
              <div className="mr-8">
                <img
                  className="thumbnail"
                  src={require("../images/thumbnails/naduh.jpg")}
                  alt="glasses"
                />
              </div>
              <div className="width-[100px] resize-none align-middle">
                <h2 className="resize-none align-middle">
                  MEET NADUH, VANCOUVER'S NEWEST GIRL GROUP
                </h2>

                <h2 className="text-sm font-medium italic mt-1">
                  The “spicier Spice Girls”
                </h2>
              </div>
            </div>
          </a>
        </div>

        <div className="border-solid border-b-2 mx-8">
          <a href="/articles/honestly-nevermind">
            <div className="flex mx-[2px] mt-[20px] mb-4 justify-between">
              <div className="mr-8">
                <img
                  className="thumbnail"
                  src={require("../images/thumbnails/honestlynevermindsquare.jpg")}
                  alt="drake album review"
                />
              </div>
              <div className="width-[100px] resize-none align-middle">
                <h2 className="resize-none align-middle">
                  HONESTLY, WHICH SONG IS THIS?
                </h2>

                <h2 className="text-sm font-medium italic mt-1">
                  Why “Honestly, Nevermind” has me missing “the old Drake”
                </h2>
              </div>
            </div>
          </a>
        </div>

        <div className="border-solid border-b-2 mx-8">
          <div className="flex mx-[2px] my-[20px] justify-between">
            <div className="mr-8">
              <a href="/">
                <img
                  className="thumbnail"
                  src={require("../images/thumbnails/safeandsound.png")}
                  alt="safe and sound"
                />
              </a>
            </div>

            <div className="width-[100px] resize-none align-middle">
              <h2 className="resize-none align-middle">
                BEST MOMENTS AT VANCOUVER'S SAFE & SOUND FESTIVAL
              </h2>
            </div>
          </div>
        </div>

        <div className="border-solid border-b-2 mx-8">
          <div className="flex mx-[2px] my-[20px] justify-between">
            <div className="mr-8">
              <img
                className="thumbnail"
                src={require("../images/thumbnails/michelin.png")}
                alt="golds gym logo"
              />
            </div>

            <div className="width-[100px] resize-none align-middle">
              <h2 className="resize-none align-middle">
                TOP 10 NEW MICHELIN STAR RESTAURANTS IN VANCOUVER
              </h2>
            </div>
          </div>
        </div>

        <div className="border-solid border-b-2 mx-8">
          <div className="flex mx-[2px] my-[20px] justify-between">
            <div className="mr-8">
              <img
                className="thumbnail"
                src={require("../images/thumbnails/2023.png")}
                alt="golds gym logo"
              />
            </div>

            <div className="width-[80px] resize-none align-middle">
              <h2 className="resize-none align-middle">
                YOUR NEW YEAR PLANS AND WHAT TO BRING
              </h2>
            </div>
          </div>
        </div>

        <div className="border-solid mb-8 mx-8">
          <div className="flex mx-[2px] my-[20px] justify-between">
            <div className="mr-8">
              <img
                className="thumbnail"
                src={require("../images/thumbnails/vfw.png")}
                alt="golds gym logo"
              />
            </div>

            <div className="width-[80px] resize-none align- ">
              <h2 className="resize-none align-middle">
                VANCOUVER FASHION WEEK FOR THE FASHION WEAK
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default articlesPage;
