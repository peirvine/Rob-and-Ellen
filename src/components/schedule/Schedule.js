import React from "react";
import Split from "../split/Split"
import ScheduleEvent from "./ScheduleEvent"

import './Schedule.scss'

export default function Schedule() {
  const ceremony= {
    title: 'Ceremony',
    date: "Saturday, August 14th, 2021",
    time: "4:00pm",
    body: "Gethsemane Lutheran Church, Hopkins, MN",
    address1: '715 Minnetonka Mills Rd',
    address2: 'Hopkins, MN 55343',
    addressURL: 'https://goo.gl/maps/VGd1HLMVye7fvJw68'
  }

  const reception= {
    title: 'Reception',
    date: "Saturday, August 14th, 2021",
    time: 'TBD',
    body: "Oak Ridge Country Club",
    address1: '700 Oak Ridge Rd',
    address2: 'Hopkins, MN 55343',
    addressURL: 'https://goo.gl/maps/zhVzrtzVBpWkq8i18'
  }

  return (
    <div id="wrapper">
      <h2>
        Schedule
      </h2>
      <p id="subhead">
        Here's what to expect during our wedding weekend. We can't wait to celebrate with you!
      </p>

      <ScheduleEvent {...ceremony}/>
      <ScheduleEvent {...reception}/>
    </div>
  )
}
