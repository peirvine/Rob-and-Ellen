import React from "react";

import Split from '../split/Split'

import "./Home.scss"

import topimage from "../../images/homepageImage.jpg"

export default function Home() {
  const howWeMet= {
    title: 'How We Met',
    date: "January 2016",
    body: "We met in Multivariable Calculus during freshman year of college. We often made the long walk back from West Bank to Super Block together and were competitive with our test scores. It was 1.5 years later that Rob asked Ellen on their first date to Giordano’s and the rest is history!",
  }

  const proposal= {
    title: 'The Proposal',
    date: "7.24.20",
    body: "On a beautiful, sunny day at Lake Lizzie, Rob suggested they take a few pictures on the deck. With the tripod set up, Rob started recording and got down on one knee to ask Ellen to marry him. Ellen was surprised and through happy tears, she said yes! They were engaged, ready to start the next chapter of their lives together!",
  }

  return (
    <>
      <div className="homeImage">
        <h1>We're Getting Married!</h1>
      </div>
      <img src={topimage} alt="rob and ellen" id="mobileImage" />
      <div className="homeContent">
        <div id="homeNames">
          <p id="ellen">Ellen Aas</p>
          <p id="and">and</p>
          <p id="rob">Rob Renkor</p>
        </div>
        <div id="mobileNames">
          <p> Ellen Aas and Rob Renkor </p>
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
