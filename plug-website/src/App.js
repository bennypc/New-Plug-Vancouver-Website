import './App.css';
import React, { useState } from 'react';
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

function Logo() {
  return (
    <img id='main-logo'
      src={require('./images/logos/PlugWhite.png')}
      alt='Plug Logo'
    />
  )
}

function Home() {
  return (
    <div id='home' className='text-white text-center text-5xl mb-8'>
      <ImageSlideshow />
    </div>
  )
}

function Culture() {
  return (
    <div id='culture' className='text-white text-center text-5xl'>
      <h1 className='mb-4'>STORY</h1>

      <div className="wrapper">
        <div id="one">
          <p className='text-2xl lg:pt-8'>
            The Plug Vancouver was dreamed up in a small coffee shop in Kitsilano in 2019, with a goal of providing UBC students with the greatest events and most exclusive opportunities we could create. From humble beginnings of $50 pizza giveaways and our original Weekly Breakdowns, we've grown to reach new levels- while keeping the elements UBC students have loved most.
          </p>
          <br/>
          <p className='text-2xl'>
          So where are we now? Over the years we've expanded our craft to reach all young people in Vancouver who are interested in urban media, culture, and events. We throw the parties you'll keep coming back to, collaborate with the most exciting groups, and create the content you won't want to miss.
          </p>
        </div>
        <div id="two">
          <img className='px-4 mb-6'
          src={require('./images/TeamPhotoLarge.jpg')}
          alt="team">
          </img>
        </div>
      </div>
      <AutoplayCarousel/>
    </div>
  )
}

function Events() {
  return (
    <div id='events' className='text-white text-center h-[300px] text-5xl'>
      <h1>EVENTS</h1>
    </div>
  )
}

function Media() {
  return (
    <div id='media' className='text-white text-center h-[300px] text-5xl'>
      <h1>MEDIA</h1>
    </div>
  )
}


function Contact() {
  return (
    <div id='contact' className='text-white text-center text-5xl bg-neutral-900'>
      <div className="contact-wrapper">
        <div id="form-left" className='flex lg:h-[350px] justify-center items-center'>
          <div className='text-center'>
            <h2>
              LET'S CONNECT
            </h2>
            <br/>
            <h3 className='text-3xl '>
              ENGAGE. PARTNER. EXPERIENCE.
            </h3>
          </div>
        </div>
        <div id="form-right">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

const FORM_ENDPOINT = ""; // TODO - fill on the later step

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-4 text-lg lg:text-xl placeholder-gray-400 text-white relative bg-black rounded border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-4 text-lg lg:text-xl placeholder-gray-400 text-white relative bg-black rounded border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-4 text-lg lg:text-xl placeholder-gray-400 text-white relative bg-black rounded border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="pt-0">
        <button
          className="bg-[#e6007e] text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
}

function ImageSlideshow() {
  return (
    <div>
        <Carousel autoPlay interval="4000" transitionTime="1000" infiniteLoop stopOnHover={false} showStatus={false} showThumbs={false}>
            <div>
              <img src="https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" alt="" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" alt="" /> 
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" alt="" />
                
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" alt="" />  
            </div>
        </Carousel>
    </div>
  )
}

function AutoplayCarousel() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 0,
      cssEase: 'linear',
      arrows: false,
    };
  return(
    <div className='mb-8'>
        <h2 className='text-gray-400 italic text-3xl mb-4'>Brands we've worked with</h2>
        <Slider {...settings} className='flex align-middle items-stretch	'>
          <div className='flex justify-center w-[65px]'>
            <img className=' w-[65px]'
              src={require('./images/logos/brands/redbull-logo.png')}
              alt='red bull logo'/>
          </div>
          <div className='flex justify-center'>
            <img className=' w-[110px]'
              src={require('./images/logos/brands/bumble-logo.png')}
              alt='bumble logo'/>
          </div>
          <div className='flex justify-center'>
            <img className='w-[65px]'
                src={require('./images/logos/brands/canucks-logo.png')}
                alt='canucks logo'/>
          </div>
          <div className='flex justify-center'>
            <img className='w-[65px]'
                src={require('./images/logos/brands/budlight-logo.png')}
                alt='bud light logo'/>
          </div>
          <div className='flex justify-center'>
            <img className='w-[65px]'
                src={require('./images/logos/brands/goldsgym-logo.png')}
                alt='golds gym logo'/>
          </div>
          <div className='flex justify-center'>
            <img className='w-[65px]'
                src={require('./images/logos/brands/whitecaps-logo.png')}
                alt='whitecaps logo'/>
          </div>
        </Slider>
      </div>
  )
}

function ScrollIndicator() {
  window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

return (
  
  <div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div>  
  
)
}

function App() {
  return (
    <>
      <Logo/>

      <div>
        <div className='flex justify-center flex-wrap'>
          <a href='#home' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>HOME</a>
          <a href='#culture' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>STORY</a>
          <a href='#events' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>EVENTS</a>
          <a href='#media' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>MEDIA</a>
          <a href='#contact' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>CONTACT</a>
        </div>
      </div>

      <div className='bg-white w-full h-[1px] mt-4'></div>

      <Home/>
      <Culture/>
      <Events/>
      <Media/>
      <Contact/>

      <ScrollIndicator />
    </>
    
  )
}

export default App;
