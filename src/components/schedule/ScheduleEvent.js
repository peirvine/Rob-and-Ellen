import React from "react";

import './Schedule.scss'

export default function ScheduleEvent(payload) {
  return (
    <div className="scheduleEvent">
      <div className="eventLeft">
        <h3 className="eventTitle">{payload.title}</h3>
        <div className="eventDate">
          {payload.date}
        </div>
        <div className="eventTime">
          {payload.time}
        </div>
      </div>
      <div className="eventRight">
        <div className="eventLocation">
          <h5 className="eventBody">{payload.body}</h5>
          <div className="eventAddress">
            {payload.address1} <br />
            {payload.address2}
          </div>
        </div>
        <div className="eventButtons">
          <a
            href={payload.addressURL}
            target="_blank"
            rel="noreferrer"
            class="eventLink"
          >
            Map
          </a>
        </div>
      </div>
    </div>
  )
}
