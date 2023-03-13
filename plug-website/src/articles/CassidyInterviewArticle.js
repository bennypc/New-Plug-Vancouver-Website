import React, { useEffect, useState } from "react";
import "./articles.css";
import Popup from "reactjs-popup";
import supabase from "../supabase";
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
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const WeeklyBreakdownMarch6Article = () => {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [editComment, setEditComment] = useState({
    id: "",
    payload: "",
  });
  const [replyOf, setReplyOf] = useState(null);

  const onChangeEditComment = (event) => {
    const payload = event.target.value;
    setEditComment({ ...editComment, payload });
  };

  const confirmEdit = async () => {
    const { data, error } = await supabase
      .from("comments")
      .update({
        payload: editComment.payload,
      })
      .match({ id: editComment.id });

    if (!error && data) {
      // If succeed
      window.location.reload();
    } else {
      // If failed
      console.log(error?.message);
      window.location.reload();
    }
  };

  const confirmDelete = async (id) => {
    const ok = window.confirm("Delete comment?");
    if (ok) {
      try {
        const { data } = await supabase.from("comments").delete().match({ id });
        window.location.reload();
      } catch (error) {
        window.location.reload();
      }
    }
  };

  const getCommentList = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("article_code", 51);
    if (!error && data) {
      setCommentList(data);
    } else {
      setCommentList([]);
    }
  };

  useEffect(() => {
    getCommentList();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const { data, error } = await supabase.from("comments").insert({
      username: "Anonymous",
      payload: comment,
      reply_of: replyOf,
      article_code: 51, //change for each article
    });

    if (!error && data) {
      // If succeed
      window.location.reload();
    } else {
      // If failed
      console.log(error?.message);
      window.location.reload();
    }
  }

  return (
    <div className="mx-6 mt-6 ">
      <div className="article-container">
        <a href="/articles">
          <button className="astext">
            <p className="article-topic  italic">FASHION</p>
          </button>
        </a>

        <h1 className="text-4xl mb-1 mt-1">Worth a Thousand Words?</h1>

        <h2 className="text-lg font-medium italic">
          A Snapshot of the World of Fashion Photography
        </h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              LAUREN BENSON | 10.03.2022
            </p>
          </button>
        </a>

        <img
          className="my-6 w-full"
          src={require("./article_media/cassidy-interview/cassidy-cover.jpg")}
          alt="Cover Image"
        />

        <p className="text-lg font-normal">
          What do Vogue, Elle, Harper’s Bazaar, and every other major fashion
          publication have in common? Alluring cover shots adorn each glossy
          cover. Every celebrity and designer shoot is meticulously curated by a
          team who brings the vision to life. So, who’s behind the camera? Check
          out a snapshot (no pun intended) of the Vancouver photography industry
          with fashion photographer Cassidy Chen!
        </p>

        <p className="text-lg font-normal mt-[30px]">
          Working four jobs in a fast-paced industry, Chen is truly a jack of
          all trades. She tells us she’s a freelance photographer specializing
          in fashion and editorial, but casually mentions that she also does
          event and lifestyle photography- all while being a full-time student
          at UBC. If that wasn’t enough, Chen is also a model scout, works at a
          marketing agency, and is a media director for a networking
          organization. In her words, she dabbles in “a little bit of
          everything” if it has to do with media. Do we all have every hour that
          Chen has in the day?
        </p>

        <img
          className="my-6 w-full"
          src={require("./article_media/cassidy-interview/cassidy1.jpg")}
          alt="Cassidy Chen"
        />

        <div className="text-center text-sm">
          <p>Photo credits to @edportraitphotography</p>
        </div>

        <p className="text-lg font-normal mt-[30px]">
          Snapping photos has been a part of Chen’s life since the start. When
          most of us were learning how to ride a bike, Chen was out in the field
          discovering her passions. When she was only seven years old her aunt
          and uncle- a pair of nature photographers, introduced her to the
          craft. Chen would spend time in their backyard capturing the local
          birds, and she “kind of just fell in love with how you can capture a
          moment”. That fondness grew with Chen thanks to the help of a high
          school photography teacher, Mr. Sharma fostering it along the way.
          When it comes to fashion photography, Chen says she just kind of got
          “thrown into it”- shooting for her friends and clients when she was
          only sixteen. Now she wouldn’t have it any other way, and is ready to
          take on the world of fashion by storm!
        </p>

        <img
          className="my-6 w-full"
          src={require("./article_media/cassidy-interview/cassidy2.jpg")}
          alt="Cassidy 2"
        />

        <div className="text-center text-sm">
          <p>Photo credits to @cassidychenphotography</p>
        </div>

        <p className="text-lg font-normal mt-[30px]">
          The creative process that goes into each shot is so much more robust
          than one might think- that’s what Chen loves about photography so
          much. She enjoys putting together the final product with big teams:
          “working with stylists, hair, makeup, models” and seeing what they can
          create together. Chen is playful with her work, and tells how she
          likes to experiment with various concepts. She particularly enjoys
          when she can create a “storytelling aspect” for the viewer to digest
          in her photos.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          However, the strength of a team can really determine the final
          product. Luckily Chen says she’s “met some of [her] best friends
          through being creative… it’s like nothing [she] ever anticipated
          before”. When you’re spending “eight-hour shoot days” with your team,
          you better hope you like who you’re working with!
        </p>

        <p className="text-lg font-normal mt-[30px]">
          So, what’s to be expected from creative counterparts in the city? From
          Chen’s experience “Working in the Vancouver industry… as a young and
          female artist… it's been really cool and also enlightening.” Chen is
          also well aware of the darker side of the photography industry, as
          modelling can often be a vulnerable experience. To counter that, Chen
          goes the extra mile to make her clients “feel safe and comfortable at
          [her] shoots” as she works to create a fun environment. So what does a
          fun shoot entail? The ideal shoot according to Chen should feel just
          like a “hangout” that just happens to be in front of a camera!
        </p>

        <img
          className="my-6 w-full"
          src={require("./article_media/cassidy-interview/cassidy3.jpg")}
          alt="Cassidy 3"
        />

        <div className="text-center text-sm">
          <p>Photo credits to @cassidychenphotography</p>
        </div>

        <p className="text-lg font-normal mt-[30px]">
          For those looking to follow in Chen’s footsteps, the Plug asked all
          the questions an up-and-coming photographer might want to know. When
          specifically asked what the creative scene is like in Vancouver, Chen
          said “the Vancouver fashion industry is growing as we speak, but right
          now it is quite small compared to say, the film industry here.” She
          also noted that especially in comparison to our Canadian counterpart
          (Toronto), Vancouver has some catching up to do. VFW and modelling
          industries are growing and “there are more opportunities”.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          Don’t be fooled though, just because the industry isn’t huge doesn’t
          mean the competition isn’t tough. Chen never expected “how many free
          shoots you need to do to get to a point where your portfolio is
          developed.” She did a lot of “test shoots” starting out, which are
          symbiotic photo sessions where both a novice model and a photographer
          leave with photos for their portfolio.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          That being said, don’t let a competitive industry deter you from
          pursuing your career dreams. Chen says her “biggest advice is don’t be
          afraid”, and don’t worry when those self-doubts get in the way. Like
          any opportunity, “The answer is always no until you try it!” An
          attitude as positive as Chen’s is sure to land opportunities. She
          encourages new photographers to “keep experimenting, keep meeting new
          people- a lot of it is networking.” She also emphasizes “keep being a
          nice person too… it goes a really long way.”{" "}
        </p>

        <p className="text-lg font-normal mt-[30px]">
          So what does the future hold for Chen? She plans to continue to
          connect more with creatives and expand her network. She plans to move
          one day to seek out bigger clients and even more exciting
          opportunities. What matters most to Chen is having her creative
          freedom, and “not feeling limited”. Considering the success she’s had
          so far from photographing actresses to shooting in Los Angeles, it’s a
          safe bet that the future holds great opportunities for Chen!
        </p>

        <p className="text-lg font-normal mt-[30px] italic">
          Check out Cassidy’s work at https://cassidychenphotography.ca/, and
          make sure you follow her on Instagram @cassidychenphotography to keep
          up with her latest projects!
        </p>

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

        <div className="my-8 flex justify-center">
          <div className="min-w-full">
            <h1 className="text-2xl font-bold ">Comments</h1>
            <form onSubmit={handleSubmit} className="mt-8 flex gap-8">
              <div className="w-full">
                {replyOf && (
                  <div className="flex gap-4 my-2 items-center justify-start">
                    <p className="text-xs font-extralight italic text-gray-600">
                      Reply of:{" "}
                      {commentList.find((comment) => comment.id === replyOf)
                        ?.payload ?? ""}
                    </p>
                    <button
                      onClick={() => setReplyOf(null)}
                      className="text-xs font-light text-red-600"
                    >
                      Cancel
                    </button>
                  </div>
                )}
                <input
                  type="text"
                  placeholder="Add a comment"
                  className="p-2 border-b focus:border-b-gray-700 w-full outline-none"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <button className="px-4 py-2 bg-green-500 rounded-lg text-white">
                Submit
              </button>
            </form>
            <div className="flex flex-col gap-4 pt-12">
              {commentList
                //sort by newest
                .sort((b, a) => {
                  const aDate = new Date(a.created_at);
                  const bDate = new Date(b.created_at);
                  return +aDate - +bDate;
                })
                .map((comment) => (
                  <div key={comment.id} className="border rounded-md p-4">
                    {comment.reply_of && (
                      <p className="font-extralight italic text-gray-600 text-xs">
                        Reply of:{" "}
                        {commentList.find((c) => c.id === comment.reply_of)
                          ?.payload ?? ""}
                      </p>
                    )}
                    <p className="font-semibold mb-2">
                      {comment.username}
                      {comment.updated_at !== comment.created_at && (
                        <span className="ml-4 text-sm italic font-extralight">
                          edited
                        </span>
                      )}
                    </p>
                    <div className="flex items-center gap-2 justify-between">
                      {comment.id === editComment.id ? (
                        <input
                          type="text"
                          value={editComment.payload}
                          onChange={onChangeEditComment}
                          className="pb-1 border-b w-full"
                        />
                      ) : (
                        <p className="font-light">{comment.payload}</p>
                      )}
                      {editComment.id === comment.id ? (
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={confirmEdit}
                            disabled={editComment.payload === comment.payload}
                            className={`${
                              editComment.payload === comment.payload
                                ? `text-gray-300`
                                : `text-green-500`
                            }`}
                          >
                            Confirm
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setEditComment({ id: "", payload: "" })
                            }
                            className="text-gray-500"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            type="button"
                            onClick={() =>
                              setEditComment({
                                id: comment.id,
                                payload: comment.payload,
                              })
                            }
                            className="text-green-500 mr-3"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => confirmDelete(comment.id)}
                            className="text-gray-700 mr-3"
                          >
                            Delete
                          </button>
                          <button
                            type="button"
                            onClick={() => setReplyOf(comment.id)}
                            className="text-orange-500"
                          >
                            Reply
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyBreakdownMarch6Article;
