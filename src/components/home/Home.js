import React from "react";

import Split from '../split/Split'

import "./Home.css"

export default function Home() {
  const howWeMet= {
    date: "4.23.14",
    story: "some story",
  }

  const proposal= {
    date: "4.23.14",
    story: "some story",
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
