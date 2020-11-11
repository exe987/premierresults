import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";

const Header = () => {

  //CONTEXT INFO
  const DatadeContext = useContext(DataContext);
  const {getTeams, teams } = DatadeContext;

  useEffect(() => {
    getTeams();
    // eslint-disable-next-line
  }, []);

  return (
    <header className="columns">
      <div className="column is-12 has-background-warning">
        <a href='#!' className="column is-3">
          <figure className="image is-128x128 has-background-warning">
            <img alt='LaLiga' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LaLiga_Santander.svg/1200px-LaLiga_Santander.svg.png" />
          </figure>
        </a>

        <h1 className="columns title is-1 ">
          <a
            className="navbar-item has-background-danger-dark has-text-centered has-text-warning column"
            href="#!"
          >
            LIGA DE FUTBOL PROFESIONAL
          </a>
        </h1>

        <div className="has-background-white columns">
          {teams.map((team) => (
            <a
              key={team.id}
              className="column is-inline-block is-2-mobile"
              href="#!"
            >
              <figure className="image is-24x24">
                <img alt={team.abbr} src={team.shield} />
              </figure>
            </a>
          ))}
        </div>
      </div>
      
    </header>
  );
};
export default Header;
