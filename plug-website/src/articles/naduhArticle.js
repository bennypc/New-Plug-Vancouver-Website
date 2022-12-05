import React from "react";
import "./articles.css";

const naduhArticle = () => {
  return (
    <div className="mx-6">
      <div className="article-container">
        <p className="article-topic mt-6 italic">MUSIC</p>

        <h1 className="text-4xl mb-1 mt-1">
          Meet NADUH, Vancouver’s Newest Girl Group
        </h1>

        <h2 className="text-lg font-medium italic">
          The “spicier Spice Girls” you didn’t know you needed
        </h2>

        <p className="text-sm mt-2 italic font-[600]">
          LAUREN BENSON | 13.11.2022
        </p>

        <img
          className="mt-6 mb-2"
          src={require("./article_media/naduh-article/naduhbanner.png")}
          alt="naduh banner"
        />

        <div className="text-center text-xs mb-4">
          <p>Meet NADUH! Photo courtesy of NADUH.</p>
        </div>

        <p className="text-lg font-normal">
          Feel like you’ve listened to one too many Soundcloud rappers? Tired of
          everything you digest being catered to the male gaze on a silver
          platter? Well, the answer to your qualms might just be sent from Venus
          herself. NADUH is Vancouver’s newest girl group, and they’re “filling
          in the industry thigh gap” with their powerful and infectious
          presence.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          The group found each other through their love of 90s hip-hop, which
          inspires the unique music they create. NADUH’s members say “we’re all
          pretty diverse so we have like a collage of what we’re feeling and
          what we’re into… definitely a lot of hip-hop and R&B. We all like
          old-school shit for sure.” Of course, they also confess that they
          wouldn’t have reaped their successes without Venus- yes, the goddess.
          The group divulges how “Venus put us on. She literally showed us her
          shiny butt hole and she was like go forth my children… and we were
          like uh, now we know why you’re the goddess of love and sex and
          everything else.” Keeping that in mind, the name of their latest
          single “On Venus” is no surprise.
        </p>

        <div className="videowrapper mt-[15px]">
          <iframe
            className="iframe"
            frameBorder="0"
            allowFullScreen
            src="https://www.youtube.com/embed/viRxQLYi42g"
            title="YouTube video player"
          ></iframe>
        </div>

        <div className="text-center text-xs mt-[2px]">
          <p>“ON VENUS” by NADUH. Courtesy of NADUH.</p>
        </div>

        <p className="text-lg font-normal mt-[30px]">
          NADUH has not only been feelin’ the love from the Vancouver music
          scene, but also the need for a sound like theirs. The singers gave
          much praise to fellow artists in the industry, echoing that “Vancouver
          female artists RULE. They rock! There’s a big connection with
          everybody and it’s a very beautiful scene, [it’s] very accepting, very
          community-oriented, people want this.”
        </p>

        <p className="text-lg font-normal mt-[30px]">
          If their effortlessly cool style and irresistibly catchy tunes haven’t
          won you over yet, perhaps one of the most exciting elements that the
          group brings to the table is representation. Fans can see themselves
          not only represented but celebrated through NADUH’s music, a
          much-needed refresher in a once male-dominated industry. The vibes:
          simply impeccable.
        </p>

        <img
          className="mt-6 mb-2"
          src={require("./article_media/naduh-article/naduhportrait.png")}
          alt="naduh band"
        />

        <div className="text-center text-xs mt-[2px]">
          <p>NADUH at Safe and Sound Fest with the Plug Vancouver.</p>
        </div>

        <p className="text-lg font-semibold mt-[30px] italic">
          “Vancouver female artists RULE. They rock! There’s a big connection
          with everybody and it’s a very beautiful scene, [it’s] very accepting,
          very community-oriented, people want this.”
        </p>

        <p className="text-lg font-normal mt-[30px]">
          NADUH’s debut album “HOMIESEXUAL” will be released on July 8th,
          available on Spotify, iTunes, and all other digital streaming
          platforms. The group is ready to “blast people with [their] love and
          FPE (fat pussy energy).” Give them a listen!
        </p>

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
    </div>
  );
};

export default naduhArticle;
