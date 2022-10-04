import './App.css';

function Logo() {
  return (
    <img id="main-logo"
      src={require('./logos/PlugWhite.png')}
      alt='Plug Logo'
    />
  )
}

function App() {
  return (
    <Logo />
  )
}

export default App;
