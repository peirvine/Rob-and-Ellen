import React from "react";

import Split from '../split/Split'

import "./Home.css"

export default function Home() {
  const howWeMet= {
    title: 'How We Met',
    date: "4.23.14",
    body: "We met at a classmate’s party and didn’t think much of it. Then a bunch of us went to karaoke after a long day of back-to-back classes and we both picked, “I’d Do Anything for Love.” And it just clicked. He went low, I went high. There were fist pumps. We harmonized by accident. That’s pretty much when we thought, “Okay. This could be something.”",
  }

  const proposal= {
    title: 'The Proposal',
    date: "4.23.14",
    body: "On the anniversary of when we first met, we went back to our old stomping grounds to do karaoke with friends. When 'I'd Do Anything for Love' came on, we ran up to the front. When the music suddenly died down, I looked over and she was down on one knee. I screamed, shouted YES, and we were engaged. We're so excited to celebrate this next chapter in our lives with you. See you in San Fran!",
  }

  return (
    <>
      <div className="homeImage">
        <h1>We're Getting Married!</h1>
      </div>
      <div className="homeContent">
        <div id="homeNames">
          <p id="ellen">Ellen Aas</p>
          <p id="and">and</p>
          <p id="rob">Rob Renkor</p>
        </div>
        <div id="dateCity">
          <div id="date">
            August 14, 2021
          </div>
          <div id="city">
            Hopkins, MN
          </div>
        </div>
        <Split {...howWeMet}/>
        <Split {...proposal}/>
      </div>
      <div id="homeBottomImage" />
    </>
  )
}
