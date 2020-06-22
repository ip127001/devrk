import React from 'react'
import './App.scss'
import Header from './components/header/header'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="intro">
        <h1>Hi, I am a Frontend Developer</h1>
        <h2>Javascript, Angular, React</h2>
        <h2>
          Catch me on twitter <span>@geekrk</span>
        </h2>
      </div>
    </div>
  )
}

export default App
