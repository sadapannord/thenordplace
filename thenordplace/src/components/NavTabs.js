import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="row">
      <ul className="nav nav-tabs">
        <ul className="column">
          <a
            href="#paracord"
            onClick={() => handlePageChange("Paracord")}
            className={
              currentPage === "Paracord" ? "nav-link active" : "nav-link"
            }
          >
            Paracord
          </a>
        </ul>
        <ul className="column">
          <a
            href="#sewed"
            onClick={() => handlePageChange("Sewed")}
            className={currentPage === "Sewed" ? "nav-link active" : "nav-link"}
          >
            Sewed
          </a>
        </ul>
        <ul className="column">
          <a
            href="#stickers"
            onClick={() => handlePageChange("Stickers")}
            className={
              currentPage === "Stickers" ? "nav-link active" : "nav-link"
            }
          >
            Stickers
          </a>
        </ul>
        <ul className="column">
          <a
            href="#cart"
            onClick={() => handlePageChange("Cart")}
            className={currentPage === "Cart" ? "nav-link active" : "nav-link"}
          >
            Cart
          </a>
        </ul>
      </ul>
    </div>
  );
}

export default NavTabs;
