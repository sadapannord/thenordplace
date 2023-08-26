import React from "react";
import bluePaislee from "../../../assets/paislee_feathers.jpg";

export default function CoinPouch() {
  return (
    <div>
      <p>Blue Paislee with Feathers</p>
      <img
        className="productPic"
        src={bluePaislee}
        alt="blue paislee and feather pouch"
      ></img>
    </div>
  );
}
