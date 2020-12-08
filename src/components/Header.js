import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const Header = () => {
  //CONTEXT INFO
  const DatadeContext = useContext(DataContext);
  const { getTeams, teams } = DatadeContext;

  useEffect(() => {
    getTeams();
    // eslint-disable-next-line
  }, []);
  return (
    <header className="nav-bar columns is-centered slider is-fixed-top">
      <div className="column is-12 has-background-warning">
        <Link to={"/"} className="column is-3">
          <figure className="image is-128x128 has-background-warning">
            <img
              alt="LaLiga"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LaLiga_Santander.svg/1200px-LaLiga_Santander.svg.png"
            />
          </figure>
        </Link>
        <h1 className="columns title is-1 ">
          <a
            className="navbar-item has-background-danger-dark has-text-centered has-text-warning column"
            href="https://www.laliga.com/"
            target="_blank"
            rel="noopener noreferrer" 
          >
            LIGA DE FUTBOL PROFESIONAL
          </a>
        </h1>
        <nav className="has-background-white columns slide-track ">
          {teams.map((team) => (
            <a key={team.id} className="navbar-item slide column" href="#!">
              <figure className="image is-24x24">
                <img alt={team.abbr} src={team.shield} />
              </figure>
            </a>
          ))}
        </nav>

        <div className="columns has-background-black">
          <nav className="navbar is-black">
            <Link to={"/"} className="navbar-item has-text-danger-dark ">
            <i className="fas fa-home"></i>
              HOME
             
            </Link>
            <Link to={"/info"} className="navbar-item has-text-danger-dark ">
            <i className="fas fa-table"></i>
              POSITIONS
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
