import React from "react";
// import "materialize-css";

const Header = () => {
  return (
    <header className=" header centering">
      <div className="row textBackground">
        <h1 className="m-0 headText">The Nord Place</h1>

        <p className="m-0 headText" style={{ fontWeight: "700" }}>
          A Place to sell knick-nacks made by a bored Nord.
        </p>
      </div>
    </header>
  );
};

export default Header;
