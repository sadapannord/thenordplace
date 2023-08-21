import React, { useState } from "react";
import Leashes from "./Leashes";
import KeyChains from "./KeyChains";
import Collars from "./Collars";

export default function Paracord() {
  const [paraSub, setParaSub] = useState("Leashes");
  const changeParaSub = () => {
    if (paraSub === "Leashes") {
      return <Leashes />;
    }
    if (paraSub === "Collars") {
      return <Collars />;
    }
    if (paraSub === "KeyChains") {
      return <KeyChains />;
    }
    return <Leashes />;
  };
  return (
    <div>
      <ul className="nav nav-tabs row">
        <li onClick={() => setParaSub("Leashes")}>
          <a href="#">Leashes</a>
        </li>
        <li onClick={() => setParaSub("Collars")}>
          <a href="#">Collars</a>
        </li>
        <li onClick={() => setParaSub("KeyChains")}>
          <a href="#">KeyChains</a>
        </li>
      </ul>
      {changeParaSub()}
    </div>
  );
}
//  add new navs for paracord
