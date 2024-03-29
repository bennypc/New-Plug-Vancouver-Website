import React, { useState, useRef } from "react";
import "./subcss/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";

import {
  faGithub,
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const AboutPage = () => {
  const [fromName, setFromName] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const templateID = "template_y9nvg7g";

  var templateParams = {
    from_name: fromName,
    message: message,
  };
  const sendEmail = (e) => {
    emailjs
      .send("service_38dsvu9", templateID, templateParams, "JYTHfEmzwQQJLqNA2")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    alert("Your message has been sent!");
  };

  return (
    <div className="flex justify-center">
      <div className="about-container">
        <h1 className="mt-4 md:mt-8 mb-8 text-black text-center text-[39px] leading-[50px] md:text-6xl italic font-bold">
          UBC BORN. VANCOUVER BRED.
        </h1>

        <div className="text-center ml-6 mr-6">
          <div className="about-banner mb-4 lg:my-12">
            <img
              className="about-strip-image"
              src={require("../images/aboutbanner1.jpg")}
              alt="crowd"
            />
          </div>
        </div>

        <p className="text-xl md:text-[22px] ml-6 mr-6 my-6">
          Plug Vancouver, formerly “ThePlugUBC,” was dreamed up in a small
          coffee shop in Kitsilano in 2019, with the goal of providing UBC
          students with access to local events and “all things campus.” From
          humble beginnings of $50 pizza giveaways to our flagship Weekly
          Breakdowns, we've always worked tirelessly to create the highest
          quality content for our City. Despite constantly evolving, we’ve
          stayed true to our roots by keeping the signature “Plug” elements UBC
          students have loved most — just bigger and better than ever before.
        </p>

        <div className="text-center ml-6 mr-6">
          <div className="about-banner mb-4  lg:my-12">
            <img
              className="about-strip-image"
              src={require("../images/aboutbanner2.jpg")}
              alt="crowd"
            />
          </div>
        </div>

        <p className="text-xl md:text-[22px] ml-6 mr-6 my-6">
          So where are we currently? Over the years we've fine-tuned our craft
          to reach new audiences and expand our brand. Now, the Plug Vancouver
          is dedicated to providing the best events, media, and entertainment
          the city can find. We throw the events you'll keep coming back to,
          collaborate with the most exciting groups, and create the content you
          won't want to miss.
        </p>

        <h1 className="mt-4 md:mt-8 mb-2 text-black text-center text-[34px] md:text-5xl italic font-bold">
          GET IN TOUCH
        </h1>

        <div className="flex align-middle justify-center">
          <form ref={form} onSubmit={sendEmail}>
            <label>
              <h2 className="my-4">Name</h2>
            </label>
            <input
              style={{ fontFamily: "Helvetica" }}
              type="text"
              name="user_name"
              value={fromName}
              onChange={(e) => setFromName(e.target.value)}
              placeholder="Your Name"
              required
              className="contact-input py-5 md:mx-0 md:w-[600px] lg:w-[900px] bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />

            <label>
              <h2 className="my-4">Message</h2>
            </label>
            <textarea
              style={{ fontFamily: "Helvetica" }}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              required
              className="contact-input py-3 w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 md:py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
            <button
              type="submit"
              value="Send"
              className="mt-8 mb-16 flex mx-auto text-white bg-[#e6007e] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Send Message!
            </button>
          </form>
        </div>

        <h1 className="mt-4 md:mt-8 mb-2 text-black text-center text-[34px] md:text-5xl italic font-bold">
          OUR PEOPLE
        </h1>

        <div>
          <div className="main flex flex-wrap mb-[40px]">
            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/ryanclark.jpg")}
                  alt="ryanclark"
                />
              </div>
              <div className="caption mb-4 md:mt-0 pd-4">
                <h4>Ryan</h4>
                <h4>Hamilton-Clark</h4>
                <p>Events Associate</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/ryanhclark/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/r-h-clark/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/daija.jpg")}
                  alt="daija"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Daija</h3>
                <h3>Hutchings</h3>
                <p>Events Associate</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/_daijahutchings/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/daija-hutchings/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/zoie.jpg")}
                  alt="zoie"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Zoie</h3>
                <h3>McClymont</h3>
                <p>Events Associate</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/zoie.sm/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/zoiemcclymont/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/ryan.jpg")}
                  alt="ryan"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Ryan</h3>
                <h3>Bisaso</h3>
                <p>Events Associate</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/ryanbisaso/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/ryan-bisaso-kiggundu-761245207/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/luke.jpg")}
                  alt="luke"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Luke</h3>
                <h3>Lee</h3>
                <p>Events Associate</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/luke.mudrylee/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/lukelee3/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/dominika.jpg")}
                  alt="dominika"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Dominika</h3>
                <h3>Kruszyna</h3>
                <p>Marketing Associate</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/dominikakruszyna/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/dominikakruszyna/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/alex.jpg")}
                  alt="alex"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Alex</h3>
                <h3>Olyaiy</h3>
                <p>Creative Associate</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/m.alex2002/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/alex-olyaiy-5296321aa/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/kevinhuang.jpg")}
                  alt="kevinhuang"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Kevin</h3>
                <h3>Huang</h3>
                <p>Creative Sr. Associate</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/kevinhuang2/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/steph.jpg")}
                  alt="steph"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Stephanie</h3>
                <h3>Jiang</h3>
                <p>Editorial Sr. Associate</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/stephanie.jiang/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/stephanie-yj-jiang/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/esther.jpg")}
                  alt="esther"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Esther</h3>
                <h3>Lu</h3>
                <p>Events Sr. Associate</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/estherrlu/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/esther-lu-b174a4198/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/cindy.jpg")}
                  alt="cindy"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Cindy</h3>
                <h3>Gao</h3>
                <p>Events Manager</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/cindygao__/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/cindy-gao-11341b1a4/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div> */}

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/berlinda.jpg")}
                  alt="berlinda"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Berlinda</h3>
                <h3>Doan</h3>
                <p>Editorial Manager</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/berly118/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/berlindadoan/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/kevinli.jpg")}
                  alt="kevinli"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Kevin</h3>
                <h3>Li</h3>
                <p>Events Manager</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/kevinl.i/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/kevin-m-li/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/jeshin.jpg")}
                  alt="jeshin"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Jeshin</h3>
                <h3>Toor</h3>
                <p>Marketing Director</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/jeshin_t/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/jeshin-toor/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/lauren.jpg")}
                  alt="lauren"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Lauren</h3>
                <h3>Benson</h3>
                <p>Editorial Director</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/lauren.bensonn/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/laurenmbenson/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/benny.jpg")}
                  alt="benny"
                />
              </div>
              <div className="caption">
                <h3>Benny</h3>
                <h3>Chinvanich</h3>
                <p>Lead Developer</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/bennychinvanich/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/benny-chinvanich/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/bennypc"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/oliver.jpg")}
                  alt="oliver"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Oliver</h3>
                <h3>Moes-Kun</h3>
                <p>Media Director</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/oliver.m.o/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/olivermoesokun/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/hana.jpg")}
                  alt="hana"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Hana</h3>
                <h3>Kim</h3>
                <p>Events Director</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/hana.2k/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/hana-kim-33611223b/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/luana.jpg")}
                  alt="luana"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Luana</h3>
                <h3>Carvalho</h3>
                <p>AVP Events</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://instagram.com/luana_desousa_carvalho?igshid=YmMyMTA2M2Y="
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/luana-de-sousa-carvalho-bega-93900a207/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/praj.jpg")}
                  alt="praj"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Prajwal</h3>
                <h3>Chadha</h3>
                <p>AVP Events</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/prajwallchadha/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/prajwalchadha/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/noah.jpg")}
                  alt="noah"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Noah</h3>
                <h3>Marciano</h3>
                <p>VP Finance</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/noahmarciano/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/noahmarciano/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/kevin.jpg")}
                  alt="kevin"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Kevin</h3>
                <h3>You</h3>
                <p>VP Events</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/yokev1n/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/kevin-you-587841253/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/karmen.jpg")}
                  alt="karmen"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Karmen</h3>
                <h3>Leong</h3>
                <p>VP Marketing</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/karmenleong/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/karmenleong/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:my-8 md:mx-8 md:w-[180px] md:h-[180px]">
              <div className="profile-img">
                <img
                  src={require("../images/team-members/brad.jpg")}
                  alt="brad"
                />
              </div>
              <div className="caption mt-2 md:mt-0">
                <h3>Bradley</h3>
                <h3>Hoy</h3>
                <p>Vice President</p>

                <div className="social-links ml-2 md:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/bradleyahoy/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/bradley-hoy/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="profile-card w-[110px] h-[110px] my-4 mx-3 md:mt-8 md:mx-8 md:w-[180px] md:h-[180px]">
                <div className="profile-img">
                  <img
                    src={require("../images/team-members/kalith.jpg")}
                    alt="kalith"
                  />
                </div>
                <div className="caption mt-2 md:mt-0">
                  <h3>Kalith</h3>
                  <h3>Nanayakkara</h3>
                  <p>President</p>

                  <div className="social-links ml-2 md:ml-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/kalithj/"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/kalith/"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
