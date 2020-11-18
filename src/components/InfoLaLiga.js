import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";

const InfoLaLiga = () => {
  const DatadeContext = useContext(DataContext);
  const { teams, getTeams } = DatadeContext;

  if (!teams) return null;

  return (
    <div className="column is-3">
      <table className="table">
        <thead>
          <tr>
            <th>
              <abbr title="Position">Pos</abbr>
            </th>
            <th>Team</th>
            <th>
              <abbr title="Played">Pld</abbr>
            </th>
            <th>
              <abbr title="Won">W</abbr>
            </th>
            <th>
              <abbr title="Drawn">D</abbr>
            </th>
            <th>
              <abbr title="Lost">L</abbr>
            </th>
            <th>
              <abbr title="Goals for">GF</abbr>
            </th>
            <th>
              <abbr title="Goals against">GA</abbr>
            </th>
            <th>
              <abbr title="Goal difference">GD</abbr>
            </th>
            <th>
              <abbr title="Points">Pts</abbr>
            </th>
          </tr>
        </thead>

        <tbody>
          {teams.map((data) => (
            <tr key={data.team}>
              <th>{data.pos}</th>
              <td>
                <a href="#!" title={data.basealias}>
                  {data.team}
                </a>
              </td>
              <td>{data.wins + data.draws + data.losses}</td>
              <td> {data.wins} </td>
              <td> {data.draws} </td>
              <td> {data.losses} </td>
              <td> {data.gf} </td>
              <td> {data.ga} </td>
              <td> {data.avg} </td>
              <td> {data.points} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InfoLaLiga;
