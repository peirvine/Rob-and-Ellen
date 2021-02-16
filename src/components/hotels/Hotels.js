import React from "react";

import './Hotels.scss'

import dt from "../../images/dt.png"
import marriott from "../../images/marriott.png"

export default function Hotels() {
  return (
    <div id="holder">
      <h2>
        Hotels
      </h2>
      <p id="subhead">
        We've got some hotel blocks set up at local hotels! <br /> Please book by 7/23/2021 for the group rate.
      </p>
      <div id="images">
        <a href="https://www.marriott.com/events/start.mi?id=1610398141855&key=GRP" target="_blank" rel="noreferrer"><img src={marriott} alt="crate&barrel" /></a>
        <a href="http://doubletree.hilton.com/en/dt/groups/personalized/M/MSPPHDT-ARW-20210813/index.jhtml" target="_blank" rel="noreferrer"><img src={dt} alt="crate&barrel" /></a>
      </div>
    </div>
  )
}
