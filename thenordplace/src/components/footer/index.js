import React from "react";
// Import hooks from React Router

const Footer = () => {
  return (
    <footer className="w-100 mt-auto text-dark">
      <div className="container text-center mb-5">
        <h4>&copy; {new Date().getFullYear()}</h4>
        <div className="row">
          <div className="logoLink col s1 offset-s10">
            <a href="https://github.com/sadapannord">
              {/* <img
                className="image"
                src={require("../../assets/gitHub-mark.png")}
                alt="GitHub logo"
              /> */}
              <div className="middle">
                <div className="text">GitHub Repo</div>
              </div>
            </a>
          </div>
          <div className="logoLink col s1">
            <a href="https://www.linkedin.com/in/sada-pan-nord/">
              {/* <img
                className="image linkedIn"
                src={require("../../assets/LinkedIn-Blue-21@2x.png")}
                alt="LinkedIn logo"
              /> */}
              <div className="middle">
                <div className="text">LinkedIn Profile</div>
              </div>
            </a>
          </div>
        </div>
        <div>
          <p>Contact</p>
          <ul>Phone: 303-332-7351</ul>
          <ul>Email: sadapan@gmail.com</ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
