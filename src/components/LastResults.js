import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";

const LastResults = () => {
  //CONTEXT INFO
  const DatadeContext = useContext(DataContext);
  const { getLastResults, getTeams, teams, last_results } = DatadeContext;

  useEffect(() => {
    setTimeout(() => {
      getLastResults();
    }, 1000);
  }, []);

  return (
    <div className="columns mt-1 is-gapless">
      {last_results.map((data) => (
        <div key={data.id} className="has-background-warning card m-1 p-3 column">
          <header className=" p-3 card-header">
            <p className="title is-5">RESULTADO: {data.result}</p>
          </header>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-24x24">
                  <img src={data.local_shield} alt={data.local_abbr} />
                </figure>
              </div>
              <div className="media-content">
                <p className='equipo'>{data.local.toUpperCase()}</p>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-24x24">
                  <img src={data.visitor_shield} alt={data.visitor_abbr} />
                </figure>
              </div>
              <div className="media-content">
                <p className='equipo'>{data.visitor.toUpperCase()}</p>
              </div>
            </div>
          </div>
         
         
       
        </div>
      ))}
    </div>
  );
};

export default LastResults;
