import React from "react";

const Header = () => {
  return (
    <div className="colums ">
      <header className="column is-12 has-background-black">
        <h1 className="title is-1 ">
          <a
            className="navbar-item has-background-black has-text-danger"
            href="#!"
          >
            ENGLISH PREMIER LEAGUE
          </a>
        </h1>
     
        <div className="columns">
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item has-text-danger" href="#!">FIXTURE</a>

              <a className="navbar-item has-text-danger" href="#!">POSITIONS</a>

              <a className="navbar-item has-text-danger" href="#!">LIVE</a>
            </div>
          </div>
        </div>
        
      </header>
    </div>
  );
};
export default Header;
