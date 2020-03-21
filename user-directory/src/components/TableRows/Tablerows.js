import React from "react";
import players from "../../players.json"

function TableRows() {

  
    return(
      <React.Fragment>
        <tr>
    <td>{players[0].First_Name}</td>
        <td>{players[0].First_Name}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </React.Fragment>
    )
}

export default TableRows;