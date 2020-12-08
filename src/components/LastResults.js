import React, { useContext, useEffect, Fragment } from "react";
import DataContext from "../context/DataContext";

const LastResults = () => {
  //CONTEXT INFO
  const DatadeContext = useContext(DataContext);
  const { getLastResults, last_results } = DatadeContext;

  useEffect(() => {
    getLastResults();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="columns mt-1 is-multiline is-centered">
      {last_results.map((data) => (
        <div
          key={data.id}
          className="has-background-warning card m-1 p-3 column is-12-mobile is-4-desktop"
        >
          <header className=" p-3 card-header has-background-danger-dark">
            {data.result !== "x-x" ? (
              <Fragment>
                <p className="title is-6 has-text-white">
                  {`RESULT: ${data.result}`}
                </p>
              </Fragment>
            ) : (
              <p className="title is-6 has-text-white">
                {`MATCH-TIME= ${data.hour}: ${data.minute}`}{" "}
              </p>
            )}
          </header>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-24x24">
                  <img src={data.local_shield} alt={data.local_abbr} />
                </figure>
              </div>
              <div className="media-content">
                <p className="equipo title is-5">{data.local.toUpperCase()}</p>
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
                <p className="equipo title is-5">
                  {data.visitor.toUpperCase()}
                </p>
              </div>
            </div>

            <div className="card-footer">
              {data.result !== "x-x" ? (
                data.live_minute !== "" ? (
                  <Fragment>
                    <progress
                      className="progress is-small is-black mt-5"
                      max="100"
                    ></progress>
                    <p className="equipo title is-5">
                      MIN: {data.live_minute}'
                    </p>
                  </Fragment>
                ) : (
                  <p className="title is-6 mt-5">FINISHED {data.extraTxt}</p>
                )
              ) : (
                <p className="equipo title is-5">START: {data.extraTxt}'</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastResults;
