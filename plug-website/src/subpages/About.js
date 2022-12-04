import React, { useState } from "react";
import "./subcss/about.css";

const AboutPage = () => {
  return (
    <div>
      <div className="text-center">
        {/* <h1 className="my-6 text-black text-center text-5xl italic font-bold">
          ABOUT
        </h1> */}

        <div className="wb-strip mb-4 h-[200px] sm:h-[350px] lg:h-[500px]">
          <img
            className="about-strip-image"
            src={require("../images/about-strip.png")}
            alt="crowd"
          />

          <h2 className="wb-strip-text top-8 text-2xl font-bold lg:mt-24">
            a blurb about what we do, our mission, and something that sparks
            interest - like a fact!
          </h2>
        </div>
      </div>

      <div className="about-container">
        <h1 className="ml-6 my-4 text-black text-3xl font-bold">OUR STORY</h1>

        <p className="text-lg ml-6 mr-8">
          The Plug Vancouver was dreamed up in a small coffee shop in Kitsilano
          in 2019, with a goal of providing UBC students with the greatest
          events and most exclusive opportunities we could create. From humble
          beginnings of $50 pizza giveaways and our original Weekly Breakdowns,
          we've grown to reach new levels- while keeping the elements UBC
          students have loved most.
        </p>

        <p className="text-lg ml-6 mr-8 my-4">
          So where are we now? Over the years we've expanded our craft to reach
          all young people in Vancouver who are interested in urban media,
          culture, and events. We throw the parties you'll keep coming back to,
          collaborate with the most exciting groups, and create the content you
          won't want to miss.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
