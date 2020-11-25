import React from "react";

import "./Split.css"

export default function Split(payload) {
  return (
    <div className="split">
      <div className="splitLeft">
        {payload.title && (<p className="splitTitle"> {payload.title} </p>)}
        {payload.date && (<p className="splitDate"> {payload.date} </p>)}
      </div>
      <div className="splitRight">
        {payload.body && (<p className="splitBody"> {payload.body} </p> )}
      </div>
    </div>
  )
}
