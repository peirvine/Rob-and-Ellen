import React from "react";

import "./Split.css"

export default function Split(payload) {
  return (
    <div className="split">
      <div className="splitLeft">
        <p className="splitTitle"> {payload.title && (<p>{payload.title}</p>)} </p>
        <p className="splitDate"> {payload.date && (<p>{payload.date}</p>)} </p>
      </div>
      <div className="splitRight">
        <p className="splitBody"> {payload.body && (<p>{payload.body}</p>)} </p>
      </div>
    </div>
  )
}
