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
import InstagramEmbed from "../components/InstagramEmbed";

const DragVancouverArticle = () => {
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
      .eq("article_code", 2);
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
      article_code: 2, //change for each article
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
            <p className="article-topic italic">LIFESTYLE</p>
          </button>
        </a>

        <h1 className="text-4xl mb-1 mt-1">
          Drag In Vancouver, According To Hazel-nut
        </h1>

        <h2 className="text-lg font-medium italic mb-1">
          The Drag Queen Worth Going Nuts About!
        </h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              LAUREN BENSON | 23.01.2023
            </p>
          </button>
        </a>

        <img
          className="article-image mt-6 mb-4 w-full"
          src={require("./article_media/drag-vancouver/drag-cover.jpg")}
          alt="wb3 banner"
        />

        <p className="text-lg font-normal">
          Any Drag enthusiast knows that the New York and L.A. girls run the
          scene… but Vancouver? Less heard of. However, this doesn’t mean that
          jaw-dropping Drag isn’t here, but more likely that the local talent
          has yet to receive the recognition it deserves. Who better to learn
          what Vancouver’s Drag has to offer than from a Queen taking over the
          city herself, Hazel-Nut!
        </p>

        <p className="text-lg font-normal mt-[30px]">
          So, how does one become a Drag Queen, or even know where to start?
          What kick-started Hazel’s Drag journey is nothing short of atypical.
          When attending college in Florida and diving competitively, Hazel had
          a 21st century meet-cute with her now best friend Christina Embers
          Taylor. “I made friends with a Drag Queen through Tinder. I saw her on
          there and she had a photo of herself in Drag… and we matched! I
          immediately messaged her and I was like ‘we are becoming best
          friends’.” Christina showed Hazel the world of Drag “through her
          lens”, and as Hazel watched her from the wings, she often caught
          herself pining to be the one on stage.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          It was a year later when Christina put her in drag for the first time,
          and now supports her to this day. Regardless whether it was
          coincidence or or fate that brought Hazel to Drag, her love for the
          art form is simply meant to be. Drag lit a fire under Hazel that
          hadn’t felt since her diving days, and it “fill[ed] that void”. She
          recounts discovering her love for Drag, and was “like guess I found my
          new passion girl… now I have to learn how to put on a fake eyelash!”
          The biggest learning curve for Hazel-Nut? Tucking… Google it.
        </p>

        {/* <InstagramEmbed html={'https://www.instagram.com/p/CnAV1WqBFDV/'} /> */}

        <p className="text-lg font-normal mt-[30px]">
          Hazel spoke a big game about the Florida Queens and the shows they
          turn out, but according to her, Vancouver can keep up. Though the
          girls in Florida are “next level” with their pageantry and
          performances, so are the Vancouver Queens. Hazel tells that Vancouver
          offers “such a spectrum of Drag… you never know what you’re gonna
          get”. Who knows, this might even just be the next “hotspot for Drag in
          Canada”. Vancity is not to be overlooked.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          Throughout her Drag journey, Hazel’s Drag family has certainly helped
          her along the way. For those who don’t know, many Drag Queens belong
          to Drag families, which act as chosen family and a support system in
          the industry. Hazel is a part of the “House of Experience”, who she
          watched perform in Vancouver before even starting Drag. Her fellow
          Queens have helped her “elevate herself”, and have provided her with
          opportunities that have given her insight of “where [she] can go at
          such an early stage”.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          The support doesn’t just stop at the Queens. Even the local fashion
          industry has embraced Hazel-Nut with open arms. Hazel expressed a love
          for fashion that stems from childhood. She recounts that when she “was
          growing up there was Lego and Barbies. [she] would always play with
          the Barbies, and now [she’s] dressing Hazel as a Barbie.” For Hazel,
          she is her own doll. One designer that has particularly supported
          Hazel is Serena Kealy- the designer behind Chalanse. Serena actually
          “slid in [her] DMs when [she] was fourth months in” her Drag career,
          and the pair are now launching their careers hand in hand. Hazel
          believes they’re “coming up together and it’s a perfect match” as they
          create show-stopping designs together.
        </p>

        <img
          className="article-image mt-6 mb-4 w-full"
          src={require("./article_media/drag-vancouver/drag-1.jpg")}
          alt="wb3 banner"
        />

        <p className="text-lg font-normal mt-[30px]">
          As far as next moves go, Hazel has her sights set high. For the short
          term, she’s “here to create a safe space for the community to party,
          let loose, and have a good time”. In the long run, she hopes to travel
          the world and make it on her own- before focusing on careers boosters
          such as “the Race”. Rupaul’s Drag Race is the dream for many Queens,
          as “it’s a great way… to get your name out to the world”. However,
          Hazel cautions that getting on the show isn’t enough. Many tend to
          “forget that the Race is just a stepping stone” to building up that
          dream career, and being a “Ru Girl” won’t magically conjure up
          opportunities on its own. It’s all about being “that Queen” before
          even stepping on the show.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          How far a Queen gets truly depends on how hard she hustles… and Hazel
          knows that well. She explains that when she hits the stage she’s
          “alive… and you’re gonna remember [her]”. Whether the goal is to
          become an international superstar or just make it on stage, Drag has a
          place for everyone. That’s one thing she particularly loves about
          Drag- especially in Vancouver. The diversity in talent is
          unparalleled, as this city has “Drag Kings… Drag things, Drag Queens,
          Nonbinary performers.” The city is lucky enough to have “more and more
          art come forward… and people expressing who they truly are”. Simply
          put, there’s space for every act. For those looking to get into the
          industry, Hazel-Nut suggests to “come out and support the Queens, show
          face. That’s the number one thing. Just put your best foot forward and
          be nice… because you’re gonna get to the spot where you wanna be.”
          Hazel believes Drag is “20% performance, and 80% connections”, so
          reach out (graciously), and get out there. In the words of Rupaul
          herself, “you better work”!
        </p>

        <p className="text-lg font-normal mt-[30px] italic">
          Catch Hazel-Nut live in action her monthly show at Eleven-81, at
          Hazel’s Birthday Brunch on February 10th at 8:30PM at the Cambie, and
          make sure you follow her on Instagram @names.hazel to keep up with all
          things Hazel-Nut!
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

export default DragVancouverArticle;
