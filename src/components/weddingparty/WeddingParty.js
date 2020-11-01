import React from "react";

import WeddingPartySplit from '../weddingPartySplit/WeddingPartySplit'

import goldy from '../../images/goldy.png'

import "./WeddingParty.scss"

export default function WeddingParty() {
  const firstRow = {
    left: {
      picture: goldy,
      name: 'Goldy on the Left',
      title: 'Best Goldy',
      bio: 'Bacon ipsum dolor amet salami boudin shoulder tail leberkas. Hamburger flank pork chop tenderloin picanha chicken turkey kielbasa. Filet mignon burgdoggen jerky salami, prosciutto meatloaf drumstick. Tri-tip brisket pastrami, shankle pancetta frankfurter kielbasa meatloaf burgdoggen short loin. Turkey bacon cupim tenderloin ball tip sausage. Boudin pork belly kevin sausage corned beef t-bone tri-tip, ribeye drumstick cupim. Ham frankfurter sausage capicola salami ball tip.',
    },
    right: {
      picture: goldy,
      name: 'Goldy on the Right',
      title: 'Best Goldy',
      bio: 'henlo'
      // bio: 'Bacon ipsum dolor amet salami boudin shoulder tail leberkas. Hamburger flank pork chop tenderloin picanha chicken turkey kielbasa. Filet mignon burgdoggen jerky salami, prosciutto meatloaf drumstick. Tri-tip brisket pastrami, shankle pancetta frankfurter kielbasa meatloaf burgdoggen short loin. Turkey bacon cupim tenderloin ball tip sausage. Boudin pork belly kevin sausage corned beef t-bone tri-tip, ribeye drumstick cupim. Ham frankfurter sausage capicola salami ball tip.',
    },
  }
  return (
    <div className="weddingPartyContent">
      <h1>Wedding Party</h1>
      <h3>Meet our family and friends who are walking down the aisle with us.</h3>

      <WeddingPartySplit {...firstRow} />
      <WeddingPartySplit {...firstRow} />
    </div>
  )
}
