import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Paracord from "./pages/Paracord";
import Sewed from "./pages/Sewed";
import Stickers from "./pages/Stickers";
import Footer from "./footer/index";
import Header from "./header/index";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Contact") {
      return <Paracord />;
    }
    if (currentPage === "Project") {
      return <Sewed />;
    }
    if (currentPage === "Resume") {
      return <Stickers />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
