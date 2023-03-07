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

const WeeklyBreakdownMarch6Article = () => {
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
      .eq('article_code', 5);
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
      article_code: 5, //change for each article
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
            <p className="article-topic italic">EVENTS</p>
          </button>
        </a>

        <h1 className="text-4xl mb-1 mt-1">The Weekly Breakdown</h1>

        <h2 className="text-lg font-medium italic mb-1">
          March 6th - March 12th
        </h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              LAUREN BENSON | 06.03.2023
            </p>
          </button>
        </a>

        <img
          className="article-image mt-6 mb-4 w-full"
          src={require('./article_media/wb-11/wb11-banner.jpg')}
          alt="wb3 banner"
        />

        <p className="article-body text-lg font-normal">
          Dance your way closer to spring with Plug Vancouver’s signature Weekly
          Breakdown. Scroll to the bottom for our College Edition!
        </p>

        <p className="article-body text-xl font-bold mt-[30px]">
          MONDAY, MARCH 6TH{' '}
        </p>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          MIDNIGHT MONDAYS
        </p>

        <p className="article-body text-lg font-normal mt-4">
          FREE cover? We got you covered. All R&B + Exclusive Vintage Pop-Ups +
          Stick Around For the complimentary DL Chicken! $4.50 Shots &
          High-balls All Night Long!
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Mon, Mar 6th: 10 PM — 2 AM
        </p>

        <p className="article-body text-lg font-normal mb-2">
          <span className="font-medium">Where: </span>Fortune Sound Club
        </p>

        <a
          className="mt-4 text-blue-500"
          href="https://www.instagram.com/fortunesound/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @fortunesound
        </a>

        <p className="article-body text-xl font-bold mt-[30px]">
          TUESDAY, FEBRUARY 28TH{' '}
        </p>

        <p className="article-body text-lg italic font-medium mt-[30px]">
          TUESDAYS AT CELEBS
        </p>

        <p className="article-body text-lg font-normal mt-4">
          The spot to go to on a Tuesday night!!
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Tues, Mar 7th: 11 PM - 3 AM
        </p>

        <p className="article-body text-lg font-normal mb-2">
          <span className="font-medium">Where: </span>Celebrities Nightclub
        </p>

        <p className="article-body text-xl font-bold mt-[30px]">
          WEDNESDAY, MARCH 8TH
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            BLAST WEDNESDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Bringing one of the best Hip-Hop/Afro nights to Granville.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Wed, Mar 8th
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Studio Lounge &
            Nightclub
          </p>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          THURSDAY, MARCH 9TH
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            UNDONE AT TWELVE WEST
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Get ready to experience a Boiler Room inspired musical escape at
            UNDONE.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Thurs, Mar 9th
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Twelve West: 10 PM - 2
            AM
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/twelve_west/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @twelve_west &nbsp;
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          FRIDAY, MARCH 10TH
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            I MISS YOU ON FRIDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Life is the biggest party you'll ever be at.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, March 10th: 10 PM -
            3 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Hello Goodbye
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/hellogoodbyebar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @hellogoodbyebar
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            BEYONCÉ’S RENAISSANCE BALL - DANCE PARTY
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Beyoncé bangers, deep cuts, and R&B and Hip hop anthems all night.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, March 10th: 10 PM -
            2 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Hollywood Theatre
          </p>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          SATURDAY, MARCH 11TH
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            SHAYO SATURDAY’S
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Curated for Afrobeats, Amapiano, Dancehall & HipHop.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sat, Mar 11th: 9 PM - 3
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Cinema Public House
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/cinema.fc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @cinema.fc &nbsp;
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          SUNDAY, MARCH 12TH
        </p>

        <div>
          <p className="uppercase article-body text-lg italic font-medium mt-[30px]">
            LOVE AFFAIR SUNDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Listen to everything top 40 and hits guaranteed to get you dancing
            on a Sunday night.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sun, Mar 12th: 10 PM - 3
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Gallery Vancouver
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/turnt.ent/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @turnt.ent &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/gallery_vancouver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @gallery_vancouver &nbsp;
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          COLLEGE EDITION
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            WEDNESDAY PIT NIGHTS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            The only nightclub on UBC Campus!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Wed, March 8th: 10 PM -
            LATE
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>The Pit UBC
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/thepitubc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @thepitubc &nbsp;
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            POITS| HOUSE PARTY EDITION
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Rumour has it there may be a bus out to Fortune.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, March 10th: 9 PM -
            LATE
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>CPA HALL
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/poits_sauder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @poits_sauder &nbsp;
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            BEAUMONT STUDIOS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Go dance your heart out to Brazilian funk and Carnaval classics!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, March 10th: 9:30 PM
            - 2 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>316 W 5th Ave,
            Vancouver, BC
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/brasaubc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @brasaubc &nbsp;
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            AEPI PRESENTS: CARTE BLANCHE
          </p>

          <p className="article-body text-lg font-normal mt-4">
            7th annual all white attire party!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sat, Mar 11th: 9 PM - 2
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Hillel House
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/aepiubc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @aepiubc &nbsp;
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          Want to see your event featured next week? Head back to our home page
          to find the submission form!
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

export default WeeklyBreakdownMarch6Article;
