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

const WeeklyBreakdownFebruary27Article = () => {
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
      .eq('article_code', 4);
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
      article_code: 4, //change for each article
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
          February 27th - March 5th
        </h2>

        <a href="/articles/lauren-benson">
          <button className="astext">
            <p className="text-sm italic font-[600]">
              LAUREN BENSON | 27.02.2023
            </p>
          </button>
        </a>

        <img
          className="article-image mt-6 mb-4 w-full"
          src={require('./article_media/wb-10/wb10-banner.jpg')}
          alt="wb3 banner"
        />

        <p className="article-body text-lg font-normal">
          Dance off the cold this week with the Plug Vancouver’s signature
          Weekly Breakdown. Scroll to the bottom for our College Edition!
        </p>

        <p className="article-body text-xl font-bold mt-[30px]">
          MONDAY, FEBRUARY 27TH{' '}
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
          <span className="font-medium">When: </span>Mon, Feb 27th: 10 PM — 2 AM
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

        <p className="article-body text-lg italic font-medium mt-[30px]">
          LIPS L Word Trivia Night
        </p>

        <p className="article-body text-lg font-normal mt-4">
          It's gay, it's L Word trivia, beer, and yummy food!
        </p>

        <p className="article-body text-lg font-norma mt-4">
          <span className="font-medium">When: </span>Mon, Feb 27th: 7 PM - 11 PM
        </p>

        <p className="article-body text-lg font-normal mb-2">
          <span className="font-medium">Where: </span>East Van Brewing
        </p>

        <a
          className="mt-4 text-blue-500"
          href="https://www.instagram.com/lips.events/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @lips.events &nbsp;
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
          <span className="font-medium">When: </span>Tues, Feb 28th: 11 PM - 3
          AM
        </p>

        <p className="article-body text-lg font-normal mb-2">
          <span className="font-medium">Where: </span>Celebrities Nightclub
        </p>

        <p className="article-body text-xl font-bold mt-[30px]">
          WEDNESDAY, MARCH 1ST
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            WORLD-FAMOUS RUTS WEDNESDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Cheap bottles and $5 tequila shots, every Wednesday ‘til 3AM Demon
            Time. What could be better than $5 shots?
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Wed, March 1st: 11 PM - 3
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Granville Room
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/rutsworldwide/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @rutsworldwide
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          THURSDAY, MARCH 2ND
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            THURSDAY KARAOKE
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Try out Karaoke at this 80s & 90s inspired retro bar and game room.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Thurs, March 2nd: 8 PM -
            12 PM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Glitch Vancouver
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/glitchvancouver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @glitchvancouver &nbsp;
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            YALE THURSDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            $5 jager and $10 doubles!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Thurs, March 2nd: 9:30 PM
            - 2 AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>The Yale
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/yalesaloon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @yalesaloon &nbsp;
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          FRIDAY, MARCH 3RD
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            VANCOUVER BAR CRAWL
          </p>

          <p className="article-body text-lg font-normal mt-4">
            YVR's Biggest Bar Crawl, ranked number one in Canada. Every Friday
            at Twelve West & Levels. Includes skip-the-line VIP, free Drinks &
            NFTs.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, March 3rd
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span> STARTS: Twelve West
            @9:30pm THEN: Levels @11pm
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/vancouverbarcrawl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @vancouverbarcrawl
          </a>
        </div>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            JIGGY: A Y2K HIP HOP PARTY
          </p>

          <p className="article-body text-lg font-normal mt-4">
            A nostalgic party featuring RAP + R&B club hits from the early to
            mid-2000’s.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, March 3rd: 10 PM - 3
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Bar None Nightclub
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/barnoneclub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @barnoneclub &nbsp;
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          SATURDAY, MARCH 4TH
        </p>

        <div>
          <p className="article-body text-lg italic font-medium mt-[30px]">
            SUP FU? SATURDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            Hit the dance floor at Vancouver’s longest-running HIP HOP ONLY
            night!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sat, March 4th: 10 PM - 2
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Fortune Sound Club
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/hyphyevents/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @hyphyevents &nbsp;
          </a>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/fortunesound/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @fortunesound
          </a>
        </div>

        <p className="article-body text-xl font-bold mt-[30px]">
          SUNDAY, FEBRUARY 26TH
        </p>

        <div>
          <p className="uppercase article-body text-lg italic font-medium mt-[30px]">
            SUNDAYS AT PIERRE'S
          </p>

          <p className="article-body text-lg font-normal mt-4">
            End the week in high fashion with Industry Nights at Pierre’s
            Champagne Lounge.
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Sun, March 5th: 8 PM -
            LATE
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>Pierre’s Lounge
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/pierreslounge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @pierreslounge
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
            <span className="font-medium">When: </span>Wed, March 1st: 10 PM -
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
            FOREVER FRIDAYS
          </p>

          <p className="article-body text-lg font-normal mt-4">
            A heightened audiovisual experience- not your regular Pit Night!
          </p>

          <p className="article-body text-lg font-norma mt-4">
            <span className="font-medium">When: </span>Fri, Feb 3rd: 10 PM - 2
            AM
          </p>

          <p className="article-body text-lg font-normal mb-2">
            <span className="font-medium">Where: </span>The Pit UBC
          </p>

          <a
            className="mt-4 text-blue-500"
            href="https://www.instagram.com/amsevents/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @amsevents &nbsp;
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

export default WeeklyBreakdownFebruary27Article;
