import React from "react";

import './Registry.scss'
import cb from "../../images/cb.jpg"
import macys from "../../images/macys.jpg"
import zola from "../../images/zola.jpg"

export default function Registry() {
  return (
    <div id="holder">
      <h2> Gift Registries </h2>

      <div id="images">
        <a href="https://www.crateandbarrel.com/gift-registry/robert-renkor-and-ellen-aas/r6195586" target="_blank" rel="noreferrer"><img src={cb} alt="crate&barrel" /></a>
        <a href="https://www.macys.com/wgl/registry/guest/7231387" target="_blank" rel="noreferrer"><img src={macys} alt="macys" /></a>
        <a href="https://www.zola.com/registry/ellenandrob2021" target="_blank" rel="noreferrer"><img src={zola} alt="zola" /></a>
      </div>
    </div>
  )
}
