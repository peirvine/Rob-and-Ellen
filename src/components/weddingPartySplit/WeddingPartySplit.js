import React from "react";
import Image from 'react-bootstrap/Image'

import "./WeddingPartySplit.scss"

export default function WeddingPartySplit(props) {
  console.warn('props', props)
  return (
    <div class="partyRow">
      <div class="partyLeft">
        <Image class="profileImage" src={props.left.picture} roundedCircle />
        <h2> {props.left.name} </h2>
        <h4> {props.left.title} </h4>
        <p> {props.left.bio} </p>
        </div>
      <div class="partyRight">
        <Image class="profileImage" src={props.right.picture} roundedCircle />
        <h2> {props.right.name} </h2>
        <h4> {props.right.title} </h4>
        <p> {props.right.bio} </p>
      </div>
    </div>
  )
}
