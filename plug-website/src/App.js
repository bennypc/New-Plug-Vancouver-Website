import './App.css';

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
    <div id='home' className='text-white text-center h-[300px] text-5xl'>
      <h1 className=''>Home</h1>
    </div>
  )
}

function Culture() {
  return (
    <div id='culture' className='text-white text-center h-[300px] text-5xl'>
      <h1>Culture</h1>
    </div>
  )
}

function Events() {
  return (
    <div id='events' className='text-white text-center h-[300px] text-5xl'>
      <h1>Events</h1>
    </div>
  )
}

function Media() {
  return (
    <div id='media' className='text-white text-center h-[300px] text-5xl'>
      <h1>Media</h1>
    </div>
  )
}


function Contact() {
  return (
    <div id='contact' className='text-white text-center h-[300px] text-5xl'>
      <h1>Contact</h1>
    </div>
  )
}

function App() {
  return (
    <>
      <Logo/>

      <div>
        <div className='flex justify-center flex-wrap'>
          <a href='#home' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>Home</a>
          <a href='#culture' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>Culture</a>
          <a href='#events' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>Events</a>
          <a href='#media' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>Media</a>
          <a href='#contact' className='text-gray-300 text-2xl font-bold italic pb-3 px-4 md:px-8 lg:px-12'>Contact</a>
        </div>
      </div>

      <div className='bg-white w-full h-[1px] mt-4 mb-4'></div>

      <Home/>
      <Culture/>
      <Events/>
      <Media/>
      <Contact/>
    </>
    
  )
}

export default App;
