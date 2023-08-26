import React, { useState } from "react";
import Quilt from "./Sewed/Quilt";
import CoinPouch from "./Sewed/CoinPouch";
import Clutch from "./Sewed/Clutch";

export default function Sewed() {
  const [sewedSub, setSewedSub] = useState("Sewed");
  const changeSewedSub = () => {
    if (sewedSub === "CoinPouch") {
      return <CoinPouch />;
    }
    if (sewedSub === "Clutch") {
      return <Clutch />;
    }
    if (sewedSub === "CoinPouch") {
      return <Quilt />;
    }
  };
  return (
    <div className="sewed">
      <li onClick={() => setSewedSub("CoinPouch")}>
        <a href="#">Coin Pouch</a>
      </li>
      <li onClick={() => setSewedSub("Clutch")}>
        <a href="#">Clutch</a>
      </li>
      <li onClick={() => setSewedSub("Quilt")}>
        <a href="#">Quilt</a>
      </li>
      {changeSewedSub}
    </div>
  );
}
