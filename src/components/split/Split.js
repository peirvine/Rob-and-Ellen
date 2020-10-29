import React from "react";

export default function Split(payload) {
  return (
    <>
    <p> left {payload.date && (<p>{payload.date}</p>)} </p>
    <p> right </p>
    </>
  )
}
