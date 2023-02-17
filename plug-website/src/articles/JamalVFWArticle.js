import React, { useEffect, useState } from 'react';
import './articles.css';
import Popup from 'reactjs-popup';
import supabase from '../supabase';
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
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import InstagramEmbed from '../components/InstagramEmbed';

const JamalVFWArticle = () => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [editComment, setEditComment] = useState({
    id: '',
    payload: '',
  });
  const [replyOf, setReplyOf] = useState(null);

  const onChangeEditComment = (event) => {
    const payload = event.target.value;
    setEditComment({ ...editComment, payload });
  };

  const confirmEdit = async () => {
    const { data, error } = await supabase
      .from('comments')
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
    const ok = window.confirm('Delete comment?');
    if (ok) {
      try {
        const { data } = await supabase.from('comments').delete().match({ id });
        window.location.reload();
      } catch (error) {
        window.location.reload();
      }
    }
  };

  const getCommentList = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('article_code', 3);
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
    const { data, error } = await supabase.from('comments').insert({
      username: 'Anonymous',
      payload: comment,
      reply_of: replyOf,
      article_code: 3, //change for each article
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
            <p className="article-topic italic">FASHION</p>
          </button>
        </a>

        <h1 className="text-4xl mb-1 mt-1">“I had zero qualifications,”</h1>

        <h2 className="text-lg font-medium italic mb-1">
          A conversation with the founder of Vancouver Fashion Week
        </h2>

        <a href="/articles/esther-lu">
          <button className="astext">
            <p className="text-sm italic font-[600]">ESTHER LU | 16.02.2023</p>
          </button>
        </a>

        <img
          className="article-image mt-6 mb-4 w-full"
          src={require('./article_media/jamalvfw/jamal2.jpg')}
          alt="wb3 banner"
        />
        <div className="text-center text-sm">
          <p>
            Photos by Esther Lu, featuring designs by the brand Chalanse and
            CoCo Création
          </p>
        </div>
        <p className="text-lg font-normal mt-[30px]">
          The glitz and the glamour, the blinding lights, the extravagance of it
          all, it’s almost overwhelming. Who is the man behind the runway, and
          how does it come together?
        </p>

        <p className="text-lg font-normal mt-[30px]">
          Jamal Abdourahman, founder of Vancouver Fashion Week (VFW) and Global
          Fashion Collective sat down with Plug Vancouver to talk about the
          development of VFW and his emergence in the industry.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          “I had zero qualifications,” said Abdourahman referring to his lack of
          experience in the fashion industry prior to the inception of VFW.
          Abdourahman originally started his career in the entertainment
          industry as a club promoter, but found himself searching for a novel
          way to elevate and “add some excitement” to these events. After his
          first fashion show at Paris Fashion Week in 1999 he was inspired to
          take measures into his own hands. The success Abdourahman has amassed
          over the past 20 years is attributed to three traits: confidence,
          drive and persistence – regardless of preexisting credentials.
        </p>

        <img
          className="article-image mt-6 mb-4 w-full"
          src={require('./article_media/jamalvfw/jamal.jpg')}
          alt="wb3 banner"
        />

        <div className="text-center text-sm">
          <p>Image via Metro News</p>
        </div>

        <p className="text-lg font-normal mt-[30px]">
          One thing Abdourahman has always strived to maintain is his value of
          diversity. This was apparent with the inclusion of culture-centric
          designers like the brand Ay Lelum (@aylelum), a Coast Salish Design
          House in addition to models of varying ages and races. It was also
          incredibly refreshing to see disability representation this season
          with an appearance from Bean Gill (@branzoid), recovering paraplegic
          model.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          These values don’t just stop at the runway, they carry onto
          Abdourahman’s personal style as well. He proudly refers to his style
          as distinctly his own, curated through an accumulation of travel
          experiences. Milan and Tokyo are his top two contenders as style
          capitals. What stands out about these cities to him is how evident the
          effort in each individual’s appearance is (subtle diss, sorry
          Vancouver). Abdourahman often makes appearances with his iconic and
          larger-than-life Bowler hats. Sadly, when asked about the goodness
          that is this accessory, his response did not support any wishful
          theories of a Remy from Ratatouille situation occurring under there.
          Turns out, the real reason is quite functional. “I shaved my head” and
          “the wintertime [climate]” make for solid explanations. He typically
          does not accessorize with other items such as jewelry, so he has a
          collection of hats to compensate.
        </p>

        <p className="text-lg font-normal mt-[30px]">
          All in all, Abdourahman envisions his work as a “platform that helps
          emerging designers” gain their well-deserved exposure. When asked
          about the most difficult part of building this platform, Abdourahman
          believes “the hardest part is also the most exciting part.” Despite
          the many variables to account for, seeing it all come together truly
          makes it worthwhile.
        </p>

        <img
          className="article-image mt-6 mb-4 w-full"
          src={require('./article_media/jamalvfw/jamal3.jpg')}
          alt="wb3 banner"
        />

        <div className="text-center text-sm">
          <p>
            Photos by Esther Lu, featuring designs by the brand Chalanse and
            CoCo Création
          </p>
        </div>

        <p className="text-lg font-normal mt-[30px]">
          For anyone hoping to enter this industry now, Abdourahman cautions
          against taking for granted the value of time. Not dedicating enough
          time almost lost him a show at the beginning of his fashion career.
          Since then, he has unfailingly given his all to the VFW and Global
          Fashion Collective brands each year and is excited to see how new
          talent will continue to expand the Vancouver fashion scene in the
          coming years.
        </p>

        <p className="text-lg font-normal mt-[30px] italic">
          If you want to learn more about upcoming Fashion Week events and
          emerging designers make sure to take a look @vanfashionweek on
          Instagram.
        </p>

        <div className="border-solid border-b-[1px] mx-2 my-6" />
        <a href="/articles/esther-lu">
          <div className="flex h-[75px] mb-4">
            <img
              className="rounded-full mr-6"
              src={require('../images/team-members/esther.jpg')}
              alt="lauren"
            />
            <div className="flex align-middle justify-center flex-col">
              <h2 className="">
                <span>Esther Lu</span>
                <br />
                <span className="font-normal">Editorial Associate</span>
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
                      Reply of:{' '}
                      {commentList.find((comment) => comment.id === replyOf)
                        ?.payload ?? ''}
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
                        Reply of:{' '}
                        {commentList.find((c) => c.id === comment.reply_of)
                          ?.payload ?? ''}
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
                              setEditComment({ id: '', payload: '' })
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

export default JamalVFWArticle;
