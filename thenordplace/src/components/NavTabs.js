import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#paracord"
          onClick={() => handlePageChange("Paracord")}
          className={
            currentPage === "Paracord" ? "nav-link active" : "nav-link"
          }
        >
          Paracord
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#sewed"
          onClick={() => handlePageChange("Sewed")}
          className={currentPage === "Sewed" ? "nav-link active" : "nav-link"}
        >
          Sewed
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#stickers"
          onClick={() => handlePageChange("Stickers")}
          className={
            currentPage === "Stickers" ? "nav-link active" : "nav-link"
          }
        >
          Stickers
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
