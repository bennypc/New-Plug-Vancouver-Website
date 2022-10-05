import './App.css';
import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Logo() {
  return (
    <img id='main-logo'
      src={require('./logos/PlugWhite.png')}
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
    <div id='culture' className='text-white text-center h-[300px] text-5xl'>
      <h1>CULTURE</h1>
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
    <div id='contact' className='text-white text-center h-[300px] text-5xl'>
      <h1>CONTACT</h1>
    </div>
  )
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

function App() {
  return (
    <>
      <Logo/>

      <div>
        <div className='flex justify-center flex-wrap'>
          <a href='#home' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>HOME</a>
          <a href='#culture' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>CULTURE</a>
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
    </>
    
  )
}

export default App;
