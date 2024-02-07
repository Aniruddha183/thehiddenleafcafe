import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import video from "../src/assets/cafeMenuVid.mp4"
import logo from "./assets/HiddenCafeLogo.jpeg"

function App() {


  return (
    <>
    <div>
      <div className="header" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
      <img style={{filter:"invert(1)",width:"60px"}} src={logo} alt="" />
      <h3 style={{fontWeight:800, fontStyle:"italic", width:"200px", padding:"5px", paddingBottom:"2px"}}><span style={{color:"pink"}}>The Hidden Leaf Cafe</span></h3>
      </div>
      <video  style={{marginTop:"5px"}} width="330" height="440" autoPlay muted >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    </>
  )
}

export default App
