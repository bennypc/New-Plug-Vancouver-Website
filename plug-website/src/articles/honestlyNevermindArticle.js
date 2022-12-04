import React from "react";
import "./articles.css";

const honestlyNevermindArticle = () => {
  return (
    <div className="mx-6">
      <div className="article-container">
        <p className="text-xl mt-6 italic">MUSIC</p>

        <h1 className="text-4xl mb-1 mt-1">Honestly, Which Song is This?</h1>

        <h2 className="text-lg font-medium italic">
          Why “Honestly, Nevermind” has me missing “the old Drake”
        </h2>

        <p className="text-sm mt-2 italic font-medium">
          LAUREN BENSON | 23.10.2022
        </p>

        <img
          className="my-6"
          src={require("./article_media/honestlynevermind.png")}
          alt="Drake Album"
        />

        <p className="text-lg font-normal">
          It’s been less than twenty-four hours since Drake’s new album
          “Honestly, Nevermind” officially dropped, and the internet (and I)
          already have plenty of thoughts. Before we dive into this, let’s
          establish one thing. I am in no way qualified to comment on this album
          at all, but I’m going to anyway. With that out of the way, let’s hop
          straight into it.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          Right off the bat, we have to talk about how this album is categorized
          as “Dance” music. Of course, it’s always commendable to see artists
          that are titans of a genre try out something different, especially the
          likes of Drake who could just play it safe by sticking to their tried
          and true. The intro and the first two songs on the album had me
          excited about this change of pace, as the synth and spunky beats felt
          somewhat reminiscent of his third studio album, “Take Care”. The third
          track “Texts Go Green” has to be one of the best songs on the album,
          with lyrics that are easy enough to catch on to, but not so redundant
          that it’s dull.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          However, by this point, I started to notice the overarching issue I
          have with this album, which is how uncannily similar each song is.
          Listening to the tracks back to back felt like a fever dream, or just
          one fifty-three-minute long song. “Currents” had the potential to
          change the tempo, but the bed spring sounds that played throughout
          overpowered the catchy melodies.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          The next song that caught my attention was “Calling My Name”. At
          first, the song is a refreshing change, with harder-hitting beats that
          kept me listening. That was until I hit the chorus at least. Drake,
          known for being a master of lyrics, really comprised a chorus with the
          main line: “Your P — y is Calling My Name.” It’s not that I’m bothered
          by the vulgarity, just that I expected something more creative from
          the rapper who gave us “Nice For What”. Half of this album is just
          Drake being down bad.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          While I didn’t mind “Flight’s Booked”, “Overdrive”, or “Down Hill”, I
          was hoping for the tempo of the album to pick up past half the way
          mark. Obviously, Certified Lover Boy was the “hype” album and
          “Honestly, Nevermind” was to contrast that, but I can’t help but wish
          that he just gave something more. Stronger emotions, bigger base
          drops, harder-hitting lyrics- really anything that would make me more
          invested in the album.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          Fans were already treated to a new music video for “Falling Back”,
          which honestly deserves an article of its own. A performance of “Best
          I Ever Had” serenades Drake’s twenty-three wives (yes, twenty-three),
          is definitely… something. You’ll just have to check that one out for
          yourself.
        </p>

        <div className="videowrapper mt-[15px]">
          <iframe
            className="iframe"
            frameBorder="0"
            allowFullScreen
            src="https://www.youtube.com/embed/sOreUnGoIMg"
            title="YouTube video player"
          ></iframe>
        </div>

        <div className="text-center text-xs mt-[2px]">
          <p>
            Drake’s new music video for “Falling Back” from “Honestly,
            Nevermind”.
          </p>
        </div>

        <p className="text-lg font-normal mt-[30px]">
          That being said, I do think “Honestly, Nevermind” was more of a
          passion project for Drake than a flashy, top-charting album. There’s
          only one feature on the album, so between that and the lack of
          promotion, Drake clearly didn’t feel the need to reach for some
          untapped clout. Then again, it’s Drake. People would listen to him
          order pizza if he made an album out of it (including me).
        </p>

        <p className="text-lg font-normal mt-[30px]">
          By the time I finally made it to “Jimmy Cooks”, I was desperately
          holding on to hope that I’d get to something that felt on-brand for
          the Toronto rapper. The reference to his Degrassi character in the
          title was a promising nod to his roots. Seconds into the track I
          genuinely screamed “this is what I wanted!” because I was that happy
          to hear something that sounded like the Drake I know and love. All in
          all, it’s not that the album is bad, it’s just not necessarily what I
          was looking for. While I applaud Drake for finding a new sound and
          creating music that feels true to where he is in life, I “Guess [I]
          miss the old Drake”.
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

export default honestlyNevermindArticle;
