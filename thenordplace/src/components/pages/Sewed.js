import React from "react";
import blueLake from "../../assets/blue_lake_hike.jpg";
import bluePaislee from "../../assets/paislee_feathers.jpg";

export default function Sewed() {
  return (
    <div className="sewed">
      <p>Coin Pouch</p>
      <p>Clutch</p>
      <p>Quilts</p>
      <img className= "productPic" src={bluePaislee} alt="blue paislee and feather pouch"></img>
      <img className= "productPic" src={blueLake} alt="MT"></img>
    </div>
  );
}
