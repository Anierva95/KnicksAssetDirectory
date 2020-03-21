import React from "react";
import players from "../../players.json"

function TableRows() {

  let playerRows = players.map(player => {
    return (
      <tr>
      <td>{player.First_Name}</td>
      <td>{player.Last_Name}</td>
      <td>{player.Position}</td>
      <td>{player.Asset_Rank}</td>
      <td>{player.Description}</td>
        </tr>
    )
  })

    return(
      <React.Fragment>
        {playerRows}
      </React.Fragment>
    )
}

export default TableRows;